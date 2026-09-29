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
  { name: "Video", href: "#video" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-[#E8EDF0] py-2.5 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & SIH26123 Badge */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img
                src="/logo-light.png"
                alt="Team SHAZAM Logo"
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(46,196,201,0.35)] group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold tracking-wider transition-colors ${
                  isScrolled
                    ? "bg-[#E8EDF0] text-[#168AAD] border-[#168AAD]/30"
                    : "bg-[#2EC4C9]/20 text-[#2EC4C9] border-[#2EC4C9]/40"
                }`}
              >
                SIH26123
              </span>
              <span
                className={`hidden xl:inline-block text-[10px] font-mono font-medium transition-colors ${
                  isScrolled ? "text-[#4B6370]" : "text-slate-300"
                }`}
              >
                SMART WAREHOUSE ROBOTICS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all ${
              isScrolled
                ? "bg-[#F3F6F8] border-[#CBD5E1] shadow-2xs"
                : "bg-[#17242B]/85 border-[#2EC4C9]/30 shadow-md"
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
                        ? "text-white bg-[#168AAD] font-semibold shadow-xs"
                        : "text-[#4B6370] hover:text-[#17242B] hover:bg-[#E8EDF0]"
                      : isActive
                        ? "text-white bg-[#168AAD] border border-[#2EC4C9]/50 font-semibold"
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
            <a href="#dashboard" className="shazam-btn-primary">
              <Cpu className="w-3.5 h-3.5" />
              <span>Dashboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="#dashboard" className="shazam-btn-primary text-[11px] px-3 py-1.5">
              Dashboard
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isScrolled
                  ? "bg-white border-[#CBD5E1] text-[#17242B] hover:text-[#168AAD]"
                  : "bg-[#17242B]/80 border-[#2EC4C9]/30 text-slate-200 hover:text-[#2EC4C9]"
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
              ? "bg-[#F3F6F8]/98 border-[#CBD5E1] text-[#17242B]"
              : "bg-[#0B2733]/98 border-[#2EC4C9]/25 text-slate-200"
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
                    ? "text-[#17242B] hover:text-[#168AAD] hover:bg-[#E8EDF0]"
                    : "text-slate-200 hover:text-[#2EC4C9] hover:bg-slate-900/80"
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
