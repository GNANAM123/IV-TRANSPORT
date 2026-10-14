import React, { useState } from 'react';
import { FLEET_VEHICLES, TransportVehicle } from '../data/ivData';
import {
  Bus,
  Volume2,
  Zap,
  ShieldCheck,
  Tv,
  CheckCircle,
  Radio,
  FileCheck,
  Compass
} from 'lucide-react';

interface FleetExplorerProps {
  onSelectVehicle: (vehicle: TransportVehicle) => void;
  onOpenQuoteWithVehicle: (vehicleId: string) => void;
}

export const FleetExplorer: React.FC<FleetExplorerProps> = ({
  onSelectVehicle,
  onOpenQuoteWithVehicle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVehicleId, setActiveVehicleId] = useState<string>('bharatbenz-53-dj');

  const filteredVehicles = FLEET_VEHICLES.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.category === selectedCategory;
  });

  const activeVehicle = FLEET_VEHICLES.find((v) => v.id === activeVehicleId) || FLEET_VEHICLES[0];

  return (
    <section id="fleet" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              Transport Fleet for Industrial Visits
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Best IV Tourist Coaches in Tamil Nadu
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Specially outfitted for student safety, faculty comfort, and high-energy college memories.
              Equipped with concert DJ sound setups, full pneumatic air suspension, and dual certified drivers.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shrink-0 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Coaches' },
              { id: 'super-luxury', label: '53-Seater DJ Coach' },
              { id: 'multi-axle', label: 'Multi-Axle Volvo / Scania' },
              { id: 'executive', label: 'Executive 40-Seater' },
              { id: 'compact-luxury', label: 'Force Urbania 17' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase: 2-Column Split for Selected Vehicle */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual preview */}
            <div className="lg:col-span-6 relative bg-slate-900 min-h-[340px] flex items-center">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.name}
                className="w-full h-full object-cover max-h-[440px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                {activeVehicle.highlightBadge && (
                  <span className="self-start text-[11px] font-semibold text-blue-200 bg-blue-900/80 border border-blue-400/40 px-2.5 py-0.5 rounded mb-2">
                    {activeVehicle.highlightBadge}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeVehicle.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-lg">
                  {activeVehicle.subtitle}
                </p>
              </div>
            </div>

            {/* Spec details */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Pricing & Capacity Header */}
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Capacity</div>
                    <div className="text-lg font-extrabold text-slate-900">
                      {activeVehicle.seatCount} Seats ({activeVehicle.layout})
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Base Rate</div>
                    <div className="text-2xl font-extrabold text-blue-700 tabular-nums">
                      ₹{activeVehicle.baseRatePerKm} <span className="text-xs font-normal text-slate-500">/ km</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Bata: ₹{activeVehicle.driverBataPerDay}/day · Min {activeVehicle.minKmPerDay} km/day
                    </div>
                  </div>
                </div>

                {/* Key IV Features List */}
                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-3">
                    <Volume2 className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Sound & Acoustics</div>
                      <div className="text-xs text-slate-600">{activeVehicle.features.soundSystem}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Lighting & Suspension</div>
                      <div className="text-xs text-slate-600">
                        {activeVehicle.features.lighting} · {activeVehicle.features.suspension}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Safety & College Protocol</div>
                      <div className="text-xs text-slate-600">
                        {activeVehicle.features.safety.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tv className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Student & Staff Amenities</div>
                      <div className="text-xs text-slate-600">
                        {activeVehicle.features.amenities.join(' · ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteWithVehicle(activeVehicle.id)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Book / Check Date Availability
                </button>
                <div className="text-xs text-slate-500">
                  <FileCheck className="w-3.5 h-3.5 inline text-emerald-600 mr-1" />
                  <span>Hill station permit & Speed Governor certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coach Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredVehicles.map((vehicle) => {
            const isSelected = vehicle.id === activeVehicleId;
            return (
              <div
                key={vehicle.id}
                onClick={() => setActiveVehicleId(vehicle.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer bg-white flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="text-xs font-bold text-slate-900 line-clamp-1">{vehicle.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{vehicle.seatCount} Seats ({vehicle.layout})</div>

                  <div className="text-xs font-bold text-blue-700 mt-2 tabular-nums">
                    ₹{vehicle.baseRatePerKm} <span className="text-[10px] font-normal text-slate-500">/ km</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Rating {vehicle.rating}★</span>
                  <span className={`font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-600'}`}>
                    {isSelected ? 'Viewing' : 'Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
