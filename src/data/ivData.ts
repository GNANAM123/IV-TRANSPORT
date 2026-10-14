export interface TransportVehicle {
  id: string;
  name: string;
  subtitle: string;
  category: 'super-luxury' | 'multi-axle' | 'executive' | 'compact-luxury';
  seatCount: number;
  layout: string;
  image: string;
  baseRatePerKm: number;
  minKmPerDay: number;
  driverBataPerDay: number;
  rating: number;
  reviewsCount: number;
  highlightBadge?: string;
  features: {
    soundSystem: string;
    lighting: string;
    suspension: string;
    seating: string;
    acType: string;
    safety: string[];
    amenities: string[];
  };
  suitableFor: string;
  permitsIncluded: string[];
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  activities: {
    time: string;
    title: string;
    description: string;
    type: 'travel' | 'industry' | 'sightseeing' | 'meal' | 'stay';
  }[];
  nightStayCity: string;
  mealsIncluded: string[];
}

export interface IVPackage {
  id: string;
  title: string;
  tagline: string;
  routeTitle: string;
  durationDays: number;
  durationNights: number;
  idealForDepartments: string[];
  recommendedVehicleId: string;
  estimatedKm: number;
  basePricePerStudent: number; // based on 45 students batch
  image: string;
  targetIndustries: {
    name: string;
    type: string;
    location: string;
    learningFocus: string;
  }[];
  tourHighlights: string[];
  itinerary: ItineraryDay[];
  accommodation: {
    hotelType: string;
    occupancy: string;
    amenities: string[];
  };
  foodPlan: {
    description: string;
    specials: string[];
  };
  inclusions: string[];
  exclusions: string[];
  freeStaffPasses: number; // e.g. 2 staff free per 40 students
}

export interface IndustryProfile {
  id: string;
  name: string;
  city: string;
  district: string;
  departments: string[];
  category: string;
  description: string;
  permissionProcess: string;
  leadTimeWeeks: number;
  entryFee: string;
  contactEmail: string;
}

export interface CollegeCity {
  id: string;
  name: string;
  hubName: string;
  famousColleges: string[];
}

export const TN_COLLEGE_CITIES: CollegeCity[] = [
  { id: 'chennai', name: 'Chennai', hubName: 'Chennai Hub', famousColleges: ['Anna University CEG', 'SRM', 'VIT Chennai', 'Loyola', 'SSN College of Engineering'] },
  { id: 'coimbatore', name: 'Coimbatore', hubName: 'Kongu Belt', famousColleges: ['PSG Tech', 'CIT', 'Kumaraguru', 'Amrita Vishwa', 'SKCET'] },
  { id: 'madurai', name: 'Madurai', hubName: 'South Hub', famousColleges: ['Thiagarajar College (TCE)', 'American College', 'KLN College', 'Fatima College'] },
  { id: 'trichy', name: 'Tiruchirappalli', hubName: 'Central Hub', famousColleges: ['NIT Trichy', 'Saranathan', 'Bishop Heber', 'MAM College'] },
  { id: 'salem', name: 'Salem', hubName: 'Salem Hub', famousColleges: ['GCE Salem', 'Sona College of Tech', 'Vinayaka Missions'] },
  { id: 'tirunelveli', name: 'Tirunelveli', hubName: 'Nellai Hub', famousColleges: ['GCE Tirunelveli', 'Francis Xavier', 'PSN Engineering', 'St. Xavier'] },
  { id: 'vellore', name: 'Vellore', hubName: 'North TN', famousColleges: ['VIT Vellore', 'Thanthai Periyar Govt Inst', 'Adhiparasakthi'] },
  { id: 'erode', name: 'Erode', hubName: 'Kongu Hub', famousColleges: ['Kongu Engineering College', 'Bannari Amman Inst', 'Velalar'] },
  { id: 'thanjavur', name: 'Thanjavur', hubName: 'Delta Hub', famousColleges: ['SASTRA University', 'PMIST', 'Periyar Maniammai'] },
  { id: 'nagercoil', name: 'Nagercoil / Kanyakumari', hubName: 'Deep South', famousColleges: ['Noorul Islam', 'CSI Institute', 'Ponjesly'] }
];

export const DEPARTMENTS = [
  { id: 'mech', label: 'Mechanical & Automobile Engg', short: 'Mech / Auto' },
  { id: 'cse', label: 'Computer Science, IT & AI/DS', short: 'CSE / IT / AI' },
  { id: 'eee', label: 'Electrical, Electronics & Robotics', short: 'EEE / ECE / E&I' },
  { id: 'civil', label: 'Civil Engg & Architecture', short: 'Civil / Arch' },
  { id: 'chem', label: 'Chemical, Biotech & Food Tech', short: 'Chem / Biotech' },
  { id: 'mba', label: 'Management, MBA & Commerce', short: 'MBA / Arts' }
];

