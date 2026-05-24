/* 
 * TCMC Home Page — "Challenger Bold" Design
 * Sections: Hero, Announcements, Join as Student
 */
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Bell, BellOff, ClipboardList } from "lucide-react";

const announcements = [
  {
    id: 1,
    tag: "Enrollment",
    date: "TBD",
    title: "Enrollment Window Opening Soon",
    body: "Applications for the 2024–2025 season will open shortly. Fill out the Google Form to secure your spot. All Tyee Middle School students are welcome to apply.",
    highlight: true,
  },
  {
    id: 2,
    tag: "Placement Test",
    date: "TBD",
    title: "Placement Test Date — To Be Announced",
    body: "The placement test date has not yet been set. Enrolled students will be notified via email once the date is confirmed. No prior competition experience is required.",
    highlight: false,
  },
  {
    id: 3,
    tag: "Competitions",
    date: "TBD",
    title: "AMC 8 & MATHCOUNTS Dates Coming",
    body: "Competition dates for AMC 8 and MATHCOUNTS will be posted here and on the Calendar page as soon as they are confirmed. Stay tuned!",
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663338750515/VCnkmmgjtcsYE46fFjnTbZ/tcmc-hero-bg-B5if8ggCi38VbN4wbkDbSY.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1C1C1E]/75" />
        {/* Red diagonal accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-[#B91C1C]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B91C1C]/20 border border-[#B91C1C]/40 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#B91C1C] animate-pulse" />
            <span className="text-[#F87171] text-xs font-semibold tracking-widest uppercase">
              Tyee Middle School · Bellevue, WA
            </span>
          </div>

          <h1 className="font-display text-white leading-none mb-6 animate-fade-up delay-100">
            <span className="block text-5xl sm:text-7xl lg:text-9xl">TYEE</span>
            <span className="block text-4xl sm:text-6xl lg:text-8xl text-[#B91C1C]">
              COMPETITION
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-9xl">MATH CLUB</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed animate-fade-up delay-200">
            Where middle school mathematicians train, compete, and conquer.
            Join 100+ students preparing for{" "}
            <span className="text-white font-semibold">AMC 8</span> and{" "}
            <span className="text-white font-semibold">MATHCOUNTS</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <a
              href="#announcements"
              className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-8 py-4 rounded font-semibold text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#B91C1C]/30"
            >
              <Bell size={20} /> Announcements
            </a>
            <a
              href="#join"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded font-semibold text-lg transition-all duration-200 hover:bg-white/10"
            >
              Join TCMC <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-white/50" />
        </div>
      </section>

      {/* ── ANNOUNCEMENTS ── */}
      <section id="announcements" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-[#B91C1C]" />
              <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
                Announcements
              </span>
            </div>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-[#1C1C1E] leading-none mb-10">
            LATEST<br />
            <span className="text-[#B91C1C]">UPDATES</span>
          </h2>

          {announcements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <BellOff size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-400 text-lg font-medium">No announcements yet.</p>
              <p className="text-gray-400 text-sm mt-1">Check back soon for updates on enrollment, placement tests, and competitions.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-xl p-6 border-l-4 transition-shadow hover:shadow-md ${
                    item.highlight
                      ? "bg-[#B91C1C]/5 border-[#B91C1C]"
                      : "bg-[#F4F4F5] border-gray-300"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        item.highlight
                          ? "bg-[#B91C1C] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="font-mono-accent text-xs text-gray-400">{item.date}</span>
                    {item.highlight && (
                      <span className="flex items-center gap-1 text-xs text-[#B91C1C] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-pulse" />
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#1C1C1E] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── JOIN AS STUDENT ── */}
      <section id="join" className="py-20 bg-[#1C1C1E] relative overflow-hidden">
        {/* Background watermark */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663338750515/VCnkmmgjtcsYE46fFjnTbZ/tcmc-wolf-hero-chyBjo7ji2DKSDn7Nwo5aP.webp)`,
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Join TCMC
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl text-white leading-none mb-6">
            READY TO JOIN<br />
            <span className="text-[#B91C1C]">THE PACK?</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
            Participation open to all Tyee Middle School students. No prior competition experience required — just a curiosity for mathematics and a drive to improve. Click below to join.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Enrollment form link coming soon! Check back when the enrollment window opens."); }}
              className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-8 py-4 rounded font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#B91C1C]/30"
            >
              <ClipboardList size={20} />
              Join as a Student
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded font-semibold text-lg transition-all duration-200 hover:bg-white/10"
            >
              Learn More About TCMC <ArrowRight size={20} />
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            * Enrollment form will be activated when the window opens. Check back for updates.
          </p>
        </div>
      </section>
    </div>
  );
}
