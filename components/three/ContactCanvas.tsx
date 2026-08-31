"use client";

import { MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function ContactCanvas() {
  return (
    <Canvas
      className="hidden md:block"
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true }}
    >
      <mesh rotation={[0, 0, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <MeshDistortMaterial
          color="#3457D5"
          distort={0.04}
          speed={0.8}
          opacity={0.06}
          transparent
        />
      </mesh>
    </Canvas>
  );
}
