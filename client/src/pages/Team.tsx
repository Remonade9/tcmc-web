/* 
 * TCMC The Team Page — "Challenger Bold" Design
 * Sections: Chairs (adults), Head Coaches (students), Class Coaches (students), Apply Banner
 */
import { toast } from "sonner";
import { UserPlus, Star, Users, Briefcase } from "lucide-react";

const chairs = [
  {
    name: "Chair",
    role: "Chair",
    desc: "Provides organizational oversight and connects TCMC with the Tyee PTSA and school administration.",
  },
  {
    name: "Chair",
    role: "Chair",
    desc: "Manages club finances, budgeting, and resource allocation for competitions and materials.",
  },
  {
    name: "Chair",
    role: "Chair",
    desc: "Coordinates outreach, communications, and community engagement for the club.",
  },
  {
    name: "Chair",
    role: "Chair",
    desc: "Oversees logistics for competitions, including registration, transportation, and event coordination.",
  },
];

const headCoaches = [
  {
    name: "Head Coach",
    role: "Head Coach",
    specialty: "Program Director & Curriculum",
    bio: "Oversees the entire TCMC program — curriculum, competition registration, coach recruitment, and weekly logistics.",
  },
  {
    name: "Head Coach",
    role: "Head Coach",
    specialty: "Training & Student Progress",
    bio: "Focuses on lesson quality, student progress tracking, and supporting all student coaches throughout the season.",
  },
];

const coaches = [
  { name: "Coach", class: "Level 1", specialty: "Foundations & Arithmetic" },
  { name: "Coach", class: "Level 1", specialty: "Intro Geometry" },
  { name: "Coach", class: "Level 2", specialty: "Algebraic Thinking" },
  { name: "Coach", class: "Level 2", specialty: "Basic Probability" },
  { name: "Coach", class: "Level 3", specialty: "Number Theory" },
  { name: "Coach", class: "Level 3", specialty: "Combinatorics" },
  { name: "Coach", class: "Level 4", specialty: "Advanced Algebra" },
  { name: "Coach", class: "Level 4", specialty: "Coordinate Geometry" },
  { name: "Coach", class: "Level 5 & 6", specialty: "MATHCOUNTS Sprint & Target" },
  { name: "Coach", class: "Level 5 & 6", specialty: "AMC 8 Advanced" },
];

export default function Team() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1C1C1E] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B91C1C]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl text-white leading-none mb-6">
            MEET THE<br />
            <span className="text-[#B91C1C]">TEAM</span>
          </h1>
        </div>
      </section>

      {/* ── APPLY BANNER ── */}
      <section className="bg-[#B91C1C] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg">Interested in becoming a coach?</p>
              <p className="text-red-200 text-sm">Coach applications open each season. Join the team and help shape the next generation of math competitors.</p>
            </div>
            <button
              onClick={() => toast.info("Coach application form coming soon!")}
              className="shrink-0 flex items-center gap-2 bg-white text-[#B91C1C] hover:bg-gray-100 px-6 py-3 rounded font-bold transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <UserPlus size={18} />
              Apply for Coach Position
            </button>
          </div>
        </div>
      </section>

      {/* ── HEAD COACHES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Head Coaches
            </span>
          </div>
          <h2 className="font-display text-5xl text-[#1C1C1E] mb-8 leading-none">
            HEAD COACHES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {headCoaches.map((coach, i) => (
              <div key={i} className="flex gap-5 bg-[#F4F4F5] rounded-xl p-6 card-hover">
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#B91C1C] flex items-center justify-center">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl text-[#1C1C1E]">{coach.name}</div>
                  <div className="text-[#B91C1C] text-xs font-bold tracking-widest uppercase mb-2">
                    {coach.role} · {coach.specialty}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs">
            * Coach names will be updated at the start of each season.
          </p>
        </div>
      </section>

      {/* ── CLASS COACHES ── */}
      <section className="py-16 bg-[#F4F4F5] relative overflow-hidden">
        <div className="absolute top-4 right-8 font-display text-[10rem] text-[#1C1C1E]/5 leading-none pointer-events-none select-none">10</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Class Coaches
            </span>
          </div>
          <h2 className="font-display text-5xl text-[#1C1C1E] mb-8 leading-none">
            CLASS COACHES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coaches.map((coach, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm card-hover">
                <div className="w-11 h-11 rounded-full bg-[#B91C1C]/10 flex items-center justify-center mb-4">
                  <Users size={18} className="text-[#B91C1C]" />
                </div>
                <div className="font-display text-xl text-[#1C1C1E] mb-0.5">{coach.name}</div>
                <div className="text-[#B91C1C] text-xs font-bold tracking-wider mb-1">{coach.class}</div>
                <div className="text-gray-500 text-xs leading-snug">{coach.specialty}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-5">
            * Coach names and class assignments will be updated at the start of each season.
          </p>
        </div>
      </section>

      {/* ── CHAIRS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl text-[#1C1C1E] mb-8 leading-none">
            CHAIRS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {chairs.map((chair, i) => (
              <div key={i} className="bg-[#F4F4F5] rounded-xl p-6 shadow-sm card-hover border-t-4 border-[#B91C1C]">
                <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center mb-4">
                  <Briefcase size={20} className="text-[#B91C1C]" />
                </div>
                <div className="font-display text-2xl text-[#1C1C1E] mb-0.5">{chair.name}</div>
                <div className="text-[#B91C1C] text-xs font-bold tracking-widest uppercase mb-3">{chair.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{chair.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-5">
            * Chair names will be updated once confirmed.
          </p>
        </div>
      </section>
    </div>
  );
}
