/* 
 * TCMC Navbar — "Challenger Bold" Design
 * 4 tabs: Home, About, The Team, Calendar
 * Sign In button (no functionality yet)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, LogIn } from "lucide-react";
import { toast } from "sonner";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "The Team" },
  { href: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C1C1E]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1C1C1E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/tcmc-logo_ba28dcc1.png"
              alt="TCMC Logo"
              className="h-10 w-10 object-contain rounded-full bg-white/10 p-0.5 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-xl tracking-wider">TCMC</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                Competition Math Club
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-underline px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white active" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Sign In button — no functionality yet */}
            <button
              onClick={() => toast.info("Sign in coming soon!")}
              className="ml-4 flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-4 py-2 rounded text-sm font-medium transition-all duration-200 hover:bg-white/10"
            >
              <LogIn size={15} />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1C1C1E] border-t border-white/10 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => { setMobileOpen(false); toast.info("Sign in coming soon!"); }}
              className="w-full flex items-center justify-center gap-2 border border-white/30 text-white px-4 py-3 rounded text-sm font-medium mt-2 hover:bg-white/10 transition-colors"
            >
              <LogIn size={15} />
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