export const FLEET_VEHICLES: TransportVehicle[] = [
  {
    id: 'bharatbenz-53-dj',
    name: 'BharatBenz 53-Seater Super-Luxury DJ Coach',
    subtitle: 'The #1 College Choice in Tamil Nadu with Concert Sound & Ambient Lasers',
    category: 'super-luxury',
    seatCount: 53,
    layout: '2 + 2 Pushback Recliner',
    image: '/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg',
    baseRatePerKm: 44,
    minKmPerDay: 300,
    driverBataPerDay: 800,
    rating: 4.95,
    reviewsCount: 342,
    highlightBadge: 'Most Popular for College IVs',
    suitableFor: 'Batches of 42-53 students + 2 staff members. Perfect for long hauls and ghat roads.',
    permitsIncluded: ['TN State Stage Carriage Permit', 'Hill Station Ghat Road Endorsement', 'All-India Tourist Permit Available'],
    features: {
      soundSystem: '4,000 Watts Subwoofer Surround Sound with Bluetooth & Wireless Mic',
      lighting: 'RGB Prism Strobe & Ambient Soft Neon ceiling strip for evening travel',
      suspension: 'Full Electronic Air-Suspension (smooth ride over ghat hairpins)',
      seating: 'Ergonomic plush seats with calf-rest, headrest & wide footspace',
      acType: 'Roof-mounted Carrier High-Efficiency Chiller AC with individual vents',
      safety: [
        'Speed Governor locked at 80 km/h (MVD compliant)',
        'GPS live tracking shared with College Principal & Parents',
        'Dual Drivers (Both 10+ yrs ghat road certified)',
        'Emergency hammer, rear exit door & 4 ABC fire extinguishers'
      ],
      amenities: [
        'USB Fast Charger on every seat pair',
        'Twin 32-inch Full HD LED TVs with HDMI for presentations/movies',
        'Large under-floor luggage boot (100+ travel bags capacity)',
        'Curtains on all panoramic tinted windows'
      ]
    }
  },
  {
    id: 'volvo-9600-multi',
    name: 'Volvo 9600 Multi-Axle B11R Luxury Semi-Sleeper (49 Seater)',
    subtitle: 'Flagship European Ride Quality for Premier Multi-State Tours',
    category: 'multi-axle',
    seatCount: 49,
    layout: '2 + 2 Calf-Rest Semi-Sleeper',
    image: '/src/assets/images/coach_interior_ambient_1791960015168.jpg',
    baseRatePerKm: 58,
    minKmPerDay: 350,
    driverBataPerDay: 1000,
    rating: 4.98,
    reviewsCount: 188,
    highlightBadge: 'Ultra-Smooth Highway Cruiser',
    suitableFor: 'Multi-state journeys (e.g. TN to Bangalore, Mysore, Coorg, Kochi) demanding zero road fatigue.',
    permitsIncluded: ['National Permit', 'Interstate Karnataka & Kerala Online Tax Paid', 'Tourist Fitness Valid'],
    features: {
      soundSystem: 'Harman Kardon tuned acoustic audio with studio clarity',
      lighting: 'Warm Scandinavian diffused reading lamps & ice-blue night floor glow',
      suspension: 'Multi-axle electronically controlled pneumatic air bellows with anti-roll bar',
      seating: '135-degree recline semi-sleeper seats with extendable calf rest',
      acType: 'Climate-controlled twin zone air purification AC system',
      safety: [
        'Electronic Stability Program (ESP) & ABS with EBD',
        'Lane Departure Warning System',
        'Rear-view camera with night vision sensors',
        'Factory certified fire suppression system in engine bay'
      ],
      amenities: [
        'Type-C and Type-A high speed charging per seat',
        'Dual microphone system for faculty announcements & student fun',
        'Extra-wide carpeted gangway',
        'Chilled beverage cooler box onboard'
      ]
    }
  },
  {
    id: 'scania-metrolink-45',
    name: 'Scania Metrolink HD 45-Seater Touring Coach',
    subtitle: 'Robust Swedish Aerodynamics with Powerful Bass & High Panoramic Windows',
    category: 'multi-axle',
    seatCount: 45,
    layout: '2 + 2 Executive Pushback',
    image: '/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg',
    baseRatePerKm: 52,
    minKmPerDay: 300,
    driverBataPerDay: 900,
    rating: 4.88,
    reviewsCount: 129,
    suitableFor: 'Medium batches of 35-45 students needing high luggage room and energetic audio system.',
    permitsIncluded: ['TN State Tourist Permit', 'Kerala Border Green Tax', 'Commercial RTO Clearance'],
    features: {
      soundSystem: 'JBL 3200W Club Audio with dual 12" active subwoofers',
      lighting: 'Dynamic RGB mood lighting with customizable color presets',
      suspension: 'Scania Opticruise air suspension with kneeling feature',
      seating: 'Contoured dual-density foam seats with lumbar support',
      acType: 'High ambient tropical AC tested up to 50°C',
      safety: [
        'Advanced Emergency Braking (AEB)',
        'Speed Governor tested and sealed by RTO',
        'Verified GPS telemetry tracking',
        'First Aid Trauma Kit onboard'
      ],
      amenities: [
        'Twin 24-inch infotainment displays',
        'Individual bottle holders, magazine nets & coat hooks',
        'Massive 9.5 cubic meter luggage hold',
        'Overhead parcel racks with secure locking doors'
      ]
    }
  },
  {
    id: 'ashok-leyland-40',
    name: 'Ashok Leyland Viking 40-Seater Executive Coach',
    subtitle: 'Pocket-Friendly, Rugged & Reliable Tamil Nadu Classic',
    category: 'executive',
    seatCount: 40,
    layout: '2 + 2 Pushback Recliner',
    image: '/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg',
    baseRatePerKm: 38,
    minKmPerDay: 250,
    driverBataPerDay: 700,
    rating: 4.79,
    reviewsCount: 412,
    highlightBadge: 'Best Value for Budget IVs',
    suitableFor: 'Budget-conscious student committees, 2D/1N short industrial trips across central TN.',
    permitsIncluded: ['TN State Contract Carriage Permit', 'Hills Permit Certified'],
    features: {
      soundSystem: 'Sony 2000W Sound Setup with USB & Aux connectivity',
      lighting: 'Soft white and blue night-time LED canopy',
      suspension: 'Parabolic leaf springs with hydraulic telescopic shock absorbers',
      seating: 'Standard comfortable pushback velvet fabric seats',
      acType: 'Sub-engine driven powerful air conditioning',
      safety: [
        'Speed limiter compliant at 80 km/h',
        'Emergency exits clearly marked',
        'Fire extinguishers at front and rear',
        'GPS speed monitoring'
      ],
      amenities: [
        'Centrally mounted 24-inch LCD TV',
        'Individual reading lamps and AC blowers',
        'Standard luggage boot',
        'Emergency mobile charging station'
      ]
    }
  },
  {
    id: 'force-urbania-17',
    name: 'Force Urbania 17-Seater Luxury Monocoque',
    subtitle: 'VIP Executive Comfort for PG Batches, Faculty Teams & Small Research Groups',
    category: 'compact-luxury',
    seatCount: 17,
    layout: '1 + 2 Captain Recliner Seats',
    image: '/src/assets/images/coach_interior_ambient_1791960015168.jpg',
    baseRatePerKm: 28,
    minKmPerDay: 250,
    driverBataPerDay: 600,
    rating: 4.92,
    reviewsCount: 97,
    suitableFor: 'Small research groups (12-16 students + 1 mentor), startup project tours, faculty committees.',
    permitsIncluded: ['All-India Tourist Permit', 'Hill Station Certified'],
    features: {
      soundSystem: 'Alpine 6-speaker acoustic clarity audio',
      lighting: 'Aircraft-style individual reading spotlights',
      suspension: 'Independent front suspension with coil springs',
      seating: 'Executive captain seats with armrests on both sides',
      acType: 'Roof-mounted triple zone air conditioning with micro-filters',
      safety: [
        'Dual airbags for driver and co-passenger',
        'Monocoque body structure meeting crash compliance',
        'ABS with Electronic Brakeforce Distribution',
        'Reverse parking camera & sensors'
      ],
      amenities: [
        'Individual USB charging ports for all 17 passengers',
        'Panoramic extra-large side windows with UV cut glass',
        'Generous rear luggage space',
        'Ultra low floor boarding step for easy ingress'
      ]
    }
  }
];

