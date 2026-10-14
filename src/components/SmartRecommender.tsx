import React, { useState, useMemo } from 'react';
import {
  TN_COLLEGE_CITIES,
  DEPARTMENTS,
  IV_PACKAGES,
  FLEET_VEHICLES,
  IVPackage,
  TransportVehicle
} from '../data/ivData';
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Shield,
  FileText
} from 'lucide-react';

interface SmartRecommenderProps {
  onSelectPackage: (pkg: IVPackage) => void;
  onSelectVehicle: (vehicle: TransportVehicle) => void;
  onOpenFormalities: () => void;
  onOpenQuote: (prefillData: {
    originCity: string;
    department: string;
    studentCount: number;
    days: number;
    packageId: string;
    vehicleId: string;
  }) => void;
}

export const SmartRecommender: React.FC<SmartRecommenderProps> = ({
  onSelectPackage,
  onSelectVehicle,
  onOpenFormalities,
  onOpenQuote
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('coimbatore');
  const [selectedDept, setSelectedDept] = useState<string>('mech');
  const [studentCount, setStudentCount] = useState<number>(45);
  const [durationDays, setDurationDays] = useState<number>(3);
  const [tripVibe, setTripVibe] = useState<'balanced' | 'tech-heavy' | 'hill-station' | 'budget'>('balanced');

  // Calculation for recommendations
  const recommendation = useMemo(() => {
    // Score packages based on department, duration, and vibe
    const scoredPackages = IV_PACKAGES.map((pkg) => {
      let score = 0;
      if (pkg.idealForDepartments.includes(selectedDept)) score += 40;
      if (pkg.durationDays === durationDays) score += 30;
      else if (Math.abs(pkg.durationDays - durationDays) === 1) score += 15;

      if (tripVibe === 'hill-station' && pkg.id.includes('nilgiris')) score += 35;
      if (tripVibe === 'tech-heavy' && (pkg.id.includes('isro') || pkg.id.includes('neyveli'))) score += 35;
      if (tripVibe === 'budget' && pkg.basePricePerStudent < 3500) score += 35;
      if (tripVibe === 'balanced') score += 20;

      return { package: pkg, score };
    }).sort((a, b) => b.score - a.score);

    const bestPackage = scoredPackages[0]?.package || IV_PACKAGES[0];
    const alternativePackage = scoredPackages[1]?.package || IV_PACKAGES[1];

    // Select best transport vehicle based on student count
    let bestVehicleId = 'bharatbenz-53-dj';
    if (studentCount <= 18) {
      bestVehicleId = 'force-urbania-17';
    } else if (studentCount <= 40) {
      bestVehicleId = tripVibe === 'budget' ? 'ashok-leyland-40' : 'scania-metrolink-45';
    } else if (studentCount <= 53) {
      bestVehicleId = 'bharatbenz-53-dj';
    } else {
      // 54+ students -> Multi-bus needed
      bestVehicleId = 'bharatbenz-53-dj';
    }

    const bestVehicle = FLEET_VEHICLES.find((v) => v.id === bestVehicleId) || FLEET_VEHICLES[0];

    // Calculate approximate per student rate tailored to origin and student count
    const basePerStudent = bestPackage.basePricePerStudent;
    // Slight adjustment if fewer students to absorb fixed bus cost
    const adjustedRate = Math.round(
      (basePerStudent * 45) / Math.max(studentCount, 25) +
        (bestVehicle.category === 'multi-axle' ? 250 : 0)
    );

    return {
      bestPackage,
      alternativePackage,
      bestVehicle,
      estimatedPricePerStudent: adjustedRate,
      busesNeeded: Math.ceil(studentCount / bestVehicle.seatCount)
    };
  }, [selectedCity, selectedDept, studentCount, durationDays, tripVibe]);

  const cityName = TN_COLLEGE_CITIES.find((c) => c.id === selectedCity)?.name || 'Tamil Nadu';
  const deptName = DEPARTMENTS.find((d) => d.id === selectedDept)?.label || 'Engineering';

  return (
    <section id="smart-suggester" className="py-16 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive IV Recommendation Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Personalized IV Transport & Package Suggestion
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Configure your college department, starting city, and student count to get the ideal vehicle match,
            industry clearances, and instant per-student budget.
          </p>
        </div>

        {/* 2-Column Interface: Controls on Left, Live Suggested Blueprint on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-700" />
              <span>Step 1: College & Batch Parameters</span>
            </h3>

            {/* Origin City */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Origin College City / District</span>
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600"
              >
                {TN_COLLEGE_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name} ({city.hubName})
                  </option>
                ))}
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                <span>Department / Discipline</span>
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Student Count */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Number of Students</span>
                </span>
                <span className="text-blue-700 font-extrabold tabular-nums bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  {studentCount} Students (+ 2 Faculty Free)
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={106}
                step={1}
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full accent-blue-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>15 (Small PG / Mini-van)</span>
                <span>45-53 (Standard 1 Bus)</span>
                <span>100+ (2 Buses Fleet)</span>
              </div>
            </div>

            {/* Tour Duration */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Duration</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { days: 2, label: '2D / 1N', desc: 'Short Weekend' },
                  { days: 3, label: '3D / 2N', desc: 'Most Popular' },
                  { days: 4, label: '4D / 3N', desc: 'Mega Circuit' }
                ].map((item) => (
                  <button
                    key={item.days}
                    type="button"
                    onClick={() => setDurationDays(item.days)}
                    className={`px-3 py-2 text-center rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      durationDays === item.days
                        ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <div>{item.label}</div>
                    <div className={`text-[10px] font-normal ${durationDays === item.days ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Vibe / Priority */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Trip Style & Vibe
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'balanced', label: 'Balanced Tech + Sightseeing' },
                  { id: 'hill-station', label: 'Hill Station & Resort (Ooty)' },
                  { id: 'tech-heavy', label: 'Core Industry Heavy (ISRO/NLC)' },
                  { id: 'budget', label: 'Budget-Saver Economical' }
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setTripVibe(v.id as any)}
                    className={`p-2.5 rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                      tripVibe === v.id
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Suggested Match Output */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Winner Card */}
            <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-6 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-0.5">
                    Recommended Match for {deptName}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {recommendation.bestPackage.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Route: {recommendation.bestPackage.routeTitle}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Per Student Share</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
                    ₹{recommendation.estimatedPricePerStudent.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">All-Inclusive (Bus + Food + Stay)</div>
                </div>
              </div>

              {/* Vehicle Match Spotlight */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={recommendation.bestVehicle.image}
                      alt={recommendation.bestVehicle.name}
                      className="w-16 h-12 rounded-lg object-cover border border-slate-300 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-blue-700">Recommended Vehicle</div>
                      <div className="text-sm font-bold text-slate-900">
                        {recommendation.bestVehicle.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {recommendation.busesNeeded > 1
                          ? `${recommendation.busesNeeded} Coaches Required for ${studentCount} students`
                          : `${recommendation.bestVehicle.seatCount} Seats · ${recommendation.bestVehicle.layout}`}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectVehicle(recommendation.bestVehicle)}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2 self-start sm:self-center whitespace-nowrap cursor-pointer"
                  >
                    View Bus Specs & Sound Setup
                  </button>
                </div>

                {/* Key Vehicle Highlights for Tamil Nadu IV */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{recommendation.bestVehicle.features.soundSystem}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dual Drivers + Live GPS Speed Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Target Industries tailored to Department */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Industries Visited on this Route
                </h4>
                <div className="space-y-2">
                  {recommendation.bestPackage.targetIndustries.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50/70 border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{ind.name}</div>
                        <div className="text-slate-500 text-[11px]">{ind.location} · {ind.type}</div>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto shrink-0">
                        Permission Assistance Included
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Inclusions unboxed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mb-6">
                {recommendation.bestPackage.tourHighlights.slice(0, 4).map((hl, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() =>
                    onOpenQuote({
                      originCity: selectedCity,
                      department: selectedDept,
                      studentCount,
                      days: durationDays,
                      packageId: recommendation.bestPackage.id,
                      vehicleId: recommendation.bestVehicle.id
                    })
                  }
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Book / Request Official College Quote
                </button>

                <button
                  onClick={() => onSelectPackage(recommendation.bestPackage)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  View Full Day-Wise Itinerary
                </button>

                <button
                  onClick={onOpenFormalities}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>College Permission Letter Form</span>
                </button>
              </div>
            </div>

            {/* Alternative Suggestion */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500">Alternative Option for your batch:</div>
                <div className="text-sm font-bold text-slate-900">{recommendation.alternativePackage.title}</div>
                <div className="text-xs text-slate-500">
                  {recommendation.alternativePackage.durationDays} Days · {recommendation.alternativePackage.routeTitle}
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(recommendation.alternativePackage)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Explore Alternative
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
