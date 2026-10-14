import React from 'react';
import { TN_VERIFIED_OPERATORS } from '../data/ivData';
import { ShieldCheck, Phone, MapPin, Bus, CheckCircle } from 'lucide-react';

interface OperatorsDirectoryProps {
  onContactOperator: (operatorName: string) => void;
}

export const OperatorsDirectory: React.FC<OperatorsDirectoryProps> = ({ onContactOperator }) => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Verified Logistics Network
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Empanelled Tamil Nadu IV Transport Fleet Operators
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            All partner operators maintain certified speed governors, verified police backgrounds for drivers,
            active GPS telemetry feeds for colleges, and dedicated hill-station tourist permits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TN_VERIFIED_OPERATORS.map((op) => (
            <div
              key={op.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{op.location}</span>
                  </span>
                  <span className="font-bold text-amber-500 tabular-nums">★ {op.rating}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {op.name}
                </h3>
                <div className="text-xs text-blue-700 font-semibold mb-3">
                  {op.fleetSize} · {op.tripsCompleted}+ Tours
                </div>

                {/* Badges unboxed */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  {op.badges.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${op.contactNumber.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{op.contactNumber}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onContactOperator(op.name)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2 cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
