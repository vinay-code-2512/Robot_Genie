"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "framer-motion";

function useLiteMode() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const apply = () => setLite(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return lite;
}

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const lite = useLiteMode();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setInit(false);
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, [reduceMotion]);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: lite ? 30 : 48,
      interactivity: {
        events: {
          onHover: {
            enable: !lite,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.35,
          },
        },
      },
      particles: {
        color: {
          value: ["#00f0ff", "#b500ff"],
        },
        links: {
          color: "#00f0ff",
          distance: lite ? 120 : 150,
          enable: true,
          opacity: lite ? 0.14 : 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: lite ? 0.65 : 0.9,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: lite ? 12 : 32,
        },
        opacity: {
          value: lite ? 0.4 : 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: lite ? 2.5 : 3 },
        },
      },
      detectRetina: true,
    }),
    [lite]
  );

  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  if (reduceMotion || !init) {
    return <div className="absolute inset-0 -z-10 bg-[#05050f]" aria-hidden />;
  }

  return (
    <div className="absolute inset-0 -z-10 bg-[#05050f]">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </div>
  );
}
