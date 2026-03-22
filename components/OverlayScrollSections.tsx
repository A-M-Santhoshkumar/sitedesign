"use client";

import { useEffect, useRef } from "react";

function OverlayScrollSections() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ✅ Load GSAP only on client
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !section2Ref.current) return;

      const ctx = gsap.context(() => {
        gsap.to(section2Ref.current, {
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    };

    loadGSAP();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Section 1 */}
      <section className="h-screen w-full bg-blue-500 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Section 1</h1>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="absolute top-0 left-0 h-screen w-full bg-white flex items-center justify-center translate-y-full"
      >
        <h1 className="text-4xl text-black font-bold">
          Section 2 (Slide Over)
        </h1>
      </section>
    </div>
  );
}

export default OverlayScrollSections;