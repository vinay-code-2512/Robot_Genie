"use client";

import { memo, useCallback, useRef, useState } from "react";
import { Clock, Briefcase } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  career: string;
}

interface TiltTransform {
  rotateX: number;
  rotateY: number;
}

function CourseCardInner({ title, description, duration, career }: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltTransform>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative h-full perspective-1000"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className={`
          relative h-full rounded-2xl p-8 flex flex-col
          bg-white/[0.03] backdrop-blur-lg border border-white/[0.06]
          shadow-[0_4px_24px_rgba(0,0,0,0.25)]
          transition-all duration-300 ease-out
          ${isHovered 
            ? "border-[var(--neon-blue)]/50 shadow-[0_12px_48px_rgba(0,240,255,0.15),0_0_60px_rgba(181,0,255,0.08),0_24px_64px_rgba(0,0,0,0.4)]" 
            : ""
          }
        `}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${isHovered ? "translateZ(30px)" : ""}`,
          transition: isHovered ? "transform 0.08s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out" : "transform 0.5s ease-out",
        }}
      >
        <div className="relative mb-5" style={{ transform: "translateZ(40px)" }}>
          <h3 
            className="text-2xl font-bold text-white transition-all duration-300"
            style={{
              background: isHovered ? "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))" : "none",
              WebkitBackgroundClip: isHovered ? "text" : "unset",
              WebkitTextFillColor: isHovered ? "transparent" : "unset",
              backgroundClip: isHovered ? "text" : "unset",
            }}
          >
            {title}
          </h3>
          <div 
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full transition-all duration-300"
            style={{ 
              height: isHovered ? "2rem" : "0",
              opacity: isHovered ? 1 : 0
            }} 
          />
        </div>
        
        <p 
          className="text-gray-400 flex-grow mb-8 text-[15px] leading-relaxed"
          style={{ transform: "translateZ(30px)" }}
        >
          {description}
        </p>

        <div 
          className="flex flex-col gap-3.5 mt-auto pt-6 border-t border-white/[0.08]"
          style={{ transform: "translateZ(35px)" }}
        >
          <div className="flex items-center gap-3 text-[14px] text-gray-300">
            <div className="relative">
              <Clock className="w-4 h-4 text-[var(--neon-purple)]" />
              <div className="absolute -inset-1.5 bg-[var(--neon-purple)]/20 rounded-full blur-sm" />
            </div>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-3 text-[14px] text-gray-300">
            <div className="relative">
              <Briefcase className="w-4 h-4 text-[var(--neon-blue)]" />
              <div className="absolute -inset-1.5 bg-[var(--neon-blue)]/20 rounded-full blur-sm" />
            </div>
            <span>{career}</span>
          </div>
        </div>
      </div>

      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 70%)`,
            transform: `translateX(${tilt.rotateY * 3}px) translateY(${tilt.rotateX * -3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}
    </div>
  );
}

export default memo(CourseCardInner);
