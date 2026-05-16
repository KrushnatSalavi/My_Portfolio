import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_8px_40px_rgba(0,0,0,0.3)]
      transition-all
      duration-300
      hover:border-indigo-500/30
      hover:bg-white/[0.07]
      ${className}
      `}
    >
      {children}
    </div>
  );
}