import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartRecommender } from './components/SmartRecommender';
import { FleetExplorer } from './components/FleetExplorer';
import { PackagesExplorer } from './components/PackagesExplorer';
import { CostCalculator } from './components/CostCalculator';
import { FormalitiesHub } from './components/FormalitiesHub';
import { IndustryDirectory } from './components/IndustryDirectory';
import { OperatorsDirectory } from './components/OperatorsDirectory';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { IVPackage, TransportVehicle } from './data/ivData';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPackageModal, setSelectedPackageModal] = useState<IVPackage | null>(null);
  const [quotePrefill, setQuotePrefill] = useState<{
    originCity?: string;
    department?: string;
    studentCount?: number;
    days?: number;
    packageId?: string;
    vehicleId?: string;
  }>({});
  const [prefilledIndustry, setPrefilledIndustry] = useState<string>('');

  const handleOpenQuoteWithPrefill = (data: {
    originCity?: string;
    department?: string;
    studentCount?: number;
    days?: number;
    packageId?: string;
    vehicleId?: string;
  }) => {
    setQuotePrefill(data);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithVehicle = (vehicleId: string) => {
    setQuotePrefill({ vehicleId });
    setIsQuoteOpen(true);
  };

  const handleSelectPackageForQuote = (pkg: IVPackage) => {
    setQuotePrefill({
      packageId: pkg.id,
      days: pkg.durationDays,
      vehicleId: pkg.recommendedVehicleId
    });
    setIsQuoteOpen(true);
  };

  const handleOpenFormalitiesWithPkg = (pkgTitle: string) => {
    setPrefilledIndustry(pkgTitle);
    const elem = document.getElementById('formalities');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUseIndustryInFormalities = (industryName: string) => {
    setPrefilledIndustry(industryName);
    const elem = document.getElementById('formalities');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVehicle = (vehicle: TransportVehicle) => {
    const fleetElem = document.getElementById('fleet');
    if (fleetElem) {
      fleetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: IVPackage) => {
    setSelectedPackageModal(pkg);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <Navbar
        onOpenQuote={() => {
          setQuotePrefill({});
          setIsQuoteOpen(true);
        }}
        activeSection=""
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={() => {
            document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreFleet={() => {
            document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectCity={() => {
            document.getElementById('smart-suggester')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectDept={() => {
            document.getElementById('smart-suggester')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Interactive Smart Recommender Engine */}
        <SmartRecommender
          onSelectPackage={handleSelectPackage}
          onSelectVehicle={handleSelectVehicle}
          onOpenFormalities={() => {
            document.getElementById('formalities')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuote={handleOpenQuoteWithPrefill}
        />

        {/* 3. Transport Fleet Showcase */}
        <FleetExplorer
          onSelectVehicle={handleSelectVehicle}
          onOpenQuoteWithVehicle={handleOpenQuoteWithVehicle}
        />

        {/* 4. Curated Tamil Nadu IV Tour Packages */}
        <PackagesExplorer
          onSelectPackageForQuote={handleSelectPackageForQuote}
          selectedPackageModal={selectedPackageModal}
          onOpenPackageModal={setSelectedPackageModal}
          onClosePackageModal={() => setSelectedPackageModal(null)}
          onOpenFormalitiesWithPkg={handleOpenFormalitiesWithPkg}
        />

        {/* 5. Real-Time IV Cost Splitter & Calculator */}
        <CostCalculator />

        {/* 6. College Formalities & Permission Documentation Kit */}
        <FormalitiesHub initialIndustry={prefilledIndustry} />

        {/* 7. Tamil Nadu Industries Directory */}
        <IndustryDirectory
          onUseInFormalities={handleUseIndustryInFormalities}
          onExplorePackagesForIndustry={() => {
            document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Verified Fleet Operators */}
        <OperatorsDirectory
          onContactOperator={(opName) => {
            setQuotePrefill({ specialNotes: `Enquiry for fleet operator: ${opName}` } as any);
            setIsQuoteOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote & Booking Enquiry Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefillData={quotePrefill}
      />
    </div>
  );
}