export const IV_PACKAGES: IVPackage[] = [
  {
    id: 'nilgiris-kongu-engineering',
    title: 'Nilgiris & Kongu Industrial Odyssey',
    tagline: 'High-Altitude Tea Automation + Foundry Heavy Engineering + Doddabetta Peak',
    routeTitle: 'Coimbatore · Ooty · Coonoor · Valparai / Mettupalayam',
    durationDays: 3,
    durationNights: 2,
    idealForDepartments: ['mech', 'cse', 'eee', 'chem', 'mba'],
    recommendedVehicleId: 'bharatbenz-53-dj',
    estimatedKm: 850,
    basePricePerStudent: 3650,
    image: '/src/assets/images/tea_factory_visit_1791960017159.jpg',
    freeStaffPasses: 2,
    targetIndustries: [
      {
        name: 'Doddabetta High Altitude Tea Processing Plant',
        type: 'Food Processing & CTC Automation Plant',
        location: 'Ooty (2,600m altitude)',
        learningFocus: 'CTC tea manufacturing pipeline, moisture withering dryers, electronic sorters, quality control packaging.'
      },
      {
        name: 'CODISSIA Industrial Engineering & Foundry Cluster',
        type: 'Precision Pumps, Motors & Heavy Foundry',
        location: 'Coimbatore',
        learningFocus: 'Induction melting furnaces, CNC turning centers, hydraulic testing bays, pump casting tech.'
      },
      {
        name: 'Pykara Hydro-Electric Power Station',
        type: 'Renewable Power Generation',
        location: 'Pykara, Nilgiris',
        learningFocus: 'Pelton wheel turbines, penstock pipes, step-up transformers, grid synchronization.'
      }
    ],
    tourHighlights: [
      'Industrial visit to Doddabetta Tea Factory & Tea Museum',
      'High-altitude scenic drive through 36 hairpin bends',
      'Pykara Speed Boating & Shooting Point visit',
      'Exclusive Resort Campfire with DJ Music night in Ooty',
      'Coimbatore CODISSIA / Lakshmi Machine Works foundry tour',
      'Nilgiris Chocolate factory visit & shopping tour'
    ],
    accommodation: {
      hotelType: 'Hilltop Student-Friendly Resort (Ooty / Fernhill)',
      occupancy: '3 or 4 Sharing (Separate Boys and Girls buildings) + 2 Twin AC rooms for Faculty',
      amenities: ['24/7 Hot Water (geyser in hill weather)', 'Secure Campus with Security Guard', 'Campfire Lawn', 'Free Wi-Fi']
    },
    foodPlan: {
      description: 'Authentic Unlimited Tamil Nadu Meals (Buffet style)',
      specials: [
        'Day 1 Lunch: Coimbatore Kongu style Veg Meals',
        'Day 2 Dinner: Famous Dindigul / Ambur Chicken Biryani banquet with Veg Paneer Biryani',
        'Day 3 Breakfast: Ooty hot Poori Masala, Idli, Vada, and Filter Coffee'
      ]
    },
    inclusions: [
      '53-Seater BharatBenz AC DJ Coach for 3 Days full usage',
      'All fuel, interstate toll, hill station entry taxes, and parking fees',
      '2 Experienced drivers (ghat road certified) with Bata included',
      '2 Nights Resort stay with 3-sharing rooms',
      'All Meals: 3 Breakfasts, 3 Lunches, 2 Dinners (including 1 Grand Biryani Feast)',
      'Official Industry Visit permission processing and entry coordination',
      'Campfire with high-wattage DJ sound setup at resort',
      'College IV banner for bus front and group photos'
    ],
    exclusions: [
      'Boating ticket charges at Pykara Lake (optional, ~₹150/head)',
      'Personal snacks, camera tickets, and souvenirs'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Departure & Kongu Engineering Footprint',
        nightStayCity: 'Ooty',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '05:00 AM', title: 'Campus Flag-off', description: 'Students and faculty assemble. Bus blessed with coconut pooja & prayer.', type: 'travel' },
          { time: '08:30 AM', title: 'Traditional Breakfast', description: 'Crispy ghee roast dosa, idli-vada, and piping hot filter coffee.', type: 'meal' },
          { time: '10:30 AM', title: 'Industry Visit 1: CODISSIA Foundry & Pump Engineering', description: 'Interactive walkthrough of high-pressure die casting, CNC machining centers, and pump testing bays.', type: 'industry' },
          { time: '01:30 PM', title: 'Kongu Style Lunch', description: 'Traditional Kongu cuisine with sambar, rasam, kootu, poriyal & appalam.', type: 'meal' },
          { time: '03:00 PM', title: 'Ascending the Nilgiris Ghat Road', description: 'Scenic drive with DJ tunes climbing 36 hairpin bends with breathtaking view of Bhavani river basin.', type: 'travel' },
          { time: '07:00 PM', title: 'Resort Check-in & Rest', description: 'Room allotment in Ooty resort. Hot water refresh.', type: 'stay' },
          { time: '08:30 PM', title: 'Dinner & Briefing', description: 'Buffet dinner and faculty briefing for next day industrial schedule.', type: 'meal' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Tea Automation & Nilgiris Science Tour',
        nightStayCity: 'Ooty',
        mealsIncluded: ['Breakfast', 'Lunch', 'Grand Dinner'],
        activities: [
          { time: '07:30 AM', title: 'Morning Breakfast', description: 'Hot idiyappam with coconut milk and steaming pongal.', type: 'meal' },
          { time: '09:00 AM', title: 'Industry Visit 2: Doddabetta Tea Factory & Automation', description: 'Guided factory observation of withering troughs, CTC rollers, fermentation floors, fluid-bed driers and vibrating sieves.', type: 'industry' },
          { time: '11:30 AM', title: 'Doddabetta Telescope House & Peak', description: 'Observation of Nilgiris mountain ranges from highest point in South India.', type: 'sightseeing' },
          { time: '01:30 PM', title: 'Lunch at Ooty Town', description: 'Multi-cuisine lunch buffet with hot soups.', type: 'meal' },
          { time: '03:00 PM', title: 'Pykara Lake & Waterfalls', description: 'Sightseeing, boat rides and nature photography amid eucalyptus forests.', type: 'sightseeing' },
          { time: '06:30 PM', title: 'Homemade Chocolate Factory Walkthrough', description: 'Demonstration of chocolate tempering, molding, and tasting.', type: 'industry' },
          { time: '08:00 PM', title: 'Campfire & DJ Celebration Night', description: 'Electrifying music, student performances, and delicious Biryani feast around the cozy bonfire.', type: 'meal' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Botanical Heritage & Return Campus Journey',
        nightStayCity: 'College Campus (Night Drop)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Evening Tea'],
        activities: [
          { time: '08:00 AM', title: 'Breakfast & Checkout', description: 'Check-out from resort after hearty breakfast.', type: 'meal' },
          { time: '09:30 AM', title: 'Ooty Botanical Garden & Glass House', description: 'Exploration of exotic flora, fossilized tree trunks, and Italian gardens.', type: 'sightseeing' },
          { time: '12:00 PM', title: 'Coonoor Sim’s Park & Pasteur Overview', description: 'Technical briefing on biological vaccine production history at Pasteur Institute exterior.', type: 'sightseeing' },
          { time: '01:30 PM', title: 'Lunch at Mettupalayam Foothills', description: 'Special South Indian banana leaf meal.', type: 'meal' },
          { time: '03:30 PM', title: 'Highway Return Journey', description: 'Group games, song competitions, memories reel creation on coach TVs.', type: 'travel' },
          { time: '10:30 PM', title: 'Safe Arrival at College Gate', description: 'Drop off at college premises with attendance sign-off.', type: 'travel' }
        ]
      }
    ]
  },
  {
    id: 'isro-southern-energy',
    title: 'ISRO Mahendragiri & Southern Energy Corridor',
    tagline: 'Rocket Engine Propulsion Testing + Kudankulam Nuclear Power + Kanyakumari Sunset',
    routeTitle: 'Madurai · Tirunelveli · Mahendragiri · Kudankulam · Kanyakumari',
    durationDays: 4,
    durationNights: 3,
    idealForDepartments: ['mech', 'eee', 'cse', 'civil', 'chem'],
    recommendedVehicleId: 'volvo-9600-multi',
    estimatedKm: 1100,
    basePricePerStudent: 4850,
    image: '/src/assets/images/rocket_propulsion_facility_1791960016411.jpg',
    freeStaffPasses: 2,
    targetIndustries: [
      {
        name: 'ISRO Propulsion Complex (IPRC)',
        type: 'Liquid & Cryogenic Rocket Engine Testing Centre',
        location: 'Mahendragiri (Tirunelveli/Kanyakumari border)',
        learningFocus: 'Vikas engine test stands, cryogenic C25 propulsion stages, vacuum simulation test facilities, telemetry labs.'
      },
      {
        name: 'Kudankulam Nuclear Power Plant (NPCIL) - Science Centre',
        type: 'VVER-1000 Pressurized Water Nuclear Reactor',
        location: 'Radhapuram, Kudankulam',
        learningFocus: 'Nuclear fission steam cycles, reactor core shielding, passive safety systems, desalination plant technology.'
      },
      {
        name: 'Kayathar Suzlon Wind Energy Demonstration Farm',
        type: 'Utility-scale Renewable Wind Generation',
        location: 'Kayathar, Tirunelveli',
        learningFocus: 'Wind turbine nacelle mechanics, pitch/yaw control systems, sub-station step up transformers (230kV).'
      }
    ],
    tourHighlights: [
      'Official technical visit to ISRO IPRC Mahendragiri test stand areas',
      'Interactive nuclear physics walkthrough at Kudankulam Nuclear Science Center',
      'Wind turbine gearbox and aerodynamic blade engineering walk at Kayathar',
      'Ferry boat to Vivekananda Rock Memorial & 133-ft Thiruvalluvar Statue',
      'Tri-sea confluence (Triveni Sangam) sunset and sunrise viewing',
      'Authentic Tirunelveli Iruttu Kadai Halwa tasting stop'
    ],
    accommodation: {
      hotelType: 'Beachside 3-Star Class Hotel (Kanyakumari) + City Hotel (Tirunelveli)',
      occupancy: '3 Sharing AC Rooms with ocean view balconies',
      amenities: ['Air Conditioning', 'Elevator', 'Conference Hall for Tech Debrief', 'Power Backup']
    },
    foodPlan: {
      description: 'Southern Coastal & Nellai Delicacies',
      specials: [
        'Authentic Tirunelveli Sothi Kuzhambu and Halwa',
        'Kanyakumari Fish Curry / Paneer coastal coconut roast',
        'Madurai Jigarthanda refreshment treat'
      ]
    },
    inclusions: [
      'Volvo Multi-Axle / BharatBenz Luxury Air-Suspension Coach',
      'All toll, inter-district permissions, beach parking, driver bata',
      '3 Nights Hotel Stay in prime AC rooms',
      'All Breakfasts, Lunches, and Dinners during 4 days',
      'ISRO & NPCIL gate authorization liaison paperwork',
      'Vivekananda Rock ferry tickets & entry monument passes'
    ],
    exclusions: ['Watersports fees', 'Personal laundry and room service'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Nellai Halwa & Wind Turbine Farm Inspection',
        nightStayCity: 'Tirunelveli',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '06:00 AM', title: 'Departure from College', description: 'Coach departs with student welcome kit and route briefing.', type: 'travel' },
          { time: '11:30 AM', title: 'Industry Visit 1: Kayathar Wind Energy Hub', description: 'Field demonstration of 2.1 MW wind turbine generators, scada monitoring, and anemometer telemetry.', type: 'industry' },
          { time: '01:30 PM', title: 'Tirunelveli Traditional Lunch', description: 'Famous Nellai banana leaf meal with Sodhi and spicy poriyal.', type: 'meal' },
          { time: '04:00 PM', title: 'Nellaiperappar Temple Architecture Walk', description: '1000-pillar hall and acoustic musical pillars acoustic study.', type: 'sightseeing' },
          { time: '06:00 PM', title: 'Iruttu Kadai Halwa Stop', description: 'Hot wheat halwa straight from the century-old traditional shop.', type: 'meal' },
          { time: '08:30 PM', title: 'Dinner & Hotel Check-in', description: 'Overnight rest in Tirunelveli AC rooms.', type: 'stay' }
        ]
      },
      {
        dayNumber: 2,
        title: 'ISRO Space Propulsion & Rocket Engineering',
        nightStayCity: 'Kanyakumari',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '07:30 AM', title: 'Breakfast & Security Clearance', description: 'Identity cards verification and ISRO visitor pass distribution.', type: 'meal' },
          { time: '09:30 AM', title: 'Industry Visit 2: ISRO Propulsion Complex (IPRC)', description: 'Technical walkthrough of Vikas Engine semi-cryogenic test stand, propellant storage dewars, and space museum exhibits.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch at IPRC Canteen / Mahendragiri', description: 'Hygiene meal near the Western Ghat foothills.', type: 'meal' },
          { time: '03:30 PM', title: 'Drive to Kanyakumari Coast', description: 'Scenic drive flanked by massive windmills and coconut groves.', type: 'travel' },
          { time: '05:45 PM', title: 'Sunset at Hidden Beach / Sunset Point', description: 'Mesmerizing sun setting over Arabian Sea horizon.', type: 'sightseeing' },
          { time: '08:30 PM', title: 'Grand Coastal Dinner', description: 'Buffet with coastal special curries and continental choices.', type: 'meal' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Kudankulam Nuclear Tech & Heritage Monuments',
        nightStayCity: 'Kanyakumari',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '06:00 AM', title: 'Triveni Sangam Sunrise', description: 'Breathtaking sunrise at confluence of Indian Ocean, Arabian Sea & Bay of Bengal.', type: 'sightseeing' },
          { time: '08:00 AM', title: 'Breakfast', description: 'South Indian breakfast buffet.', type: 'meal' },
          { time: '09:30 AM', title: 'Industry Visit 3: Kudankulam NPCIL Nuclear Science Pavilion', description: '3D simulation of VVER reactor containment, control rods mechanism, radiation safety standards, and seawater desalination.', type: 'industry' },
          { time: '01:30 PM', title: 'Coastal Lunch', description: 'Rich lunch spread with regional specialties.', type: 'meal' },
          { time: '03:30 PM', title: 'Ferry to Vivekananda Rock & Statue', description: 'Boat ride to the historic meditation rock and 133-ft Thiruvalluvar granite colossus.', type: 'sightseeing' },
          { time: '06:30 PM', title: 'Kanyakumari Marine Drive & Shopping', description: 'Conch souvenirs, handicraft stores, beach market.', type: 'sightseeing' },
          { time: '08:30 PM', title: 'Gala Dinner & DJ Bus Beats', description: 'Music session and faculty interaction.', type: 'meal' }
        ]
      },
      {
        dayNumber: 4,
        title: 'Padmanabhapuram Wooden Palace & Return',
        nightStayCity: 'College Campus (Drop)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '08:00 AM', title: 'Breakfast & Checkout', description: 'Check-out from Kanyakumari hotel.', type: 'meal' },
          { time: '09:30 AM', title: 'Padmanabhapuram Palace Visit', description: 'Marvel of 16th-century indigenous wooden architecture, clock tower & ancient ventilation systems.', type: 'sightseeing' },
          { time: '01:30 PM', title: 'Madurai Traditional Meal Stop', description: 'Royal feast featuring Chettinad flavors.', type: 'meal' },
          { time: '04:00 PM', title: 'Madurai Meenakshi Temple / Teppakulam', description: 'Gopuram architectural study and famous Jigarthanda drink.', type: 'sightseeing' },
          { time: '09:30 PM', title: 'Arrival back at College Campus', description: 'Students returned safely with souvenirs and knowledge certificates.', type: 'travel' }
        ]
      }
    ]
  },
  {
    id: 'neyveli-bhel-central-tn',
    title: 'Cauvery Basin Heavy Industries & Dam Hydraulics',
    tagline: 'Massive NLC Lignite Open Cast Mines + BHEL Boiler Works + Kallanai Ancient Dam',
    routeTitle: 'Neyveli · Trichy · Thanjavur · Karur',
    durationDays: 2,
    durationNights: 1,
    idealForDepartments: ['mech', 'civil', 'eee', 'chem'],
    recommendedVehicleId: 'ashok-leyland-40',
    estimatedKm: 600,
    basePricePerStudent: 2750,
    image: '/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg',
    freeStaffPasses: 2,
    targetIndustries: [
      {
        name: 'NLC India Ltd (Neyveli Lignite Corporation)',
        type: 'Open Cast Mine-II & Thermal Power Station',
        location: 'Neyveli, Cuddalore',
        learningFocus: 'Giant Bucket Wheel Excavators, conveyor belt dispatch systems, pulverized fuel boilers, cooling towers.'
      },
      {
        name: 'BHEL (Bharat Heavy Electricals Ltd) Trichy',
        type: 'Heavy Industrial Boiler & Pressure Vessel Fabrication',
        location: 'Tiruverumbur, Trichy',
        learningFocus: 'Heavy submerged arc welding, non-destructive testing (NDT), supercritical boiler tubes bending, CNC gantry mills.'
      },
      {
        name: 'Grand Anicut (Kallanai Dam) & Mettur Hydro-Regulator',
        type: 'Hydraulic Dam & Irrigation Engineering',
        location: 'Cauvery River, Trichy-Thanjavur Border',
        learningFocus: '2000-year-old stone dam hydraulics, flood gates, sluice silt management, silt delta distribution.'
      }
    ],
    tourHighlights: [
      'Live viewing of massive 1400-liter bucket wheel excavators at NLC Mine-II',
      'Walkthrough of BHEL industrial fabrication bays and tube plant',
      'Civil engineering analysis of 2nd century AD Kallanai Dam built by King Karikalan',
      'Brihadisvara Temple (Big Temple) UNESCO monolithic granite architecture tour',
      'Economical 2D/1N package ideal for budget student committees'
    ],
    accommodation: {
      hotelType: 'City AC Hotel (Trichy Central / Thanjavur)',
      occupancy: '3 Sharing Deluxe AC Rooms',
      amenities: ['Attached Baths', '24/7 Power Backup', 'Lift', 'Bus Parking Bay']
    },
    foodPlan: {
      description: 'Delta Cuisine with Thanjavur specials',
      specials: [
        'Thanjavur traditional sambar & crispy vada breakfast',
        'Trichy famous Banana Leaf Meal with Payasam',
        'Special evening tea with hot onion pakoda'
      ]
    },
    inclusions: [
      'Ashok Leyland Executive AC Coach / BharatBenz Coach for 2 full days',
      '1 Night AC Hotel stay in Trichy',
      '2 Breakfasts, 2 Lunches, 1 Dinner',
      'Industrial visit application paperwork assistance',
      'Toll, state taxes, parking, driver bata included'
    ],
    exclusions: ['Personal camera fees at temple', 'Room incidentals'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Neyveli Lignite Mines & Thanjavur Wonder',
        nightStayCity: 'Trichy',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '05:30 AM', title: 'Departure from College', description: 'Early morning start with snacks on board.', type: 'travel' },
          { time: '08:30 AM', title: 'Breakfast Stop', description: 'Traditional idli, pongal and vada.', type: 'meal' },
          { time: '10:30 AM', title: 'Industry Visit 1: NLC India Mine-II', description: 'Observation point overlooking open cast lignite pits, specialized spreader machines, and environmental eco-park.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch at Neyveli Township', description: 'Buffet meals with curd vadai.', type: 'meal' },
          { time: '03:30 PM', title: 'Brihadisvara Temple Architectural Wonder', description: 'Civil engineering study of 80-tonne single granite capstone dome and shadow mechanics.', type: 'sightseeing' },
          { time: '07:30 PM', title: 'Arrival at Trichy & Hotel Check-in', description: 'Rest and dinner at hotel restaurant.', type: 'stay' }
        ]
      },
      {
        dayNumber: 2,
        title: 'BHEL Heavy Boilers & Ancient Kallanai Dam',
        nightStayCity: 'College Campus (Drop)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Evening Tea'],
        activities: [
          { time: '08:00 AM', title: 'Breakfast', description: 'Hot dosas and coffee.', type: 'meal' },
          { time: '09:30 AM', title: 'Industry Visit 2: BHEL Trichy High-Pressure Boiler Plant', description: 'Engineering inspection of heavy steam drum manufacturing, ultrasonic testing, and automated welding lines.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch at Trichy', description: 'Traditional south Indian thali.', type: 'meal' },
          { time: '03:00 PM', title: 'Site Inspection 3: Kallanai Dam (Grand Anicut)', description: 'Detailed examination of ancient stone masonry surviving high river discharge for over 1900 years.', type: 'industry' },
          { time: '05:30 PM', title: 'Return Journey to College', description: 'Fun interactive games, feedback session, safe drop back by 10:00 PM.', type: 'travel' }
        ]
      }
    ]
  },
  {
    id: 'chennai-auto-corridor',
    title: 'Chennai Auto Hub & Vande Bharat Rail Tech',
    tagline: 'Hyundai / Ashok Leyland Robotics + ICF Vande Bharat Coach Factory + Mahabalipuram',
    routeTitle: 'Sriperumbudur · Perambur (ICF) · Ennore · Mahabalipuram',
    durationDays: 3,
    durationNights: 2,
    idealForDepartments: ['mech', 'cse', 'eee', 'mba', 'civil'],
    recommendedVehicleId: 'bharatbenz-53-dj',
    estimatedKm: 700,
    basePricePerStudent: 3950,
    image: '/src/assets/images/hero_iv_bus_tamilnadu_1791960013805.jpg',
    freeStaffPasses: 2,
    targetIndustries: [
      {
        name: 'Integral Coach Factory (ICF) Perambur',
        type: 'Vande Bharat High-Speed EMU & Railway Coach Manufacturing',
        location: 'Perambur, Chennai',
        learningFocus: 'Stainless steel coach shell fabrication, bogie wheel mounting, electrical traction motors, aerodynamic nose cone assembly.'
      },
      {
        name: 'Hyundai Motor India / Ashok Leyland Plant',
        type: 'Automotive Robotic Assembly & Press Shops',
        location: 'Sriperumbudur / Ennore, Chennai',
        learningFocus: 'Robotic spot welding line, electrophoretic dip painting, automated monorail assembly conveyor, end-of-line dyno test.'
      },
      {
        name: 'Chennai Port Trust & Marine Terminal',
        type: 'Maritime Logistics & Automated Container Terminal',
        location: 'Chennai Harbour',
        learningFocus: 'Super post-panamax gantry cranes, customs EDI workflow, reefer container cold storage chains.'
      }
    ],
    tourHighlights: [
      'Rare insider visit to ICF Vande Bharat coach production line',
      'Automated robotic stamping and body-in-white welding line demonstration',
      'Mahabalipuram UNESCO Shore Temple and Five Rathas beach walk',
      'Covelong Beach Resort stay with evening DJ sound party',
      'Biryani feast at legendary Chennai Thalappakatti'
    ],
    accommodation: {
      hotelType: 'Coastal Resort (ECR Beach Road, Mahabalipuram)',
      occupancy: '3 or 4 Sharing with swimming pool access',
      amenities: ['Swimming Pool', 'Private Lawn', 'Direct Beach Walkway', 'AC Rooms']
    },
    foodPlan: {
      description: 'Chennai Coastal & Chettinad Feasts',
      specials: ['Chennai Dindigul Thalappakatti Biryani', 'Crispy Podi Dosa breakfast', 'Filter Kaapi']
    },
    inclusions: [
      '53-Seater BharatBenz AC DJ Coach',
      '2 Nights ECR Resort stay with pool usage',
      'All Breakfasts, Lunches, and Dinners (3 Days)',
      'ICF and Automotive factory permission paperwork',
      'All toll, fuel, driver bata, beach parking'
    ],
    exclusions: ['Beach jet ski / surfing rentals', 'Personal shopping'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Robotic Auto Assembly & ECR Check-in',
        nightStayCity: 'Mahabalipuram (ECR)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '06:00 AM', title: 'Pickup from College', description: 'Departure via Chennai National Highway.', type: 'travel' },
          { time: '09:30 AM', title: 'Industry Visit 1: Automotive Manufacturing Hub (Sriperumbudur)', description: 'Witness 400+ KUKA robotic arms performing laser welding, panel stamping, and vehicle chassis marriage.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch at Oragadam', description: 'Full south Indian buffet.', type: 'meal' },
          { time: '04:00 PM', title: 'Drive down East Coast Road (ECR)', description: 'Scenic drive alongside the Bay of Bengal.', type: 'travel' },
          { time: '06:00 PM', title: 'Resort Check-in & Pool Refresh', description: 'Relax at beach resort lawns.', type: 'stay' },
          { time: '08:30 PM', title: 'ECR Seafood / Veg Dinner Spread', description: 'Grand dinner by the coast.', type: 'meal' }
        ]
      },
      {
        dayNumber: 2,
        title: 'ICF Vande Bharat Engineering & Shore Temple',
        nightStayCity: 'Mahabalipuram (ECR)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '07:30 AM', title: 'Resort Breakfast Buffet', description: 'Poori bhaji, idli vada, fresh juices.', type: 'meal' },
          { time: '09:30 AM', title: 'Industry Visit 2: Integral Coach Factory (ICF) Shell & Furnishing', description: 'Guided tour of India’s premier railway plant producing indigenous Vande Bharat trainsets and self-propelled coaches.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch in Chennai', description: 'Authentic Chennai biryani feast.', type: 'meal' },
          { time: '04:00 PM', title: 'Mahabalipuram Shore Temple & 5 Rathas', description: 'Rock-cut monolith Pallava architecture by the ocean waves.', type: 'sightseeing' },
          { time: '07:30 PM', title: 'Beachside DJ Night & Campfire', description: 'Celebration night on the resort private sands.', type: 'stay' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Port Logistics & Return Campus Drop',
        nightStayCity: 'College Campus (Drop)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Evening Snack'],
        activities: [
          { time: '08:30 AM', title: 'Breakfast & Checkout', description: 'Check-out with beach photos.', type: 'meal' },
          { time: '10:30 AM', title: 'Industry Visit 3: Chennai Port Trust / Marine Logistics', description: 'Overview of high-capacity container logistics, ship docking tug operations, and customs automation.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch', description: 'South Indian meals.', type: 'meal' },
          { time: '03:30 PM', title: 'Return Journey to College', description: 'Music, games, safe campus arrival by 9:00 PM.', type: 'travel' }
        ]
      }
    ]
  },
  {
    id: 'bangalore-mysore-tech',
    title: 'Bangalore Silicon Corridor & Mysore Heritage',
    tagline: 'IT Mega-Campuses + Mysore Sandalwood Oil & Silk Weaving + Brindavan Gardens',
    routeTitle: 'Hosur · Electronic City · Mysore · Coorg / Srirangapatna',
    durationDays: 4,
    durationNights: 3,
    idealForDepartments: ['cse', 'eee', 'mech', 'mba', 'chem'],
    recommendedVehicleId: 'volvo-9600-multi',
    estimatedKm: 1250,
    basePricePerStudent: 5400,
    image: '/src/assets/images/coach_interior_ambient_1791960015168.jpg',
    freeStaffPasses: 2,
    targetIndustries: [
      {
        name: 'Infosys Global Education Centre & Tech Campus',
        type: 'Enterprise Cloud, AI & Software Architecture Hub',
        location: 'Hebbal, Mysore',
        learningFocus: 'Corporate datacenter infrastructure, agile software lifecycle, global disaster recovery, smart campus IoT.'
      },
      {
        name: 'Government Sandalwood Oil Factory & Karnataka Silk Weaving',
        type: 'Essential Oil Distillation & Jacquard Automated Looms',
        location: 'Mysore',
        learningFocus: 'Steam distillation towers for sandalwood oil, boiler pressure controls, automatic high-speed silk looms.'
      },
      {
        name: 'Coorg Coffee & Spices Curing Works',
        type: 'Agro-processing & Quality Grading',
        location: 'Madikeri, Coorg',
        learningFocus: 'Coffee pulping, hulling, optical color sorting, moisture stabilization, export packaging.'
      }
    ],
    tourHighlights: [
      'Visits to iconic IT tech parks and Mysore traditional distillation factories',
      'Grand evening illumination of Mysore Palace with 97,000 bulbs',
      'Musical Dancing Fountains at Brindavan Gardens (KRS Dam)',
      'Scenic coffee estate trek and Abbey Waterfalls in Coorg',
      'Interstate travel with smooth Volvo multi-axle air-suspension ride'
    ],
    accommodation: {
      hotelType: '3-Star Hotel in Mysore (2 Nights) + Coorg Nature Estate Stay (1 Night)',
      occupancy: '3 Sharing AC Rooms with separate blocks for boys and girls',
      amenities: ['Wi-Fi', 'Swimming Pool', '24/7 Security', 'Lush Gardens']
    },
    foodPlan: {
      description: 'Karnataka & Tamil Nadu Fusion Food Spread',
      specials: ['Mysore Masala Dosa with red chutney', 'Coorg Bamboo Shoot & Veg curries', 'Karnataka Chicken Sukka / Veg Pulao']
    },
    inclusions: [
      'Volvo 9600 Multi-Axle / Scania 49-Seater Luxury AC Coach',
      'Inter-state Karnataka Entry Permit & Border RTO taxes paid',
      '3 Nights AC Hotel / Resort accommodation',
      'All Meals: 4 Breakfasts, 4 Lunches, 3 Dinners',
      'Mysore Palace & Brindavan garden entry passes'
    ],
    exclusions: ['Camera permits inside Mysore Palace', 'Coorg river rafting (optional)'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Highway Cruise to Silicon City & Mysore',
        nightStayCity: 'Mysore',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '05:00 AM', title: 'College Departure', description: 'Early start through Krishnagiri / Hosur express corridor.', type: 'travel' },
          { time: '08:30 AM', title: 'Breakfast Stop', description: 'Mysore masala dosa and filter coffee.', type: 'meal' },
          { time: '11:00 AM', title: 'Industry Visit 1: Electronics City Tech Showcase', description: 'Overview of enterprise server farms and cloud computing architecture.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch at Bangalore Highway', description: 'Buffet lunch.', type: 'meal' },
          { time: '05:30 PM', title: 'Arrival at Mysore & Check-in', description: 'Freshen up at hotel.', type: 'stay' },
          { time: '07:30 PM', title: 'Mysore Palace Illumination', description: 'Marvel at 97,000 lights illuminating the royal facade.', type: 'sightseeing' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Sandalwood Distillation & Infosys Mysore',
        nightStayCity: 'Mysore',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '08:00 AM', title: 'Breakfast', description: 'Full breakfast buffet.', type: 'meal' },
          { time: '09:30 AM', title: 'Industry Visit 2: Govt Sandalwood Oil Factory', description: 'Distillation of Santalum album heartwood via steam coils, solvent extraction, and quality testing.', type: 'industry' },
          { time: '12:00 PM', title: 'Industry Visit 3: Karnataka Silk Industries Corp (KSIC)', description: 'Observation of motorized silk spinning, jacquard weaving, and pure gold zari border embroidery.', type: 'industry' },
          { time: '01:30 PM', title: 'Lunch in Mysore', description: 'Traditional Karnataka and South Indian meals.', type: 'meal' },
          { time: '04:30 PM', title: 'Brindavan Gardens & KRS Dam', description: 'Terraced gardens and synchronized musical fountain show.', type: 'sightseeing' },
          { time: '08:30 PM', title: 'Dinner at Hotel', description: 'Buffet dinner.', type: 'meal' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Coorg Coffee Hills & Abbey Waterfalls',
        nightStayCity: 'Coorg / Kushalnagar',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '07:30 AM', title: 'Drive to Coorg Hills', description: 'Ascending scenic Kodagu coffee plantations.', type: 'travel' },
          { time: '10:00 AM', title: 'Industry Visit 4: Coffee Curing & Roasting Plant', description: 'Study of Arabica and Robusta processing, wet fermentation tanks, drum roasters, and aroma sealers.', type: 'industry' },
          { time: '01:30 PM', title: 'Coorg Specialty Lunch', description: 'Local delicacies.', type: 'meal' },
          { time: '03:30 PM', title: 'Abbey Falls & Spice Plantation Walk', description: 'Sightseeing, cardamom & black pepper cultivation study.', type: 'sightseeing' },
          { time: '07:30 PM', title: 'Campfire & Student Cultural Night', description: 'DJ music under hill stars.', type: 'stay' }
        ]
      },
      {
        dayNumber: 4,
        title: 'Golden Temple Kushalnagar & Return Journey',
        nightStayCity: 'College Campus (Drop)',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        activities: [
          { time: '08:00 AM', title: 'Breakfast & Checkout', description: 'Breakfast at Coorg resort.', type: 'meal' },
          { time: '09:30 AM', title: 'Namdroling Golden Monastery', description: 'Tibetan cultural art, architecture and prayer wheel study.', type: 'sightseeing' },
          { time: '01:00 PM', title: 'Lunch', description: 'Multi-cuisine lunch.', type: 'meal' },
          { time: '03:00 PM', title: 'Return Express Journey', description: 'DJ coach beats, student video memories, safe midnight return to college.', type: 'travel' }
        ]
      }
    ]
  }
];

