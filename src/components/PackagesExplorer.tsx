import React, { useState } from 'react';
import { IV_PACKAGES, IVPackage, DEPARTMENTS } from '../data/ivData';
import {
  Calendar,
  Clock,
  MapPin,
  Building2,
  Utensils,
  Hotel,
  ShieldCheck,
  ChevronRight,
  X,
  CheckCircle,
  FileText
} from 'lucide-react';

interface PackagesExplorerProps {
  onSelectPackageForQuote: (pkg: IVPackage) => void;
  selectedPackageModal: IVPackage | null;
  onOpenPackageModal: (pkg: IVPackage) => void;
  onClosePackageModal: () => void;
  onOpenFormalitiesWithPkg: (pkgTitle: string) => void;
}

export const PackagesExplorer: React.FC<PackagesExplorerProps> = ({
  onSelectPackageForQuote,
  selectedPackageModal,
  onOpenPackageModal,
  onClosePackageModal,
  onOpenFormalitiesWithPkg
}) => {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('all');
  const [selectedDurationFilter, setSelectedDurationFilter] = useState<string>('all');

  const filteredPackages = IV_PACKAGES.filter((pkg) => {
    if (selectedDeptFilter !== 'all' && !pkg.idealForDepartments.includes(selectedDeptFilter)) {
      return false;
    }
    if (selectedDurationFilter !== 'all' && pkg.durationDays !== Number(selectedDurationFilter)) {
      return false;
    }
    return true;
  });

  return (
    <section id="packages" className="py-16 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              Curated Industrial Visit Packages
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Best IV Packages Across Tamil Nadu Circuits
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              All packages include verified luxury coach transport, student-friendly resort accommodation,
              unlimited Tamil Nadu meals, and industrial permission coordination.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Department filter */}
            <select
              value={selectedDeptFilter}
              onChange={(e) => setSelectedDeptFilter(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-blue-600"
            >
              <option value="all">All Departments</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.short}
                </option>
              ))}
            </select>

            {/* Duration filter */}
            <select
              value={selectedDurationFilter}
              onChange={(e) => setSelectedDurationFilter(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-blue-600"
            >
              <option value="all">All Durations</option>
              <option value="2">2 Days / 1 Night</option>
              <option value="3">3 Days / 2 Nights</option>
              <option value="4">4 Days / 3 Nights</option>
            </select>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video w-full bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold text-slate-900 shadow-sm">
                    {pkg.durationDays} Days / {pkg.durationNights} Nights
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-700 text-white px-2.5 py-1 rounded text-[11px] font-bold shadow-sm">
                    ₹{pkg.basePricePerStudent.toLocaleString('en-IN')} <span className="font-normal text-[10px]">/ student</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="text-xs text-blue-700 font-semibold mb-1 line-clamp-1">
                    {pkg.routeTitle}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                    {pkg.tagline}
                  </p>

                  {/* Industries Visited */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Key Industries</span>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {pkg.targetIndustries.map((ind, i) => (
                        <li key={i} className="line-clamp-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{ind.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 pt-3">
                    <div className="text-[11px] text-slate-500 font-medium mb-1">Package Includes:</div>
                    <div className="text-xs text-slate-600 line-clamp-2">
                      {pkg.inclusions.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => onOpenPackageModal(pkg)}
                  className="text-xs font-semibold text-slate-700 hover:text-blue-700 underline underline-offset-2 cursor-pointer"
                >
                  Day-by-Day Schedule
                </button>
                <button
                  type="button"
                  onClick={() => onSelectPackageForQuote(pkg)}
                  className="px-3.5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: In-Depth Day-by-Day Itinerary & Specifications */}
        {selectedPackageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200 bg-slate-50 shrink-0">
                <div>
                  <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    {selectedPackageModal.durationDays} Days / {selectedPackageModal.durationNights} Nights · {selectedPackageModal.routeTitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedPackageModal.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Starting from <span className="font-bold text-blue-700">₹{selectedPackageModal.basePricePerStudent.toLocaleString('en-IN')} / student</span> (Based on 45 batch + 2 Faculty Free)
                  </div>
                </div>

                <button
                  onClick={onClosePackageModal}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Day-by-Day Detailed Schedule */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-700" />
                    <span>Day-by-Day Comprehensive Schedule</span>
                  </h4>

                  <div className="space-y-6">
                    {selectedPackageModal.itinerary.map((day) => (
                      <div key={day.dayNumber} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-3">
                          <div className="font-bold text-sm text-slate-900">
                            Day {day.dayNumber}: {day.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            Night Stay: <span className="font-semibold text-slate-700">{day.nightStayCity}</span>
                          </div>
                        </div>

                        {/* Activities list */}
                        <div className="space-y-3">
                          {day.activities.map((act, actIdx) => (
                            <div key={actIdx} className="flex items-start gap-3 text-xs">
                              <span className="font-mono font-bold text-slate-500 tabular-nums shrink-0 w-16 pt-0.5">
                                {act.time}
                              </span>
                              <div className="flex-1">
                                <div className="font-bold text-slate-900 flex items-center gap-2">
                                  <span>{act.title}</span>
                                  {act.type === 'industry' && (
                                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-semibold">
                                      Industry Visit
                                    </span>
                                  )}
                                </div>
                                <div className="text-slate-600 mt-0.5 leading-relaxed">
                                  {act.description}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Meals included that day */}
                        <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" />
                          <span>Meals provided: {day.mealsIncluded.join(', ')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stay & Food Plan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                      <Hotel className="w-4 h-4 text-blue-700" />
                      <span>Resort / Hotel Accommodation</span>
                    </div>
                    <div className="text-xs text-slate-700 font-semibold mb-1">
                      {selectedPackageModal.accommodation.hotelType}
                    </div>
                    <div className="text-xs text-slate-500 mb-2">
                      {selectedPackageModal.accommodation.occupancy}
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {selectedPackageModal.accommodation.amenities.map((a, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                      <Utensils className="w-4 h-4 text-amber-600" />
                      <span>Authentic Tamil Nadu Food Plan</span>
                    </div>
                    <div className="text-xs text-slate-700 font-semibold mb-2">
                      {selectedPackageModal.foodPlan.description}
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {selectedPackageModal.foodPlan.specials.map((s, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Package Inclusions & Transparent Policy
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {selectedPackageModal.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    onOpenFormalitiesWithPkg(selectedPackageModal.title);
                    onClosePackageModal();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Generate College Permission Letter</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClosePackageModal}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPackageForQuote(selectedPackageModal);
                      onClosePackageModal();
                    }}
                    className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Proceed with this Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
