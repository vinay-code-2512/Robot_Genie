"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-[#05050f]" aria-hidden />,
});

const DeferredHomeSections = dynamic(() => import("@/components/DeferredHomeSections"), {
  loading: () => <div className="min-h-[24rem]" aria-hidden />,
});

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <DeferredHomeSections />
    </>
  );
}
