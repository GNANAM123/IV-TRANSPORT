import React, { useState } from 'react';
import { COLLEGE_FORMALITIES_TEMPLATES, TN_INDUSTRIES } from '../data/ivData';
import {
  FileText,
  Copy,
  Check,
  Printer,
  ShieldAlert,
  Building,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

interface FormalitiesHubProps {
  initialIndustry?: string;
}

export const FormalitiesHub: React.FC<FormalitiesHubProps> = ({ initialIndustry }) => {
  const [activeTab, setActiveTab] = useState<'industry' | 'parent' | 'police' | 'checklist'>('industry');
  const [collegeName, setCollegeName] = useState('Sri Krishna College of Engineering & Technology');
  const [department, setDepartment] = useState('Department of Mechanical Engineering');
  const [destIndustry, setDestIndustry] = useState(initialIndustry || 'ISRO Propulsion Complex (IPRC), Mahendragiri');
  const [dates, setDates] = useState('November 24th to 27th, 2026');
  const [studentCount, setStudentCount] = useState(48);
  const [facultyName, setFacultyName] = useState('Dr. K. Ramanathan, M.E., Ph.D.');
  const [facultyPhone, setFacultyPhone] = useState('+91 94431 82910');
  const [busRegNo, setBusRegNo] = useState('TN 38 BX 4812 (BharatBenz Luxury Tourist Coach)');
  const [driverContact, setDriverContact] = useState('+91 98422 10492 (Mr. S. Selvam - Senior Driver)');
  const [copied, setCopied] = useState(false);

  // Generate templates
  const industryLetter = COLLEGE_FORMALITIES_TEMPLATES.industryLetter(
    collegeName,
    department,
    destIndustry,
    dates,
    studentCount,
    `${facultyName} & 1 Female Faculty Escort`
  );

  const parentLetter = COLLEGE_FORMALITIES_TEMPLATES.parentConsentLetter(
    collegeName,
    '',
    destIndustry,
    dates
  );

  const policeLetter = COLLEGE_FORMALITIES_TEMPLATES.policeIntimationLetter(
    collegeName,
    busRegNo,
    driverContact,
    `${collegeName} -> ${destIndustry} -> Return`,
    dates,
    facultyName,
    facultyPhone
  );

  const getActiveText = () => {
    switch (activeTab) {
      case 'industry':
        return industryLetter;
      case 'parent':
        return parentLetter;
      case 'police':
        return policeLetter;
      default:
        return '';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="formalities" className="py-16 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Official College Documentation Kit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tamil Nadu College IV Formalities & Permission Letters
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            AICTE, Anna University, and DOTE mandated paperwork templates. Fill in your details once
            and auto-generate industry request letters, bilingual parent consent slips, and police notices.
          </p>
        </div>

        {/* 2-Column Interface: Inputs on Left, Document Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Fields */}
          <div className="lg:col-span-4 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <Building className="w-4 h-4 text-blue-700" />
              <span>Autofill College Details</span>
            </h3>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">College Name</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Department</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Destination Industry</label>
              <input
                type="text"
                value={destIndustry}
                onChange={(e) => setDestIndustry(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Batch Size</label>
                <input
                  type="number"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Proposed Dates</label>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Faculty Coordinator</label>
              <input
                type="text"
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Faculty Mobile No</label>
              <input
                type="text"
                value={facultyPhone}
                onChange={(e) => setFacultyPhone(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Bus Reg No</label>
              <input
                type="text"
                value={busRegNo}
                onChange={(e) => setBusRegNo(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Driver Contact</label>
              <input
                type="text"
                value={driverContact}
                onChange={(e) => setDriverContact(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-blue-600"
              />
            </div>
          </div>

          {/* Right Column: Document Tabs and Printable Preview */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            {/* Tabs Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 mb-4">
                {[
                  { id: 'industry', label: '1. Industry Request Letter' },
                  { id: 'parent', label: '2. Parent Consent Slip (பெற்றோர் ஒப்புதல்)' },
                  { id: 'police', label: '3. Police Intimation Notice' },
                  { id: 'checklist', label: '4. DOTE / Univ Safety Checklist' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-blue-700 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Document Content Box */}
              {activeTab === 'checklist' ? (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-inner space-y-4 text-xs text-slate-700">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                    Mandatory Safety & Compliance Protocols for College IVs (Tamil Nadu)
                  </h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Faculty Escort Ratio', desc: 'At least 1 faculty member per 20 students. If female students are participating, at least one female faculty escort is compulsory.' },
                      { title: 'RTO Speed Governor Compliance', desc: 'Coach speed governor must be sealed and tested at 80 km/h. Certificate must be onboard.' },
                      { title: 'Dual Drivers for Night Journeys', desc: 'Journeys exceeding 8 hours or traversing ghat roads (Ooty/Kodaikanal) must deploy two certified heavy vehicle drivers.' },
                      { title: 'GPS Tracking Telemetry Link', desc: 'Real-time GPS tracking link must be actively accessible to the College Principal, HOD, and parent representatives.' },
                      { title: 'Strict Waterbody / Night Curfew', desc: 'Strict prohibition on entering unauthorized lakes, rivers, or waterfalls. Resort night curfew of 10:00 PM.' },
                      { title: 'Emergency First Aid Kit & Trauma Protocol', desc: 'Commercial first-aid box and nearest government hospital phone directory en-route.' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-inner font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[480px] overflow-y-auto">
                  {getActiveText()}
                </div>
              )}
            </div>

            {/* Actions Bar */}
            {activeTab !== 'checklist' && (
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  *Print on official college letterhead and affix college stamp
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied Letter!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-blue-700" />
                        <span>Copy Letter Text</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Letter</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
