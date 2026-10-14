import React from 'react';
import { ShieldCheck, Music, MapPin, Users, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onExploreFleet: () => void;
  onSelectCity: (cityId: string) => void;
  onSelectDept: (deptId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePackages,
  onExploreFleet,
  onSelectCity,
  onSelectDept
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-slate-100/80 to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Kicker - clean unboxed text */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase mb-3">
          <span>Official Industrial Visit Partner</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Anna University & DOTE Approved Standards</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Tamil Nadu & South India Circuits</span>
        </div>

        {/* 2-Column Split: Headline + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance mb-5">
              Best IV Transport & Curated Packages for Tamil Nadu Colleges
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Reliable, safe, and high-energy Industrial Visits engineered for engineering & arts students.
              Explore BharatBenz and Volvo luxury coaches with concert DJ sound, hill-road certified drivers,
              and seamless permission letters for ISRO, NLC, and Ooty tea plants.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#smart-suggester"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Find Best IV Suggestion</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>View Transport Fleet</span>
              </a>
            </div>

            {/* Trust markers unboxed */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dual Drivers & GPS Live Tracking</span>
              </div>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Music className="w-4 h-4 text-blue-600 shrink-0" />
                <span>4000W DJ Sound & Subwoofers</span>
              </div>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Ooty & Kodai Ghat Road Permits</span>
              </div>
            </div>
          </div>

          {/* Focal Visual Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg"
                alt="BharatBenz luxury tourist bus traveling scenic highway in Tamil Nadu with Western Ghats mountains"
                className="w-full h-[340px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                  Fleet Showcase
                </div>
                <h3 className="text-white text-lg font-bold">
                  BharatBenz 53-Seater Super Luxury DJ Coach
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                  <span>Air-Suspension</span>
                  <span>·</span>
                  <span>Pushback Recliner</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-medium">All-TN Permit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip below hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">1,420+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">College IV Tours Executed</div>
          </div>
          <div className="px-3 border-l border-slate-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">4.95 / 5</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Student & Faculty Satisfaction</div>
          </div>
          <div className="px-3 border-l border-slate-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tabular-nums">100%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">GPS Telemetry & Police Verified</div>
          </div>
          <div className="px-3 border-l border-slate-100">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tabular-nums">45+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Approved Industrial Plants in TN</div>
          </div>
        </div>
      </div>
    </section>
  );
};
