import React, { useState, useEffect } from "react";
import { PROJECT_DATA } from "../../data/project";
import { Menu, X, ChevronRight, Cpu } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Problem", href: "#problem" },
  { name: "Bottleneck", href: "#bottleneck" },
  { name: "Solution", href: "#solution" },
  { name: "Flow", href: "#how-it-works" },
  { name: "5 AMRs", href: "#fleet" },
  { name: "D* Lite", href: "#path-planning" },
  { name: "Architecture", href: "#architecture" },
  { name: "Tech", href: "#technology" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Case Study", href: "#case-study" },
  { name: "Team", href: "#team" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", ...NAV_ITEMS.map((item) => item.href.replace("#", ""))];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8FAFC]/94 backdrop-blur-md border-b border-[#0284C7]/15 py-2.5 shadow-[0_4px_25px_rgba(15,23,42,0.06)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & SIH26123 Emblem */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img
                src="/logo-light.png"
                alt="Team SHAZAM Logo"
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold tracking-wider transition-colors ${
                  isScrolled
                    ? "bg-[#E0F2FE] text-[#0284C7] border-[#0284C7]/30"
                    : "bg-cyan-500/20 text-cyan-300 border-cyan-500/35"
                }`}
              >
                SIH26123
              </span>
              <span
                className={`hidden xl:inline-block text-[10px] font-mono font-medium transition-colors ${
                  isScrolled ? "text-[#475569]" : "text-slate-300"
                }`}
              >
                ROBOTICS & EDGE-AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all ${
              isScrolled
                ? "bg-white/95 border-[#0284C7]/20 shadow-sm"
                : "bg-[#0F172A]/85 border-[#06B6D4]/30 shadow-md"
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-[#0284C7] bg-[#E0F2FE] border border-[#0284C7]/30 font-semibold shadow-xs"
                        : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                      : isActive
                        ? "text-cyan-200 bg-[#0284C7]/35 border border-cyan-500/60 font-semibold"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Explore Solution CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="#solution" className="shazam-btn-primary">
              <Cpu className="w-3.5 h-3.5" />
              <span>Explore</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="#solution" className="shazam-btn-primary text-[11px] px-3 py-1.5">
              Explore
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled
                  ? "bg-white border-[rgba(15,23,42,0.12)] text-[#0F172A] hover:text-[#0284C7]"
                  : "bg-[#0F172A]/80 border-[rgba(6,182,212,0.3)] text-slate-200 hover:text-[#06B6D4]"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl transition-all ${
            isScrolled
              ? "bg-[#F8FAFC]/98 border-[rgba(15,23,42,0.12)] text-[#0F172A]"
              : "bg-[#0A0F1D]/98 border-[rgba(6,182,212,0.25)] text-slate-200"
          }`}
        >
          <div className="grid grid-cols-2 gap-1 py-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-between ${
                  isScrolled
                    ? "text-[#0F172A] hover:text-[#0284C7] hover:bg-[#E0F2FE]"
                    : "text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
