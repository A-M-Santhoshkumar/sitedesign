"use client";

import { useEffect, useRef } from "react";

function MouseDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;

    const moveDot = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveDot);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveDot);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundImage:
          "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
        mixBlendMode: "difference",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s linear",
      }}
    />
  );
}

export default MouseDot;