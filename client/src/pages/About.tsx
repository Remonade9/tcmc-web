/* 
 * TCMC About Page — "Challenger Bold" Design
 * Filler text placeholder — to be updated with real content
 */
export default function About() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1C1C1E] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B91C1C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#B91C1C]/5 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              About TCMC
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl text-white leading-none mb-6">
            WHO WE ARE
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Tyee Competition Math Club is Tyee Middle School's dedicated competition mathematics program.
          </p>
        </div>
      </section>

      {/* ── FILLER CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="font-display text-5xl text-[#1C1C1E] mb-8 leading-none">
            ABOUT<br />
            <span className="text-[#B91C1C]">THE CLUB</span>
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Founded", value: "2024" },
              { label: "Students", value: "100+" },
              { label: "Competitions", value: "AMC 8 · MATHCOUNTS" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F4F4F5] rounded-xl p-6 text-center">
                <div className="font-display text-4xl text-[#B91C1C] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">Our Mission</span>
          </div>
          <h2 className="font-display text-5xl text-[#1C1C1E] mb-8 leading-none">
            WHAT WE<br />
            <span className="text-[#B91C1C]">STAND FOR</span>
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">More Info</span>
          </div>
          <h2 className="font-display text-4xl text-white mb-6 leading-none">
            ADDITIONAL<br />
            <span className="text-[#B91C1C]">DETAILS</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p>
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