export const TN_VERIFIED_OPERATORS = [
  {
    id: 'op-1',
    name: 'Kallada / SRM IV Luxury Fleets',
    location: 'Chennai & Coimbatore',
    fleetSize: '65+ Luxury Coaches',
    types: ['BharatBenz 53 Seater', 'Volvo 9600 Multi-Axle', 'Scania Metrolink'],
    rating: 4.96,
    tripsCompleted: 1420,
    contactNumber: '+91 94441 89201',
    badges: ['Govt RTO Authorized', 'Double Certified Drivers', 'GPS Live Feed for Colleges'],
    features: ['High-Power DJ Acoustics', 'Ambient Laser Lighting', 'All-State Permits']
  },
  {
    id: 'op-2',
    name: 'Kongu Royal Travels & IV Lines',
    location: 'Coimbatore, Erode & Salem',
    fleetSize: '48 Luxury Coaches',
    types: ['BharatBenz 53 Seater', 'Ashok Leyland Executive', 'Force Urbania'],
    rating: 4.91,
    tripsCompleted: 980,
    contactNumber: '+91 98422 71043',
    badges: ['Nilgiris Ghat Certified', 'Zero Breakdown Record 2025-26', 'Anna University Empanelled'],
    features: ['Subwoofer DJ Setup', 'Emergency Response Cell', 'Clean Pushback Linens']
  },
  {
    id: 'op-3',
    name: 'Nellai Dakshin IV Transports',
    location: 'Madurai, Tirunelveli & Nagercoil',
    fleetSize: '35 Luxury Coaches',
    types: ['Volvo B11R Multi-Axle', 'BharatBenz 53 Seater', 'Force Urbania 17'],
    rating: 4.89,
    tripsCompleted: 730,
    contactNumber: '+91 97871 45520',
    badges: ['ISRO & KKNPP Route Specialists', 'Kerala Border Tax Pass', 'Police Clearance Verified'],
    features: ['Luggage Boot Large', 'USB Fast Chargers', 'Safety First Certified']
  },
  {
    id: 'op-4',
    name: 'Chola King IV Operators',
    location: 'Trichy & Thanjavur',
    fleetSize: '28 Coaches',
    types: ['Ashok Leyland 40 Seater', 'BharatBenz 53 Seater'],
    rating: 4.84,
    tripsCompleted: 610,
    contactNumber: '+91 94433 28911',
    badges: ['Delta & Mining Route Expert', 'Student Friendly Pricing', 'Verified Track Record'],
    features: ['Budget Friendly Per Km', 'Mic & PA System', 'Toll Free Helpline']
  }
];

