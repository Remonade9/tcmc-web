/* 
 * TCMC Calendar Page — "Challenger Bold" Design
 * Embeds a public Google Calendar iframe
 */
export default function CalendarPage() {
  // Public Google Calendar embed URL — uses a generic public calendar
  // Replace the src URL with the actual TCMC Google Calendar embed URL when available
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&mode=MONTH";

  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── PAGE HERO ── */}
      <section className="bg-[#1C1C1E] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B91C1C]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Calendar
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl text-white leading-none mb-4">
            CLUB<br />
            <span className="text-[#B91C1C]">CALENDAR</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Stay up to date with TCMC sessions, competition dates, placement tests, and other club events. All dates are subject to change — check back regularly for updates.
          </p>
        </div>
      </section>

      {/* ── NOTICE BANNER ── */}
      <div className="bg-[#B91C1C]/10 border-b border-[#B91C1C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B91C1C] animate-pulse shrink-0" />
          <p className="text-[#B91C1C] text-sm font-medium">
            No events have been scheduled yet. Dates for enrollment, placement tests, and competitions will appear here once confirmed.
          </p>
        </div>
      </div>

      {/* ── GOOGLE CALENDAR EMBED ── */}
      <section className="py-10 bg-[#F4F4F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            {/* Calendar header bar */}
            <div className="bg-[#1C1C1E] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#B91C1C]" />
                <span className="font-display text-white text-xl tracking-wider">TCMC Events Calendar</span>
              </div>
              <span className="text-gray-500 text-xs font-mono-accent">America/Los_Angeles</span>
            </div>

            {/* Iframe */}
            <div className="w-full" style={{ height: "680px" }}>
              <iframe
                src={calendarSrc}
                style={{ border: 0, width: "100%", height: "100%" }}
                frameBorder="0"
                scrolling="no"
                title="TCMC Google Calendar"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-gray-400 text-xs text-center mt-4">
            Powered by Google Calendar · Events will be added as dates are confirmed
          </p>
        </div>
      </section>

      {/* ── UPCOMING EVENTS PLACEHOLDER ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-1 bg-[#B91C1C]" />
            <span className="text-[#B91C1C] text-sm font-semibold tracking-widest uppercase">
              Key Dates
            </span>
          </div>
          <h2 className="font-display text-4xl text-[#1C1C1E] mb-8 leading-none">
            IMPORTANT<br />
            <span className="text-[#B91C1C]">DATES</span>
          </h2>

          <div className="space-y-4">
            {[
              { event: "Enrollment Window Opens", date: "TBD", category: "Enrollment", note: "Google Form will be shared when open." },
              { event: "Placement Test", date: "TBD", category: "Placement", note: "Date to be announced. All applicants will be notified." },
              { event: "First Weekly Session", date: "TBD", category: "Sessions", note: "Every Friday 5:30–7:00 PM once the season begins." },
              { event: "AMC 8 Competition", date: "TBD", category: "Competition", note: "National competition. Exact date to be confirmed." },
              { event: "MATHCOUNTS School Round", date: "TBD", category: "Competition", note: "Internal school selection round." },
              { event: "MATHCOUNTS Chapter Round", date: "TBD", category: "Competition", note: "Regional competition. Top students advance." },
            ].map((item) => (
              <div key={item.event} className="flex items-start gap-4 bg-[#F4F4F5] rounded-xl p-5 card-hover">
                <div className="shrink-0 text-center min-w-[72px]">
                  <div className="bg-[#1C1C1E] text-white rounded-lg px-3 py-2">
                    <div className="font-mono-accent text-xs text-gray-400 uppercase tracking-wider">Date</div>
                    <div className="font-display text-lg text-[#B91C1C]">{item.date}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#1C1C1E]">{item.event}</h3>
                    <span className="text-xs bg-[#B91C1C]/10 text-[#B91C1C] font-semibold px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
