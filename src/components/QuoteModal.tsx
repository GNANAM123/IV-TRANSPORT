import React, { useState } from 'react';
import { TN_COLLEGE_CITIES, DEPARTMENTS, IV_PACKAGES, FLEET_VEHICLES } from '../data/ivData';
import { X, CheckCircle, Share2, Copy, Printer, Calendar, Users, Building, Phone, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    originCity?: string;
    department?: string;
    studentCount?: number;
    days?: number;
    packageId?: string;
    vehicleId?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillData
}) => {
  const [collegeName, setCollegeName] = useState('Govt College of Technology (GCT)');
  const [coordinatorName, setCoordinatorName] = useState('Suresh K. (Class Representative)');
  const [phone, setPhone] = useState('98431 29810');
  const [email, setEmail] = useState('iv.coordinator2026@gmail.com');
  const [originCity, setOriginCity] = useState(prefillData?.originCity || 'coimbatore');
  const [department, setDepartment] = useState(prefillData?.department || 'mech');
  const [studentCount, setStudentCount] = useState(prefillData?.studentCount || 45);
  const [packageId, setPackageId] = useState(prefillData?.packageId || 'nilgiris-kongu-engineering');
  const [vehicleId, setVehicleId] = useState(prefillData?.vehicleId || 'bharatbenz-53-dj');
  const [tourDates, setTourDates] = useState('Nov 15 - Nov 18, 2026');
  const [specialNotes, setSpecialNotes] = useState('Need 1 Veg + 1 Non-Veg dinner feast and permission assistance for Doddabetta Tea Factory.');

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const selectedPkg = IV_PACKAGES.find((p) => p.id === packageId) || IV_PACKAGES[0];
  const selectedVeh = FLEET_VEHICLES.find((v) => v.id === vehicleId) || FLEET_VEHICLES[0];
  const estPerStudent = Math.round((selectedPkg.basePricePerStudent * 45) / Math.max(studentCount, 25));
  const estTotal = estPerStudent * studentCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `TNIV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteRef(refCode);
    setSubmitted(true);
  };

  const copyQuoteText = () => {
    const text = `
🎓 *TN IV EXPRESS — OFFICIAL TOUR QUOTATION*
Ref No: ${quoteRef}
College: ${collegeName}
Department: ${department}
Coordinator: ${coordinatorName} (${phone})
------------------------------------------------
Tour Package: ${selectedPkg.title}
Route: ${selectedPkg.routeTitle} (${selectedPkg.durationDays}D / ${selectedPkg.durationNights}N)
Transport: ${selectedVeh.name} (${selectedVeh.seatCount} Seats, DJ Sound & Air Suspension)
Batch Size: ${studentCount} Students + 2 Faculty Escorts (Free)
Dates: ${tourDates}
------------------------------------------------
💰 *Estimated Per Student Share: ₹${estPerStudent.toLocaleString('en-IN')}*
Total Tour Estimate: ₹${estTotal.toLocaleString('en-IN')}

Includes:
✓ AC Luxury Coach with Dual Certified Drivers, Tolls & Permits
✓ 3-Sharing Resort / Hotel Stay
✓ Unlimited Tamil Nadu Meals (Breakfast, Lunch, Dinner + Biryani Feast)
✓ Industry Permission Liaison & College Formalities Kit
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-0.5">
              Industrial Visit Planner
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {submitted ? 'Official IV Quotation Summary' : 'Request Official College IV Proposal'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">College Name *</label>
                <input
                  type="text"
                  required
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Coordinator / CR Name *</label>
                <input
                  type="text"
                  required
                  value={coordinatorName}
                  onChange={(e) => setCoordinatorName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Official / Coordinator Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Origin City</label>
                <select
                  value={originCity}
                  onChange={(e) => setOriginCity(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                >
                  {TN_COLLEGE_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.short}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Student Count</label>
                <input
                  type="number"
                  min={15}
                  max={120}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred IV Package</label>
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                >
                  {IV_PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.durationDays}D/{p.durationNights}N)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Coach Selection</label>
                <select
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                >
                  {FLEET_VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.seatCount} Seats)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Planned Travel Dates</label>
              <input
                type="text"
                value={tourDates}
                onChange={(e) => setTourDates(e.target.value)}
                placeholder="e.g. Oct 24 - Oct 27, 2026"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Special Requirements</label>
              <textarea
                rows={2}
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Generate Instant Official Quote
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 space-y-5">
            {/* Success Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-xs text-emerald-900">
                  Quotation Generated Successfully! Reference: {quoteRef}
                </div>
                <div className="text-[11px] text-emerald-700 mt-0.5">
                  A verification copy has been saved. You can share this directly with your HOD or class WhatsApp group.
                </div>
              </div>
            </div>

            {/* Quotation Details Box */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">College & Branch:</span>
                <span className="font-bold text-slate-900 text-right">{collegeName} · {department}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Selected Tour Package:</span>
                <span className="font-bold text-blue-700 text-right">{selectedPkg.title}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Transport Vehicle:</span>
                <span className="font-bold text-slate-900 text-right">{selectedVeh.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Batch Size:</span>
                <span className="font-bold text-slate-900 text-right">{studentCount} Students + 2 Faculty Complimentary</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Proposed Dates:</span>
                <span className="font-bold text-slate-900 text-right">{tourDates}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-extrabold">
                <span className="text-slate-900">Per Student Share:</span>
                <span className="text-blue-700 tabular-nums">₹{estPerStudent.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={copyQuoteText}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Copied for WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Copy Quotation for WhatsApp</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