export const TN_INDUSTRIES: IndustryProfile[] = [
  {
    id: 'isro-iprc',
    name: 'ISRO Propulsion Complex (IPRC)',
    city: 'Mahendragiri',
    district: 'Tirunelveli',
    departments: ['mech', 'eee', 'cse', 'civil', 'chem'],
    category: 'Aerospace & Defence Propulsion',
    description: 'Premier liquid and cryogenic rocket engine testing facility of India. High-altitude test stands for Gaganyaan & LVM3.',
    permissionProcess: 'Formal request letter on Principal letterhead to Public Relations Officer (PRO), IPRC Mahendragiri at least 4 weeks in advance with student ID proof list.',
    leadTimeWeeks: 4,
    entryFee: 'Free for Recognized Colleges (Strict ID Card check)',
    contactEmail: 'pro@iprc.gov.in'
  },
  {
    id: 'nlc-mine',
    name: 'NLC India Ltd (Neyveli Lignite Corporation)',
    city: 'Neyveli',
    district: 'Cuddalore',
    departments: ['mech', 'eee', 'civil', 'chem'],
    category: 'Mining & Thermal Energy',
    description: 'Largest lignite open-cast mechanized mine in Asia with massive bucket wheel excavators and thermal power generating units.',
    permissionProcess: 'Apply through NLC Public Relations & Training Dept at least 3 weeks in advance with institutional Bonafide certificate.',
    leadTimeWeeks: 3,
    entryFee: 'Nominal ₹50/student entry fee',
    contactEmail: 'training@nlcindia.in'
  },
  {
    id: 'bhel-trichy',
    name: 'BHEL (Bharat Heavy Electricals Ltd)',
    city: 'Trichy',
    district: 'Tiruchirappalli',
    departments: ['mech', 'eee', 'civil', 'mba'],
    category: 'Heavy Engineering & Energy Boilers',
    description: 'Premier high-pressure boiler manufacturing plant with automated submerged arc welding, tube bending, and quality NDT laboratories.',
    permissionProcess: 'Address to DGM / HRD (Human Resource Development), BHEL Trichy through College Placement/IV cell with list of students and faculty escorts.',
    leadTimeWeeks: 3,
    entryFee: 'Free with institutional clearance',
    contactEmail: 'hrd@bheltry.co.in'
  },
  {
    id: 'icf-chennai',
    name: 'Integral Coach Factory (ICF)',
    city: 'Chennai',
    district: 'Chennai',
    departments: ['mech', 'eee', 'cse', 'mba'],
    category: 'Railway & Rolling Stock Manufacturing',
    description: 'Birthplace of Vande Bharat trainsets. Manufactures stainless steel passenger carriages and electrical multiple units (EMU).',
    permissionProcess: 'Apply online or via PRO office, ICF Perambur, Chennai. College recommendation letter with HOD signature required.',
    leadTimeWeeks: 3,
    entryFee: '₹75/student for Rail Museum & Factory Access',
    contactEmail: 'pro@icf.gov.in'
  },
  {
    id: 'doddabetta-tea',
    name: 'Doddabetta Tea Factory & Tea Museum',
    city: 'Ooty',
    district: 'The Nilgiris',
    departments: ['chem', 'mech', 'mba', 'cse'],
    category: 'Food Processing & Agricultural Tech',
    description: 'High-altitude mechanized tea processing facility demonstrating continuous withering, rotorvane rolling, CTC cutting, and grading.',
    permissionProcess: 'Direct institutional slot booking through IV tour coordinator or walk-in with college permission slip.',
    leadTimeWeeks: 1,
    entryFee: '₹30/student (Includes fresh hot tea tasting & museum)',
    contactEmail: 'visits@doddabettatea.com'
  },
  {
    id: 'kudankulam-npcil',
    name: 'Kudankulam Nuclear Power Plant (NPCIL) Science Expo',
    city: 'Kudankulam',
    district: 'Tirunelveli',
    departments: ['eee', 'mech', 'chem', 'civil', 'cse'],
    category: 'Nuclear Physics & Clean Baseload Energy',
    description: 'India’s largest nuclear power station with 1000 MWe Russian VVER reactors. Comprehensive science and nuclear safety center.',
    permissionProcess: 'Application through Site Director / Public Relations Office, NPCIL Kudankulam. Police verification/Student bonafide list mandatory.',
    leadTimeWeeks: 4,
    entryFee: 'Free (Strict security protocols)',
    contactEmail: 'pr-kknpp@npcil.co.in'
  },
  {
    id: 'codissia-coimbatore',
    name: 'CODISSIA Industrial Foundry & Precision Engineering Cluster',
    city: 'Coimbatore',
    district: 'Coimbatore',
    departments: ['mech', 'eee', 'mba'],
    category: 'Pumps, Motors & Precision Foundry',
    description: 'Over 200 member MSME foundries and CNC precision engineering units manufacturing 50% of India’s motors and water pumps.',
    permissionProcess: 'Liaison through CODISSIA Student Cell / Coimbatore District Small Industries Association.',
    leadTimeWeeks: 2,
    entryFee: 'Free / Contribution based',
    contactEmail: 'iv@codissia.com'
  },
  {
    id: 'tnpl-karur',
    name: 'Tamil Nadu Newsprint and Papers Limited (TNPL)',
    city: 'Kagithapuram, Karur',
    district: 'Karur',
    departments: ['chem', 'mech', 'civil', 'eee'],
    category: 'Pulp, Paper & Bio-resource Engineering',
    description: 'World leader in bagasse-based (sugarcane residue) eco-friendly paper manufacturing with modern chemical recovery boilers.',
    permissionProcess: 'Submit official letter to General Manager (HR & Training), TNPL Kagithapuram.',
    leadTimeWeeks: 3,
    entryFee: 'Free for students with advance gate pass',
    contactEmail: 'training@tnpl.co.in'
  }
];

