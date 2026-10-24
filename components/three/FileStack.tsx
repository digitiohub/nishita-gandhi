"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// Bottom to top: the papers in a typical file, the salaried filer's return on top
const SHEETS = [
  { code: "Form 3CD", sub: "Tax audit report" },
  { code: "GSTR-3B", sub: "Monthly GST return" },
  { code: "AIS", sub: "Annual Information Statement" },
  { code: "Form 16", sub: "Certificate of TDS on salary" },
  { code: "ITR", sub: "Income tax return", top: true },
];

const FOLDER = "#2B3F5C";
const INK = "#14202E";
const TEAL = "#1A6B62";
const PAPER = "#FBF9F4";

const SHEET_W = 2.7;
const SHEET_D = 3.6;
const TAB_W = 0.46;
const TAB_D = 0.36;
// Tabs step across the near edge; the top sheet's sits far left, behind the portrait card
const tabX = (i: number) => [1.12, 0.56, 0, -0.56, -1.12][i];
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

function bodyFont() {
  return getComputedStyle(document.body).fontFamily || "sans-serif";
}

function sheetTexture(code: string, sub: string, top?: boolean) {
  const w = 1024;
  const h = Math.round((w * SHEET_D) / SHEET_W);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  const font = bodyFont();

  g.fillStyle = PAPER;
  g.fillRect(0, 0, w, h);

  // Header block
  g.fillStyle = INK;
  g.font = `800 112px ${font}`;
  g.fillText(code, 88, 196);
  g.fillStyle = "#5B6270";
  g.font = `600 40px ${font}`;
  g.fillText(sub, 92, 262);
  g.fillStyle = TEAL;
  g.fillRect(88, 312, w - 176, 6);

  // Form rows: label stubs and entry boxes
  let y = 400;
  for (let i = 0; i < 9; i++) {
    g.fillStyle = "#D9D2C2";
    g.fillRect(88, y, 180 + ((i * 97) % 160), 18);
    g.strokeStyle = "#CFC7B4";
    g.lineWidth = 3;
    g.strokeRect(w - 88 - 340, y - 22, 340, 62);
    if (i % 3 === 1) {
      g.fillStyle = "#B9B09B";
      g.fillRect(w - 88 - 320, y + 2, 120 + ((i * 53) % 140), 14);
    }
    y += 108;
  }

  // Ruled area at the foot of the page
  g.strokeStyle = "#E1DACB";
  g.lineWidth = 3;
  for (let ly = y + 40; ly < h - 120; ly += 56) {
    g.beginPath();
    g.moveTo(88, ly);
    g.lineTo(w - 88, ly);
    g.stroke();
  }

  if (top) {
    // A tick in the margin: this one has been reviewed
    const cx = w - 170;
    const cy = 190;
    g.strokeStyle = TEAL;
    g.lineWidth = 10;
    g.beginPath();
    g.arc(cx, cy, 70, 0, Math.PI * 2);
    g.stroke();
    g.lineWidth = 14;
    g.lineCap = "round";
    g.beginPath();
    g.moveTo(cx - 32, cy + 2);
    g.lineTo(cx - 8, cy + 28);
    g.lineTo(cx + 36, cy - 26);
    g.stroke();
  }

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// Divider tab on a sheet's near edge, so every paper in the stack can be named at a glance
function tabTexture(code: string, top?: boolean) {
  const c = document.createElement("canvas");
  c.width = 480;
  c.height = 240;
  const g = c.getContext("2d")!;
  g.fillStyle = top ? "#E4F1EE" : "#F1ECE0";
  g.fillRect(0, 0, 480, 240);
  g.fillStyle = INK;
  g.font = `700 88px ${bodyFont()}`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(code, 240, 128, 440);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function labelTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 160;
  const g = c.getContext("2d")!;
  g.fillStyle = "#F6F3EC";
  g.fillRect(0, 0, 512, 160);
  g.fillStyle = INK;
  const caslon = getComputedStyle(document.documentElement).getPropertyValue("--font-caslon-text").trim();
  g.font = `italic 400 72px ${caslon || "Georgia"}, serif`;
  g.textBaseline = "middle";
  g.fillText("Your file", 48, 86);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  grad.addColorStop(0, "rgba(0,0,0,0.55)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

// Where each sheet comes to rest, and where it flies in from
function layout(i: number) {
  // A slight fan reads as several papers; kept small so every divider tab stays clear
  const jitter = [0.012, -0.01, 0.008, -0.006, 0.004][i];
  return {
    rest: new THREE.Vector3([0.03, -0.03, 0.02, -0.02, 0][i], 0.06 + i * 0.026, [0.02, 0, 0.01, -0.01, -0.02][i]),
    restRot: jitter,
    from: new THREE.Vector3((i % 2 ? 1 : -1) * (1.6 + i * 0.2), 2.4 + i * 0.5, -0.6 + i * 0.35),
    fromRot: (i % 2 ? 1 : -1) * (0.5 + i * 0.08),
    delay: 0.15 + i * 0.16,
  };
}

function Stack({ onReady }: { onReady: () => void }) {
  const group = useRef<THREE.Group>(null);
  const sheets = useRef<(THREE.Mesh | null)[]>([]);
  const start = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const { invalidate } = useThree();

  const assets = useMemo(() => {
    const side = new THREE.MeshStandardMaterial({ color: "#E9E2D2", roughness: 0.9 });
    const sheetMats = SHEETS.map((s) => {
      const top = new THREE.MeshStandardMaterial({ map: sheetTexture(s.code, s.sub, s.top), roughness: 0.8 });
      return [side, side, top, side, side, side];
    });
    return {
      sheetGeo: new THREE.BoxGeometry(SHEET_W, 0.012, SHEET_D),
      tabGeo2: new THREE.BoxGeometry(TAB_W, 0.012, TAB_D),
      tabMats: SHEETS.map((s) => {
        const face = new THREE.MeshStandardMaterial({ map: tabTexture(s.code, s.top), roughness: 0.8 });
        return [side, side, face, side, side, side];
      }),
      sheetMats,
      folderGeo: new RoundedBoxGeometry(3.05, 0.05, 3.95, 3, 0.025),
      tabGeo: new RoundedBoxGeometry(1.25, 0.05, 0.5, 3, 0.025),
      folderMat: new THREE.MeshStandardMaterial({ color: FOLDER, roughness: 0.55, metalness: 0.05 }),
      label: new THREE.MeshStandardMaterial({ map: labelTexture(), roughness: 0.9 }),
      shadow: new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }),
      shadowGeo: new THREE.PlaneGeometry(5.2, 6.2),
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      scroll.current = Math.min(1, window.scrollY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onReady();
    invalidate();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [invalidate, onReady]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (start.current === null) start.current = t;
    const since = t - start.current;

    sheets.current.forEach((mesh, i) => {
      if (!mesh) return;
      const l = layout(i);
      const k = easeOutExpo(Math.max(0, (since - l.delay) / 1.1));
      mesh.position.lerpVectors(l.from, l.rest, k);
      mesh.rotation.y = THREE.MathUtils.lerp(l.fromRot, l.restRot, k);
      mesh.rotation.z = (1 - k) * (i % 2 ? -0.25 : 0.25);
      // The top sheet lifts a hair, as if just placed
      if (i === SHEETS.length - 1 && k >= 1) mesh.position.y = l.rest.y + 0.03 + Math.sin(t * 1.4) * 0.012;
    });

    const g = group.current;
    if (g) {
      const targetX = 0.95 + pointer.current.y * 0.06 - scroll.current * 0.25;
      const targetY = -0.42 + pointer.current.x * 0.14 + scroll.current * 0.5;
      const damp = 1 - Math.exp(-delta * 4);
      g.rotation.x += (targetX - g.rotation.x) * damp;
      g.rotation.y += (targetY - g.rotation.y) * damp;
      g.position.y = Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group ref={group} rotation={[0.95, -0.42, 0]}>
      <mesh geometry={assets.shadowGeo} material={assets.shadow} rotation-x={-Math.PI / 2} position={[0.18, -0.06, 0.22]} />
      <mesh geometry={assets.folderGeo} material={assets.folderMat} />
      <mesh geometry={assets.tabGeo} material={assets.folderMat} position={[-0.8, 0, -2.2]} />
      <mesh material={assets.label} rotation-x={-Math.PI / 2} position={[-0.8, 0.027, -2.22]}>
        <planeGeometry args={[1.0, 0.31]} />
      </mesh>
      {SHEETS.map((s, i) => (
        <mesh
          key={s.code}
          ref={(m) => {
            sheets.current[i] = m;
          }}
          geometry={assets.sheetGeo}
          material={assets.sheetMats[i]}
          position={layout(i).from}
        >
          <mesh geometry={assets.tabGeo2} material={assets.tabMats[i]} position={[tabX(i), 0, SHEET_D / 2 + TAB_D / 2 - 0.01]} />
        </mesh>
      ))}
    </group>
  );
}

export default function FileStack({ onReady }: { onReady: () => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Stop rendering when the hero is scrolled away
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.4, 10.2], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        aria-hidden="true"
      >
        <hemisphereLight args={["#ffffff", "#0E1A2B", 0.9]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[3.5, 7, 6]} intensity={2.3} />
        <directionalLight position={[-5, 2.5, -4]} intensity={1.1} color="#5EC4B6" />
        <Stack onReady={onReady} />
      </Canvas>
    </div>
  );
}
