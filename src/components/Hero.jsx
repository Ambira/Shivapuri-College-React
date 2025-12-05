import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef();

  // Simple parallax on scroll (subtle)
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    function onScroll() {
      const y = window.scrollY / 8;
      el.style.transform = `translateY(${y}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden hero-bg">
      {/* STRONG RED PARALLAX BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }} // stronger red
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Shivapuri College</h1>
            <p className="mt-5 text-lg md:text-xl max-w-xl">
              A leading public college in Kathmandu offering high-quality management education — Bachelor of Business Studies (BBS) and +2 Management programs.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/programs" className="px-6 py-3 rounded bg-white text-black font-semibold shadow hover:opacity-95">Our Programs</a>
              <a href="/contact" className="px-6 py-3 rounded border border-white text-black hover:bg-white hover:text-black transition">Contact</a>
            </div>
          </div>

          {/* CAMPUS QUICK FACTS CARD (white background) */}
          <div className="bg-white rounded-lg shadow p-6 text-black">
            <h3 className="font-bold text-xl">Campus quick facts</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><strong>Established:</strong> 2066 BS (2010 AD)</li>
              <li><strong>Students:</strong> ~1700</li>
              <li><strong>BBS students:</strong> ~700</li>
              <li><strong>Employability:</strong> ~97% within 6 months</li>
              <li><strong>Affiliations:</strong> Tribhuvan University, NEB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