export const COLLEGE_FORMALITIES_TEMPLATES = {
  industryLetter: (collegeName: string, dept: string, destIndustry: string, dates: string, count: number, faculty: string) => `
OFFICIAL INDUSTRIAL VISIT REQUEST LETTER
(To be printed on College Letterhead)

To,
The Public Relations Officer / HR Manager,
${destIndustry || 'The Managing Director, Industrial Plant'},
Tamil Nadu, India.

Subject: Request for Permission for Industrial Visit for ${count} Students of ${dept || 'Engineering'} - Reg.

Respected Sir/Madam,

Greetings from ${collegeName || 'Our Engineering College & Research Institute'}.

Our institution is an approved center affiliated with the University and dedicated to producing industry-ready technical graduates. As part of our curriculum prescribed by AICTE and the University, our students are mandated to undergo an Industrial Visit (IV) to understand real-world industrial systems, automation, manufacturing processes, and safety protocols.

In this regard, we earnestly request your esteemed organization to grant permission for an educational industrial visit on ${dates || 'Upcoming Academic Dates'}.

Batch Details:
1. Department / Discipline: ${dept || 'Mechanical / Computer Science / Electrical Engineering'}
2. Number of Students: ${count || 45} (Boys & Girls)
3. Faculty Escorts: ${faculty || '2 Faculty Members (including female escort)'}
4. Proposed Timing: 10:00 AM to 01:00 PM

We assure you that our students will strictly adhere to all safety instructions, PPE mandates, photography restrictions, and plant regulations of your facility. We take full responsibility for the decorum of our delegation.

Kindly grant permission and inform us of any formal gate-pass procedures. Thanking you in anticipation of your kind cooperation.

Yours sincerely,

(Head of the Department)                    (Principal / Dean)
Seal of the Department                      College Institutional Seal
  `,

  parentConsentLetter: (collegeName: string, studentName: string, destination: string, dates: string) => `
PARENT / GUARDIAN CONSENT & UNDERTAKING FORM
(பெற்றோர் / பாதுகாவலர் சம்மதக் கடிதம்)

To,
The Principal / Head of Department,
${collegeName || 'The College of Engineering & Technology'},
Tamil Nadu.

Respected Sir/Madam,

I, __________________________________ (Parent/Guardian Name), father/mother of __________________________________ (Student Name - Reg No: _________________), studying in Year/Semester ________ of the Department of ______________________, hereby give my voluntary written consent for my son/daughter to participate in the Official College Industrial Visit (IV) to ${destination || 'Selected Industrial Circuit'} scheduled from ${dates || 'Scheduled Tour Dates'}.

UNDERTAKING / உறுதிமொழி:
1. I have been informed of the travel itinerary, bus transport details (Authorized Tour Coach with GPS & Dual Certified Drivers), accommodation, faculty escorts, and emergency contacts.
2. My ward has been instructed to strictly follow all discipline rules of the College, Department Faculty Escorts, and Industrial Visit Safety norms.
3. My ward will not engage in swimming in unauthorized water bodies, venturing out after night curfew, or breaking campus conduct.
4. Medical disclosure (if any): ______________________________________________________.

Parent / Guardian Signature: __________________________________
Parent Contact Mobile: __________________________________
Alternative Emergency Contact: __________________________________
Date: _______________  Place: ______________________
  `,

  policeIntimationLetter: (collegeName: string, busRegNo: string, driverContact: string, tourRoute: string, dates: string, facultyName: string, facultyPhone: string) => `
POLICE INTIMATION LETTER FOR EDUCATIONAL TOUR / INDUSTRIAL VISIT
(Copy to Local Police Station & En-route Jurisdiction)

To,
The Inspector of Police,
Law & Order Police Station,
Tamil Nadu Police Department.

Subject: Intimation of Official College Industrial Visit Tour – Safe Travel Notice – Reg.

Respected Sir,

This is to formally intimate that an educational Industrial Visit (IV) has been organized by ${collegeName || 'Our College'} for our final/pre-final year engineering students.

The tour details are furnished below for your kind notice and record:
1. Tour Dates: ${dates || 'Dates of Tour'}
2. Route of Travel: ${tourRoute || 'Campus -> Industrial Corridor -> Hill Circuit -> Return'}
3. Number of Students: 45 Students + 2 Faculty Escorts
4. Tourist Bus Vehicle No: ${busRegNo || 'TN-XX-XXXX (BharatBenz Luxury Tourist Coach)'}
5. Driver Details: 2 Verified Drivers (Contact: ${driverContact || '+91 98XXX XXXXX'})
6. Chief Faculty Escort: ${facultyName || 'Prof. Dr. Coordinator'} (Mobile: ${facultyPhone || '+91 94XXX XXXXX'})
7. Vehicle GPS Tracking Link is actively enabled and monitored by College Control Room.

This letter is submitted as per Government and Directorate of Technical Education (DOTE) safety guidelines for group student mobility.

Thanking you,

Yours faithfully,

(College Principal / Administrative Officer)
With Official Phone & Stamp
  `
};
