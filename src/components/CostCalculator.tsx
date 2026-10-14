import React, { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../data/ivData';
import {
  Calculator,
  Users,
  Bus,
  Moon,
  Utensils,
  Share2,
  Copy,
  Check,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [studentCount, setStudentCount] = useState<number>(45);
  const [facultyCount, setFacultyCount] = useState<number>(2);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('bharatbenz-53-dj');
  const [tripDays, setTripDays] = useState<number>(3);
  const [totalKm, setTotalKm] = useState<number>(850);
  const [stayGrade, setStayGrade] = useState<'budget' | 'resort' | 'deluxe'>('resort');
  const [foodOption, setFoodOption] = useState<'standard' | 'grand-biryani'>('grand-biryani');
  const [includeDjSetup, setIncludeDjSetup] = useState<boolean>(true);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  const selectedVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  const nights = Math.max(tripDays - 1, 1);

  // Cost calculation engine
  const calc = useMemo(() => {
    // 1. Transport Cost
    const billableKm = Math.max(totalKm, selectedVehicle.minKmPerDay * tripDays);
    const busHireCost = billableKm * selectedVehicle.baseRatePerKm;
    const driverBataTotal = selectedVehicle.driverBataPerDay * tripDays * 2; // Dual drivers for safety
    const tollAndPermits = Math.round(billableKm * 3.8); // Average toll and RTO entry permits in TN
    const djSoundAddon = includeDjSetup ? 4500 : 0;
    const totalTransport = busHireCost + driverBataTotal + tollAndPermits + djSoundAddon;

    // 2. Stay Cost (Staff stays free absorbed into group)
    const perPersonNightCost = stayGrade === 'budget' ? 450 : stayGrade === 'resort' ? 750 : 1100;
    const totalStay = (studentCount + facultyCount) * perPersonNightCost * nights;

    // 3. Food Cost (3 meals + tea per day)
    const perPersonDayFood = foodOption === 'standard' ? 450 : 650;
    const totalFood = (studentCount + facultyCount) * perPersonDayFood * tripDays;

    // 4. Industry entries & Guide coordination
    const industryEntryTotal = studentCount * 120;

    // 5. Emergency & First Aid Buffer
    const emergencyBuffer = studentCount * 100;

    const grandTotal = totalTransport + totalStay + totalFood + industryEntryTotal + emergencyBuffer;
    const perStudentShare = Math.ceil(grandTotal / studentCount);

    return {
      billableKm,
      busHireCost,
      driverBataTotal,
      tollAndPermits,
      djSoundAddon,
      totalTransport,
      totalStay,
      totalFood,
      industryEntryTotal,
      emergencyBuffer,
      grandTotal,
      perStudentShare,
      transportPct: Math.round((totalTransport / grandTotal) * 100),
      stayPct: Math.round((totalStay / grandTotal) * 100),
      foodPct: Math.round((totalFood / grandTotal) * 100),
      otherPct: Math.round(((industryEntryTotal + emergencyBuffer) / grandTotal) * 100)
    };
  }, [
    studentCount,
    facultyCount,
    selectedVehicle,
    tripDays,
    totalKm,
    stayGrade,
    foodOption,
    includeDjSetup,
    nights
  ]);

  const copyToClipboard = () => {
    const text = `
🎓 *OFFICIAL COLLEGE IV ESTIMATE & EXPENSE SPLIT*
Route Est: ${totalKm} km | Duration: ${tripDays} Days / ${nights} Nights
Batch: ${studentCount} Students + ${facultyCount} Faculty (Staff Pass Included)
Coach: ${selectedVehicle.name} (${selectedVehicle.seatCount} Seats)
Food Plan: ${foodOption === 'grand-biryani' ? 'Buffet with Grand Biryani Banquet' : 'Traditional Veg Meals'}
Resort Stay: ${stayGrade === 'resort' ? 'Hilltop / Coastal Resort (3-Sharing)' : 'Standard AC Hotel'}
------------------------------------------------
💰 *TOTAL PER STUDENT SHARE: ₹${calc.perStudentShare.toLocaleString('en-IN')}*
Total Tour Budget: ₹${calc.grandTotal.toLocaleString('en-IN')}

Cost Breakdown:
• Transport & Fuel (incl. Driver Bata & Tolls): ₹${calc.totalTransport.toLocaleString('en-IN')} (${calc.transportPct}%)
• Resort Accommodation (${nights} Nights): ₹${calc.totalStay.toLocaleString('en-IN')} (${calc.stayPct}%)
• All Meals (${tripDays} Days): ₹${calc.totalFood.toLocaleString('en-IN')} (${calc.foodPct}%)
• Industry Entry & Safety Buffer: ₹${(calc.industryEntryTotal + calc.emergencyBuffer).toLocaleString('en-IN')}

Generated via TN IV Express Portal
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 3000);
  };

  return (
    <section id="calculator" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Real-Time College Tour Cost Splitter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Transparent IV Budget & Student Fee Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Eliminate guesswork for class representatives and staff coordinators. Adjust headcount,
            bus type, resort grade, and food plans to get an exact per-student cost breakdown.
          </p>
        </div>

        {/* 2-Column Split: Controls vs Live Financial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {/* Student & Faculty Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>Paying Students</span>
                  </span>
                  <span className="font-extrabold text-blue-700 tabular-nums">
                    {studentCount} Students
                  </span>
                </label>
                <input
                  type="range"
                  min={20}
                  max={60}
                  step={1}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full accent-blue-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>20 Min</span>
                  <span>45 Optimal</span>
                  <span>60 Max</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                  <span>Faculty Members (Free Passes)</span>
                  <span className="font-extrabold text-emerald-700 tabular-nums">
                    {facultyCount} Staff
                  </span>
                </label>
                <select
                  value={facultyCount}
                  onChange={(e) => setFacultyCount(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800"
                >
                  <option value={1}>1 Faculty Escort</option>
                  <option value={2}>2 Faculty Escorts (1 Male + 1 Female)</option>
                  <option value={3}>3 Faculty Escorts</option>
                  <option value={4}>4 Faculty Escorts</option>
                </select>
                <div className="text-[11px] text-slate-400 mt-1">
                  *Staff expenses absorbed equally by batch
                </div>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5 text-slate-500" />
                <span>Coach Type</span>
              </label>
              <select
                value={selectedVehicleId}
                onChange={(e) => setSelectedVehicleId(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-blue-600"
              >
                {FLEET_VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} (₹{v.baseRatePerKm}/km · {v.seatCount} Seats)
                  </option>
                ))}
              </select>
            </div>

            {/* Trip Days & Distance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5 text-slate-500" />
                    <span>Duration</span>
                  </span>
                  <span className="font-bold text-slate-900">{tripDays} Days / {nights} Nights</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[2, 3, 4].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setTripDays(d)}
                      className={`py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                        tripDays === d
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                  <span>Estimated Total Distance</span>
                  <span className="font-extrabold text-blue-700 tabular-nums">{totalKm} km</span>
                </label>
                <input
                  type="range"
                  min={350}
                  max={1600}
                  step={50}
                  value={totalKm}
                  onChange={(e) => setTotalKm(Number(e.target.value))}
                  className="w-full accent-blue-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>350 km (Short)</span>
                  <span>850 km (Ooty/ISRO)</span>
                  <span>1600 km</span>
                </div>
              </div>
            </div>

            {/* Stay & Food Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Stay & Resort Type
                </label>
                <div className="space-y-1.5 text-xs">
                  {[
                    { id: 'budget', label: 'Budget Student Lodge (₹450/night)' },
                    { id: 'resort', label: 'Hilltop Resort 3-Sharing (₹750/night)' },
                    { id: 'deluxe', label: '3-Star Deluxe Hotel (₹1100/night)' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStayGrade(s.id as any)}
                      className={`w-full p-2.5 rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                        stayGrade === s.id
                          ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-slate-500" />
                  <span>Catering & Food Plan</span>
                </label>
                <div className="space-y-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setFoodOption('standard')}
                    className={`w-full p-2.5 rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                      foodOption === 'standard'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <div>Standard Pure Veg Buffet</div>
                    <div className="text-[10px] text-slate-500">₹450/day (3 Meals + Tea/Snacks)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFoodOption('grand-biryani')}
                    className={`w-full p-2.5 rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                      foodOption === 'grand-biryani'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <div>Grand Biryani Banquet + Non-Veg</div>
                    <div className="text-[10px] text-slate-500">₹650/day (Includes 1 Feast + Veg Buffet)</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Sound setup checkbox */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">4000W High-Bass DJ Setup & Laser Lights</div>
                <div className="text-[11px] text-slate-500">Subwoofers, Bluetooth, wireless mic for celebrations</div>
              </div>
              <input
                type="checkbox"
                checked={includeDjSetup}
                onChange={(e) => setIncludeDjSetup(e.target.checked)}
                className="w-4 h-4 accent-blue-700 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Right Column: Financial Summary Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Estimated Per Student Share
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">
                ₹{calc.perStudentShare.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Based on {studentCount} paying students ({facultyCount} staff free)
              </div>

              {/* Total Tour Amount */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Tour Budget:</span>
                <span className="text-base font-bold text-white tabular-nums">
                  ₹{calc.grandTotal.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Visual Proportion Bar */}
              <div className="mt-4">
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden flex">
                  <div style={{ width: `${calc.transportPct}%` }} className="bg-blue-500" title="Transport" />
                  <div style={{ width: `${calc.stayPct}%` }} className="bg-amber-400" title="Stay" />
                  <div style={{ width: `${calc.foodPct}%` }} className="bg-emerald-400" title="Food" />
                  <div style={{ width: `${calc.otherPct}%` }} className="bg-purple-400" title="Buffer" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Bus {calc.transportPct}%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Stay {calc.stayPct}%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Food {calc.foodPct}%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400" /> Buffer
                  </span>
                </div>
              </div>

              {/* Detailed Breakdown List */}
              <div className="mt-6 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Coach Hire ({calc.billableKm} km @ ₹{selectedVehicle.baseRatePerKm}/km):</span>
                  <span className="font-mono tabular-nums text-white">₹{calc.busHireCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Dual Driver Bata ({tripDays} Days):</span>
                  <span className="font-mono tabular-nums text-white">₹{calc.driverBataTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Tolls, Ghat Permits & Parking:</span>
                  <span className="font-mono tabular-nums text-white">₹{calc.tollAndPermits.toLocaleString('en-IN')}</span>
                </div>
                {includeDjSetup && (
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span>4000W DJ Sound System:</span>
                    <span className="font-mono tabular-nums text-white">₹{calc.djSoundAddon.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>Resort Stay ({nights} Nights × {studentCount + facultyCount} Pax):</span>
                  <span className="font-mono tabular-nums text-white">₹{calc.totalStay.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span>All Meals ({tripDays} Days Catering):</span>
                  <span className="font-mono tabular-nums text-white">₹{calc.totalFood.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Industry Passes & Emergency Reserve:</span>
                  <span className="font-mono tabular-nums text-white">
                    ₹{(calc.industryEntryTotal + calc.emergencyBuffer).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Share & Copy Button */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied Breakdown to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-blue-700" />
                      <span>Copy Breakdown for WhatsApp Class Group</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Note box */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
              <div>
                <strong>Pro-Tip for Student Committees:</strong> Keeping batch size at 45–50 students
                reduces per-student transport fare by over 30% compared to a half-filled coach.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
