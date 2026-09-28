import React, { useState } from "react";
import { TEAM_MEMBERS, TeamMember } from "../../data/team";
import { Users } from "lucide-react";

/**
 * Individual Team Member Card
 * Contains: 1. Member photo, 2. Full name, 3. Project role
 */
const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="shazam-card group p-5 sm:p-6 flex flex-col text-left bg-white border border-[#E8EDF0] rounded-2xl hover:border-[#168AAD]/40 transition-all">
      {/* 1. Member Photo Container (Consistent 4:5 Portrait Ratio) */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#F3F6F8] via-[#FFFFFF] to-[#E8EDF0] border border-[#E8EDF0] group-hover:border-[#168AAD]/60 shadow-[0_4px_14px_rgba(23,36,43,0.06)] group-hover:shadow-[0_8px_24px_rgba(22,138,173,0.18)] transition-all duration-300 mb-4 sm:mb-5">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          /* Neutral Fallback Placeholder if image fails to load */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#E8EDF0] flex items-center justify-center shadow-xs mb-3">
              <span className="text-lg sm:text-xl font-mono font-bold text-[#17242B]">
                {member.initials}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#168AAD] font-semibold">
              Photo Verified
            </span>
          </div>
        )}

        {/* Subtle bottom robotics depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17242B]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Full Name */}
      <h3 className="text-lg sm:text-xl font-heading font-bold text-[#17242B] mb-2 group-hover:text-[#168AAD] transition-colors leading-tight">
        {member.name}
      </h3>

      {/* 3. Project Role */}
      <div className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-[#168AAD]/10 border border-[#168AAD]/30 text-xs font-mono font-semibold text-[#168AAD] group-hover:bg-[#168AAD]/15 transition-all">
        <span className="truncate">{member.role}</span>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3F6F8] border-t border-[#E8EDF0] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[400px] bg-[#168AAD]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/30 text-[#168AAD] text-xs font-mono uppercase tracking-wider mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5" />
            <span>MEET THE TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#17242B] tracking-tight leading-tight">
            The Minds Behind SHAZAM
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#52606D] font-light leading-relaxed">
            Six minds. One mission.
          </p>
        </div>

        {/* 6-Member Grid (Desktop: 3x2, Tablet: 2x3, Mobile: 1x6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
