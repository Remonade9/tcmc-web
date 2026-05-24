/* 
 * TCMC Footer — "Challenger Bold" Design
 * Dark charcoal, red accents, 4-tab navigation
 */
import { Link } from "wouter";
import { MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      {/* Red top border accent */}
      <div className="h-1 bg-[#B91C1C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/tcmc-logo_ba28dcc1.png"
                alt="TCMC Logo"
                className="h-12 w-12 object-contain rounded-full bg-white/10 p-1"
              />
              <div>
                <div className="font-display text-2xl tracking-wider">TCMC</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">
                  Tyee Competition Math Club
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Tyee Middle School students to excel in competitive mathematics through rigorous training, teamwork, and a love of problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg tracking-wider text-[#B91C1C] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About TCMC" },
                { href: "/team", label: "The Team" },
                { href: "/calendar", label: "Calendar" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg tracking-wider text-[#B91C1C] mb-4">
              Club Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[#B91C1C] mt-0.5 shrink-0" />
                <span>
                  Tyee Middle School
                  <br />
                  Bellevue School District, WA
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={16} className="text-[#B91C1C] shrink-0" />
                <span>Fridays 5:30 PM – 7:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[#B91C1C] shrink-0" />
                <a href="mailto:tyeecompetitionmathclub@gmail.com" className="hover:text-white transition-colors">tyeecompetitionmathclub@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2024–2025 Tyee Competition Math Club · Tyee Middle School · Bellevue School District
          </p>
          <p className="text-gray-600 text-xs font-mono-accent">AMC 8 · MATHCOUNTS</p>
        </div>
      </div>
    </footer>
  );
}
