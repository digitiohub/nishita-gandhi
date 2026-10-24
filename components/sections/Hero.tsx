"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, SealCheck } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const FileStack = dynamic(() => import("@/components/three/FileStack"), { ssr: false });

// WebGL only where it's cheap and welcome: desktop pointer, motion allowed, WebGL present
function useWants3D() {
  const [wants, setWants] = useState(false);
  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !!document.createElement("canvas").getContext("webgl2");
    if (ok) document.fonts.ready.then(() => setWants(true));
  }, []);
  return wants;
}

const rise = (i: number) => ({ className: "rise", style: { "--i": i } as React.CSSProperties });

export function Hero() {
  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${pointerX}px ${pointerY}px, rgba(94,196,182,0.09), transparent 45%)`;
  const wants3D = useWants3D();
  const [ready, setReady] = useState(false);

  return (
    <section
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
      }}
      className="relative overflow-hidden bg-bg-dark px-6 pb-16 pt-28 lg:px-10 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="rise pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F6F3EC 1px, transparent 1px), linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 hidden motion-safe:[@media(hover:hover)_and_(pointer:fine)]:block"
        aria-hidden="true"
      />

      {/* Phones read headline, file, actions, then the lede; desktop sets text left and the file right */}
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[1fr_auto_auto_auto_1fr] lg:gap-x-6 lg:gap-y-0">
          <h1 className="text-foreground-inv lg:col-start-1 lg:row-start-2">
            <span className="block font-serif text-[clamp(3rem,9.2vw,6rem)] leading-[1] tracking-[-0.015em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="mask-rise">Compliance,</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="mask-rise font-serif-text italic text-accent [--i:1]">handled.</span>
              </span>
            </span>
            <span {...rise(2)} className="rise mt-6 block max-w-[30ch] font-serif-text text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.4] text-foreground-inv/90">
              Chartered Accountant in Mulund for income tax, GST, audit and company compliance
            </span>
          </h1>


          {/* The file: WebGL on capable desktops, the same scene as a still everywhere else */}
          <div {...rise(2)} className="rise relative mx-auto aspect-[4/5] w-full max-w-[250px] sm:max-w-[400px] lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:max-w-none lg:self-center">
            <Image
              src="/images/file-stack.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 400px, 620px"
              className={cn("object-contain transition-opacity duration-700", ready && "opacity-0")}
            />
            {wants3D && (
              <div className={cn("absolute inset-0 opacity-0 transition-opacity duration-700", ready && "opacity-100")}>
                <FileStack onReady={() => setReady(true)} />
              </div>
            )}

            <figure className="absolute left-0 top-[3%] z-[2] w-[40%] max-w-[190px] sm:-left-2 lg:-left-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border-[6px] border-[#F6F3EC] bg-surface-dark shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] -rotate-[2.5deg]">
                <Image
                  src="/images/nishita-full.jpg"
                  alt="Nishita Gandhi, Chartered Accountant"
                  fill
                  priority
                  sizes="210px"
                  className="object-cover object-[50%_22%]"
                />
              </div>
              <figcaption className="mt-4 hidden items-center sm:flex gap-2.5 rounded-lg border border-border-dark bg-bg-dark/90 px-3.5 py-2.5 shadow-[0_16px_36px_-16px_rgba(0,0,0,0.6)] backdrop-blur">
                <SealCheck size={20} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-tight">
                  <span className="block text-[13px] font-semibold text-foreground-inv">Member, ICAI</span>
                  <span className="block text-[12px] text-muted-inv">CA since {client.qualifiedYear}</span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div {...rise(4)} className="rise flex flex-col lg:col-start-1 lg:row-start-4 lg:mt-10 gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <Link href="/contact">
                Get in touch
                <ArrowRight
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
              </Link>
            </Button>
            <Button size="lg" variant="outline-inverse" className="w-full sm:w-auto" asChild>
              <Link href="/services/income-tax-return-filing">Income tax returns</Link>
            </Button>
          </div>
          <p {...rise(3)} className="rise max-w-[56ch] lg:col-start-1 lg:row-start-3 lg:mt-6 text-base leading-[1.7] text-muted-inv sm:text-[17px]">
            Nishita Gandhi qualified as a Chartered Accountant in 2015 and has spent the decade since signing audits,
            preparing tax returns and representing clients before the tax authorities. From her practice in Mulund, she
            now works directly with individuals, NRIs, businesses and companies – one person who understands your
            numbers, keeps your deadlines, and explains every filing before it goes in.
          </p>
      </div>
    </section>
  );
}
