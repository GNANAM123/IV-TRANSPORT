import React, { useState } from 'react';
import { TN_INDUSTRIES, IndustryProfile, DEPARTMENTS } from '../data/ivData';
import {
  Building2,
  MapPin,
  Clock,
  Mail,
  GraduationCap,
  Search,
  ArrowRight,
  FileText
} from 'lucide-react';

interface IndustryDirectoryProps {
  onUseInFormalities: (industryName: string) => void;
  onExplorePackagesForIndustry: () => void;
}

export const IndustryDirectory: React.FC<IndustryDirectoryProps> = ({
  onUseInFormalities,
  onExplorePackagesForIndustry
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredIndustries = TN_INDUSTRIES.filter((ind) => {
    const matchesSearch =
      ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ind.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === 'all' || ind.departments.includes(selectedDept);

    return matchesSearch && matchesDept;
  });

  return (
    <section id="industries" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              Tamil Nadu Industrial Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Industrial Visit Destinations in Tamil Nadu
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Comprehensive directory of aerospace, heavy engineering, nuclear energy, and automated
              processing plants with direct permission guidelines and required lead times.
            </p>
          </div>

          {/* Search & Dept Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search ISRO, NLC, BHEL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-blue-600 shadow-sm"
              />
            </div>

            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 focus:outline-blue-600 shadow-sm"
            >
              <option value="all">All Disciplines</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.short}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ind.city}, {ind.district}</span>
                  </span>
                  <span className="font-semibold text-emerald-700">{ind.entryFee}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {ind.name}
                </h3>
                <div className="text-xs text-blue-700 font-medium mb-3">
                  {ind.category}
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {ind.description}
                </p>

                {/* Lead time & Process */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Apply {ind.leadTimeWeeks} weeks in advance</span>
                  </div>
                  <div className="line-clamp-2">
                    {ind.permissionProcess}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onUseInFormalities(ind.name)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Draft Permission Letter</span>
                </button>

                <a
                  href={`mailto:${ind.contactEmail}`}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors"
                  title={`Email ${ind.contactEmail}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
