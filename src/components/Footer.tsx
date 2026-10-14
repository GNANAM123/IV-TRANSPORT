import React from 'react';
import { Bus, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white">
                <Bus className="w-4 h-4" />
              </div>
              <span>TN IV Express</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier Industrial Visit transport suggestion and curated tour package platform
              for colleges and universities across Tamil Nadu. Verified coaches, dual drivers, and official
              clearances.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Speed Governor Compliant · 24/7 GPS Link to Principal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Explore Fleets
            </div>
            <ul className="space-y-2">
              <li><a href="#fleet" className="hover:text-white transition-colors">BharatBenz 53 DJ Coach</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Volvo 9600 Multi-Axle</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Scania Metrolink HD</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Ashok Leyland 40 Seater</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Force Urbania 17 Seater</a></li>
            </ul>
          </div>

          {/* Circuits */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Popular IV Circuits
            </div>
            <ul className="space-y-2">
              <li><a href="#packages" className="hover:text-white transition-colors">Ooty & Nilgiris Tea Tour</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">ISRO Mahendragiri & Kanyakumari</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Neyveli Lignite & BHEL Trichy</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Chennai ICF & Auto Corridor</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Bangalore Tech & Mysore Royal</a></li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              State Coordination Desk
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-white">+91 94441 89201</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>coordinator@tnivexpress.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Transport Hubs: Chennai, Coimbatore, Madurai, Salem, Trichy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 TN IV Express. Designed for Engineering & Arts College Students of Tamil Nadu.
          </div>
          <div className="flex items-center gap-4">
            <a href="#formalities" className="hover:text-slate-400 transition-colors">Anna University Guidelines</a>
            <span>·</span>
            <a href="#formalities" className="hover:text-slate-400 transition-colors">Police Intimation Format</a>
            <span>·</span>
            <a href="#calculator" className="hover:text-slate-400 transition-colors">Cost Splitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
