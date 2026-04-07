import passengerImg from '../assets/passenger1.jpeg';
import homeImg      from '../assets/home-elevator.png';
import capsuleImg   from '../assets/capsule-elevator.png';
import freightImg   from '../assets/freight-elevator.png';
import projHospital from '../assets/proj-hospital.png';
import projMall     from '../assets/proj-mall.png';
import projOffice   from '../assets/proj-office.png';
import projVilla    from '../assets/proj-villa.png';

/**
 * Each lift entry uses its URL slug as the key.
 * Slugs must match the route pattern: /solutions/:id
 * e.g. "Passenger Lifts" → "passenger-lifts"
 */
const liftsData = {
  'passenger-lifts': {
    title: 'Passenger Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [passengerImg, projOffice, projMall, projHospital],
    tagline: 'Precision mobility for every building, every occupant.',
    heroImg: passengerImg,
    summary:
      'North Star passenger lifts are engineered for high-frequency traffic in commercial and multi-story residential buildings. Combining robust mechanics with premium cabin aesthetics, they deliver reliable, smooth, and safe vertical transportation.',
    features: [
      { icon: 'Zap', title: 'High-Speed Drive', desc: 'Variable-frequency drive for smooth, energy-efficient ascent and descent up to 1.5 m/s.' },
      { icon: 'ShieldCheck', title: 'Multi-Level Safety', desc: 'ARD (Automatic Rescue Device), over-speed governor, and bi-directional safety gear as standard.' },
      { icon: 'Users', title: 'Flexible Capacity', desc: 'Carry loads from 480 kg (6 persons) to 2000 kg (26 persons) with custom cab sizes.' },
      { icon: 'Palette', title: 'Premium Cabins', desc: 'Stainless steel, glass, and wood-finish interiors with integrated LED lighting.' },
      { icon: 'Accessibility', title: 'Accessibility Ready', desc: 'Meets BIS & EN 81-70 standards for persons with reduced mobility.' },
      { icon: 'Wifi', title: 'Remote Monitoring', desc: 'IoT-enabled controller for real-time diagnostics and predictive maintenance alerts.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '480 kg – 2000 kg' },
      { param: 'Rated Speed',         value: '0.5 m/s – 1.5 m/s' },
      { param: 'Max. Travel Height',  value: 'Up to 60 m' },
      { param: 'Door Type',           value: 'Centre / Side opening, automatic' },
      { param: 'Drive System',        value: 'Geared / Gearless VVVF' },
      { param: 'Control System',      value: 'Microprocessor-based, duplex/triplex group control' },
      { param: 'Safety Standard',     value: 'BIS, EN 81-1, NBC 2016' },
      { param: 'Power Supply',        value: '415 V, 3-Phase, 50 Hz' },
    ],
    applications: ['Corporate Towers', 'Shopping Malls', 'Residential Apartments', 'Hotels', 'Government Buildings'],
  },

  'machine-room-less-mrl-lifts': {
    title: 'Machine Room Less (MRL) Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [passengerImg, projOffice, projMall],
    tagline: 'Space-smart engineering — no machine room required.',
    heroImg: passengerImg,
    summary:
      'MRL lifts eliminate the need for a dedicated machine room by housing the compact drive unit within the hoistway. Ideal for modern buildings where every square foot counts.',
    features: [
      { icon: 'Maximize', title: 'Compact Design', desc: 'Overhead drive unit housed inside the shaft — saves 20–30 sq.ft. per floor.' },
      { icon: 'Leaf', title: 'Energy Efficient', desc: 'Permanent magnet motor reduces energy consumption by up to 40% vs. geared systems.' },
      { icon: 'VolumeX', title: 'Ultra-Quiet', desc: 'Gearless drive and vibration-dampening suspension for near-silent operation.' },
      { icon: 'Settings', title: 'Low Maintenance', desc: 'Oil-free gearless machine with fewer moving parts means lower maintenance costs.' },
      { icon: 'Building2', title: 'Retrofit Compatible', desc: 'Can replace existing geared systems in existing buildings without structural changes.' },
      { icon: 'ShieldCheck', title: 'Full Safety Suite', desc: 'ARD, governor, buffers, and door interlock as standard.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '320 kg – 1600 kg' },
      { param: 'Rated Speed',         value: '0.5 m/s – 2.5 m/s' },
      { param: 'Max. Travel Height',  value: 'Up to 75 m' },
      { param: 'Machine Type',        value: 'Gearless permanent magnet' },
      { param: 'Drive System',        value: 'VVVF (Variable Voltage Variable Frequency)' },
      { param: 'Pit Depth',           value: 'From 1200 mm (low-pit option available)' },
      { param: 'Overhead Clearance',  value: 'From 3500 mm' },
      { param: 'Safety Standard',     value: 'EN 81-20, BIS' },
    ],
    applications: ['IT Parks', 'Mid-Rise Residential', 'Commercial Complexes', 'Renovations'],
  },

  'home-duplex-lifts': {
    title: 'Home / Duplex Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [homeImg, projVilla],
    tagline: 'Luxury vertical mobility crafted for private residences.',
    heroImg: homeImg,
    summary:
      'Designed for bungalows, duplex homes, and private villas, our home lifts blend seamlessly into interior design while delivering safe and graceful movement across all floors.',
    features: [
      { icon: 'Home', title: 'Compact Footprint', desc: 'Fits in existing stairwells or small floor cut-outs — as little as 900×900 mm.' },
      { icon: 'VolumeX', title: 'Silent Operation', desc: 'Hydraulic or belt-drive system for whisper-quiet performance.' },
      { icon: 'Palette', title: 'Custom Interiors', desc: 'Bespoke cabin finishes: glass walls, wooden panels, Italian marble, mood lighting.' },
      { icon: 'Zap', title: 'ARD Backup', desc: 'Automatic Rescue Device ensures safe descent during power failure.' },
      { icon: 'Accessibility', title: 'Elderly & Mobility Friendly', desc: 'Flush landing, handrails, and slow-speed mode for assisted users.' },
      { icon: 'ShieldAlert', title: 'Child Safety', desc: 'Pinch-point protection, door sensors, and key-lock control.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '2–4 persons (200 – 400 kg)' },
      { param: 'Rated Speed',         value: '0.15 m/s – 0.5 m/s' },
      { param: 'Max. Floors',         value: 'Up to G+5' },
      { param: 'Drive Type',          value: 'Hydraulic / Belt (oil-free)' },
      { param: 'Cab Size',            value: 'From 900×900 mm (custom)' },
      { param: 'Door Type',           value: 'Manual / Auto swing or sliding' },
      { param: 'Power Supply',        value: '220 V, Single phase' },
      { param: 'Safety Standard',     value: 'BIS SP 72, EN 81-41' },
    ],
    applications: ['Private Bungalows', 'Duplex Apartments', 'Luxury Villas', 'Farmhouses'],
  },

  'goods-freight-lifts': {
    title: 'Goods / Freight Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [freightImg, projOffice],
    tagline: 'Industrial-grade load handling built for heavy-duty operations.',
    heroImg: freightImg,
    summary:
      'Our freight lifts are built to withstand the rigours of warehouses, factories, and retail back-end operations. Heavy-duty structural frames, reinforced platforms, and high-load motors deliver dependable performance.',
    features: [
      { icon: 'Dumbbell', title: 'High Load Capacity', desc: 'Handle loads from 1000 kg to 10,000 kg with reinforced sling and frame.' },
      { icon: 'DoorOpen', title: 'Wide Openings', desc: 'Bi-parting or single-slide steel doors up to 3000 mm wide for pallet access.' },
      { icon: 'LayoutDashboard', title: 'Heavy-Duty Platform', desc: 'Chequer-plate steel platform with anti-skid surface and forklift ramp compatible.' },
      { icon: 'Cog', title: 'Robust Drive', desc: 'Geared traction or hydraulic drive suited for continuous industrial cycles.' },
      { icon: 'Scale', title: 'Overload Protection', desc: 'Load cell-based overload sensor prevents operation at unsafe loads.' },
      { icon: 'Wifi', title: 'Remote Monitoring', desc: 'Real-time load and cycle tracking for maintenance planning.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '1000 kg – 10,000 kg' },
      { param: 'Rated Speed',         value: '0.25 m/s – 0.5 m/s' },
      { param: 'Platform Size',       value: 'Custom (up to 4000×3000 mm)' },
      { param: 'Drive System',        value: 'Geared traction / Hydraulic' },
      { param: 'Door Type',           value: 'Bi-parting steel / Roller shutter' },
      { param: 'Max. Travel Height',  value: 'Up to 30 m' },
      { param: 'Safety Standard',     value: 'BIS IS 3534, factory act compliance' },
      { param: 'Power Supply',        value: '415 V, 3-Phase, 50 Hz' },
    ],
    applications: ['Warehouses', 'Factories', 'Retail Stockrooms', 'Cold Storage', 'Multi-level Parking'],
  },

  'hospital-stretcher-elevators': {
    title: 'Hospital / Stretcher Elevators',
    videoId: 'rKp4pe92ljg',
    gallery: [passengerImg, projHospital],
    tagline: 'Engineered for critical care environments.',
    heroImg: passengerImg,
    summary:
      'Designed to the highest hygiene and safety standards, our hospital lifts facilitate the smooth transfer of patients on stretchers and hospital beds, supported by infection-control finishes and priority call systems.',
    features: [
      { icon: 'Activity', title: 'Stretcher Ready', desc: 'Cab dimensions accommodate standard stretchers (2100×700 mm) with full-width opening doors.' },
      { icon: 'Droplets', title: 'Hygienic Interiors', desc: 'Antibacterial powder-coated walls, seamless flooring, and easy-clean stainless finishes.' },
      { icon: 'BellRing', title: 'Priority Call Mode', desc: 'Emergency hospital priority overrides all other calls for rapid patient transfer.' },
      { icon: 'Lightbulb', title: 'Infection Control Lighting', desc: 'UV-C sanitisation option for cab sterilisation between runs.' },
      { icon: 'Zap', title: 'Power Backup', desc: 'UPS and ARD ensure uninterrupted operation during power cuts.' },
      { icon: 'Accessibility', title: 'Accessibility Compliant', desc: 'Braille panels, audio announcements, and flush landings as standard.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '1000 kg – 2500 kg' },
      { param: 'Rated Speed',         value: '0.5 m/s – 1.0 m/s' },
      { param: 'Cab Size (min.)',      value: '2100 × 1400 mm' },
      { param: 'Door Width',          value: '1100 mm – 1300 mm (centre-opening)' },
      { param: 'Drive System',        value: 'Gearless VVVF' },
      { param: 'Power Backup',        value: 'UPS / Generator auto-transfer' },
      { param: 'Safety Standard',     value: 'EN 81-76, NABH, BIS' },
      { param: 'Hygiene Rating',       value: 'Medical-grade antibacterial surfaces' },
    ],
    applications: ['Hospitals', 'Clinics', 'Nursing Homes', 'Diagnostic Centres', 'Medical Colleges'],
  },

  'hydraulic-lifts': {
    title: 'Hydraulic Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [homeImg, projVilla, projMall],
    tagline: 'Powerful, quiet, and pit-friendly for low-rise buildings.',
    heroImg: homeImg,
    summary:
      'Hydraulic lifts use a fluid-driven piston to raise and lower the cab, making them ideal for buildings with low headroom or pit constraints. They offer smooth, gentle rides without the need for overhead machinery.',
    features: [
      { icon: 'Droplet', title: 'Fluid Power Drive', desc: 'Oil-hydraulic cylinder delivers smooth, vibration-free movement at all loads.' },
      { icon: 'Minimize', title: 'Low Pit & Headroom', desc: 'Operates with as little as 600 mm pit and no overhead machinery space.' },
      { icon: 'VolumeX', title: 'Quiet Operation', desc: 'Submerged hydraulic pump produces minimal noise — ideal for residential use.' },
      { icon: 'Leaf', title: 'Eco-Friendly Fluid', desc: 'Biodegradable hydraulic oil options available for green building certification.' },
      { icon: 'ArrowUpToLine', title: 'High Load Option', desc: 'Available up to 5000 kg — suitable for cars and heavy goods.' },
      { icon: 'ShieldCheck', title: 'Fail-Safe Descent', desc: 'Rupture valve prevents uncontrolled descent if a hydraulic line fails.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '250 kg – 5000 kg' },
      { param: 'Rated Speed',         value: '0.15 m/s – 0.63 m/s' },
      { param: 'Max. Travel Height',  value: 'Up to 20 m' },
      { param: 'Drive Type',          value: 'Direct-acting / Roped hydraulic' },
      { param: 'Pit Depth',           value: 'From 600 mm' },
      { param: 'Overhead Required',   value: 'Standard ceiling height only' },
      { param: 'Safety Standard',     value: 'EN 81-2, BIS' },
      { param: 'Power Supply',        value: '415 V, 3-Phase, 50 Hz' },
    ],
    applications: ['Low-Rise Residential', 'Heritage Buildings', 'Showrooms', 'Car Lifts', 'Retail Stores'],
  },

  'service-lifts': {
    title: 'Service Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [freightImg, projOffice, projHospital],
    tagline: 'Compact and efficient goods movement within buildings.',
    heroImg: freightImg,
    summary:
      'Also known as dumbwaiters or service elevators, these compact lifts are designed to transport small goods, food, documents, and laundry between floors without occupying valuable passenger elevator space.',
    features: [
      { icon: 'Utensils', title: 'Food & Beverage Ready', desc: 'Stainless interior rated for food transport in restaurants, hotels, and canteens.' },
      { icon: 'Box', title: 'Compact Footprint', desc: 'Shaft as small as 600×600 mm — fits in existing wall cavities.' },
      { icon: 'Zap', title: 'Fast Cycle Time', desc: 'High-speed motor for quick floor-to-floor delivery with auto-door opening.' },
      { icon: 'Lock', title: 'Interlock Safety', desc: 'Door interlock prevents operation unless all landing doors are fully closed.' },
      { icon: 'Droplets', title: 'Easy to Clean', desc: 'Seamless stainless cab with removable shelf trays for quick sanitation.' },
      { icon: 'Settings', title: 'Simple Controls', desc: 'Single-button call stations at each floor, no key required.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '50 kg – 500 kg' },
      { param: 'Rated Speed',         value: '0.25 m/s – 0.5 m/s' },
      { param: 'Cab Size',            value: '600×600 mm to 1200×900 mm' },
      { param: 'Drive Type',          value: 'Traction / Hydraulic' },
      { param: 'Door Type',           value: 'Automatic bi-parting or swing' },
      { param: 'Max. Floors',         value: 'Up to G+10' },
      { param: 'Safety Standard',     value: 'BIS SP 72, door interlock standard' },
      { param: 'Power Supply',        value: '220 V / 415 V' },
    ],
    applications: ['Restaurants & Hotels', 'Hospitals', 'Libraries', 'Office Buildings', 'Laundry & Housekeeping'],
  },

  'car-automobile-elevators': {
    title: 'Car / Automobile Elevators',
    videoId: 'rKp4pe92ljg',
    gallery: [freightImg, projMall, projOffice],
    tagline: 'Engineered for seamless vehicle mobility across levels.',
    heroImg: freightImg,
    summary:
      'North Star car lifts enable vehicles to move between basement, ground, and upper parking levels with maximum safety and efficiency. Heavy-duty platforms and wide-opening doors accommodate all standard car sizes.',
    features: [
      { icon: 'Car', title: 'Full Vehicle Platform', desc: 'Platform accommodates cars up to 5000 mm length and 2500 kg weight.' },
      { icon: 'ShieldCheck', title: 'Drive-On Safety', desc: 'Bumper guards, anti-roll chocks, and flush ramp entry for safe loading.' },
      { icon: 'Settings', title: 'Hydraulic Precision', desc: 'Slow-speed hydraulic drive for gentle, level landing at each floor.' },
      { icon: 'DoorOpen', title: 'Large Clear Opening', desc: 'Doors up to 2600 mm wide × 2100 mm tall for SUVs and vans.' },
      { icon: 'Building2', title: 'Pit-Friendly Design', desc: 'Ramp approach with minimal pit depth reduces civil construction costs.' },
      { icon: 'Wifi', title: 'Traffic Management', desc: 'Integrated call panel and intercom system for basement parking management.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '2000 kg – 5000 kg' },
      { param: 'Rated Speed',         value: '0.15 m/s – 0.3 m/s' },
      { param: 'Platform Size',       value: 'Up to 5200 × 2400 mm' },
      { param: 'Door Height',         value: 'Min. 2100 mm clear' },
      { param: 'Drive Type',          value: 'Hydraulic / Roped hydraulic' },
      { param: 'Max. Travel Height',  value: 'Up to 15 m' },
      { param: 'Safety Standard',     value: 'BIS, factory act compliance' },
      { param: 'Floor Levelling',     value: '± 5 mm precision landing' },
    ],
    applications: ['Basement Parking', 'Multi-storey Car Parks', 'Auto Showrooms', 'Dealerships', 'Residential Towers'],
  },

  'capsule-lifts': {
    title: 'Capsule Lifts',
    videoId: 'rKp4pe92ljg',
    gallery: [capsuleImg, projMall, projOffice],
    tagline: 'Architectural glass lifts that make vertical movement a visual experience.',
    heroImg: capsuleImg,
    summary:
      'Capsule lifts are panoramic glass elevators that serve as a statement architectural feature. Designed for malls, hotels, and landmark buildings, they combine engineering precision with stunning visual impact.',
    features: [
      { icon: 'Eye', title: 'Panoramic Glass Cab', desc: '360° curved or flat tempered glass panels for unobstructed views.' },
      { icon: 'Lightbulb', title: 'Ambient Lighting', desc: 'Integrated LED halo or downlight systems to enhance visual drama.' },
      { icon: 'VolumeX', title: 'Smooth & Silent', desc: 'Gearless drive with vibration isolation for a premium ride experience.' },
      { icon: 'Building2', title: 'Structural Glass Shaft', desc: 'Optional glass hoistway structure — visible from all floors.' },
      { icon: 'Palette', title: 'Bespoke Design', desc: 'Custom pod shapes, finishes, and branding integration available.' },
      { icon: 'Zap', title: 'High Speed Available', desc: 'Available up to 2.5 m/s for high-rise atrium installations.' },
    ],
    specs: [
      { param: 'Rated Capacity',      value: '320 kg – 1000 kg' },
      { param: 'Rated Speed',         value: '0.5 m/s – 2.5 m/s' },
      { param: 'Glass Type',          value: '12 mm toughened / laminated safety glass' },
      { param: 'Cab Shape',           value: 'Circular, oval, or custom' },
      { param: 'Drive System',        value: 'Gearless VVVF traction' },
      { param: 'Max. Travel Height',  value: 'Up to 50 m' },
      { param: 'Safety Standard',     value: 'EN 81-20, BIS, glass EN 12600' },
      { param: 'Certification',        value: 'LEED & IGBC contribution' },
    ],
    applications: ['Shopping Malls', 'Luxury Hotels', 'Corporate Atriums', 'Airports', 'Landmark Buildings'],
  },

  'installation': {
    title: 'New Installations',
    videoId: 'rKp4pe92ljg',
    gallery: [projOffice, projMall, projHospital, projVilla],
    tagline: 'Precision engineering from blueprint to handover.',
    heroImg: passengerImg,
    summary: 'Our installation process is defined by strict adherence to safety codes, exact mechanical alignment, and seamless project management to deliver elevators that operate flawlessly for decades.',
    features: [
      { icon: 'Ruler', title: 'Site Assessment', desc: 'Detailed shaft measurement and civil work verification before manufacturing begins.' },
      { icon: 'ShieldCheck', title: 'Code Compliance', desc: 'Full adherence to Indian Standards (IS), NBC 2016, and EN 81 safety regulations.' },
      { icon: 'Users', title: 'Certified Engineers', desc: 'Installation executed exclusively by North Star certified, factory-trained technicians.' },
      { icon: 'Clock', title: 'On-Time Delivery', desc: 'Rigid project timelines to ensure handover aligns precisely with your building schedule.' },
      { icon: 'Activity', title: 'Laser Alignment', desc: 'Laser-guided precision for guide rail alignment ensuring a vibration-free ride.' },
      { icon: 'CheckCircle', title: 'Multi-Point QA', desc: 'Comprehensive 50-point safety and performance test before final handover.' }
    ],
    specs: [
      { param: 'Standard Timeline', value: '4 to 8 weeks depending on complexity' },
      { param: 'Civil Requirement', value: 'Plumb shaft with proper scaffolding' },
      { param: 'Power Requirement', value: 'Temporary 3-Phase power for hoist' },
      { param: 'Testing Procedures', value: 'Dynamic load testing, safety gear drop test' },
      { param: 'Handover Package', value: 'O&M manuals, wiring diagrams, warranty certificates' }
    ],
    applications: ['Under-Construction Buildings', 'High-Rise Towers', 'Commercial Complexes', 'Private Villas'],
  },

  'maintenance': {
    title: 'Comprehensive Maintenance',
    videoId: 'rKp4pe92ljg',
    gallery: [projOffice, projMall],
    tagline: 'Proactive care to guarantee zero-downtime performance.',
    heroImg: passengerImg,
    summary: 'Our Annual Maintenance Contracts (AMC) go beyond mere troubleshooting. We focus on preventive care, regular lubrication, and proactive parts replacement to maximize your elevator\'s lifespan.',
    features: [
      { icon: 'Tool', title: 'Preventive Care', desc: 'Monthly scheduled visits to inspect, clean, and lubricate mechanical and electrical components.' },
      { icon: 'Clock', title: '24/7 Support', desc: 'Round-the-clock emergency response teams available for rapid breakdown resolution.' },
      { icon: 'ShieldAlert', title: 'Safety Audits', desc: 'Bi-annual comprehensive safety testing of brakes, governors, and ARD systems.' },
      { icon: 'Settings', title: 'Genuine Parts', desc: 'Guaranteed use of OEM (Original Equipment Manufacturer) parts for all replacements.' },
      { icon: 'FileText', title: 'Transparent Reporting', desc: 'Detailed digital inspection reports provided after every service visit.' },
      { icon: 'Wifi', title: 'Predictive Analytics', desc: 'Optional IoT integration to predict failures before they cause downtime.' }
    ],
    specs: [
      { param: 'Contract Types', value: 'Comprehensive AMC / Non-Comprehensive AMC' },
      { param: 'Response Time', value: 'Under 2 hours for emergencies (Metro areas)' },
      { param: 'Covered Components', value: 'Controller, motor, ropes, door drives, sensors' },
      { param: 'Routine Frequency', value: 'Monthly or Bi-monthly based on usage' },
      { param: 'Support Channels', value: 'Dedicated hotline, WhatsApp, and Email' }
    ],
    applications: ['Residential Societies', 'Corporate Offices', 'Hospitals', 'Hotels'],
  },

  'repair-overhaul': {
    title: 'Repair & Overhaul',
    videoId: 'rKp4pe92ljg',
    gallery: [freightImg, projHospital],
    tagline: 'Rapid diagnostics and restorative engineering.',
    heroImg: freightImg,
    summary: 'When critical components fail or performance degrades, our overhaul team steps in. We expertly diagnose complex electro-mechanical issues and execute major repairs with minimal operational disruption.',
    features: [
      { icon: 'Activity', title: 'Deep Diagnostics', desc: 'Advanced vibration and electrical analysis to identify the root cause of systemic issues.' },
      { icon: 'Cog', title: 'Mechanical Overhauls', desc: 'Machine bearing replacement, sheave re-grooving, and gear oil flushing.' },
      { icon: 'Zap', title: 'Drive & Controller Repair', desc: 'Component-level repair of variable-frequency drives and microprocessor boards.' },
      { icon: 'Link', title: 'Rope Replacement', desc: 'Complete hoisting rope and compensation chain replacement using high-tensile steel.' },
      { icon: 'DoorOpen', title: 'Door Mechanism Fixes', desc: 'Alignment and replacement of rollers, headers, and highly-cycled door operators.' },
      { icon: 'Clock', title: 'Minimal Disruption', desc: 'High-impact repairs scheduled during off-peak hours to minimize tenant inconvenience.' }
    ],
    specs: [
      { param: 'Typical Scope', value: 'Motor rewinding, sheave replacement, rope replacement' },
      { param: 'Brands Serviced', value: 'North Star and all major third-party OEM brands' },
      { param: 'Downtime Estimate', value: '1 to 5 days depending on component lead times' },
      { param: 'Warranty', value: '6 to 12 months on all overhauled components' },
      { param: 'Safety Checks', value: 'Full load testing required after major mechanical repairs' }
    ],
    applications: ['Aging Buildings', 'High-Traffic Public Facilities', 'Industrial Plants'],
  },

  'modernization': {
    title: 'System Modernization',
    videoId: 'rKp4pe92ljg',
    gallery: [capsuleImg, passengerImg, projOffice],
    tagline: 'Breathe new life into aging vertical transport systems.',
    heroImg: capsuleImg,
    summary: 'Elevator modernization provides the benefits of a brand-new lift at a fraction of the cost. Upgrade your outdated relay logic controllers, aging aesthetics, and inefficient motors while retaining the existing structural framework.',
    features: [
      { icon: 'Cpu', title: 'Controller Upgrades', desc: 'Replace obsolete relay panels with smart, energy-efficient microprocessor controllers.' },
      { icon: 'Leaf', title: 'Energy Efficiency', desc: 'Install VVVF drives to reduce power consumption by up to 40% and ensure smoother rides.' },
      { icon: 'Palette', title: 'Cabin Makeovers', desc: 'Redesign interiors with modern steel finishes, LED lighting, and touch-sensitive COP panels.' },
      { icon: 'ShieldCheck', title: 'Safety Compliance', desc: 'Bring decades-old elevators up to current safety codes with modern infra-red door curtains and ARDs.' },
      { icon: 'TrendingUp', title: 'Enhanced Performance', desc: 'Reduce waiting times and improve leveling accuracy with advanced group dispatch logic.' },
      { icon: 'Maximize', title: 'Cost-Effective', desc: 'Save up to 60% compared to a total replacement by retaining guide rails and strong mechanical parts.' }
    ],
    specs: [
      { param: 'Scope of Work', value: 'Controller, Drive, Wiring, Cabin Aesthetics, Fixtures' },
      { param: 'Retained Parts', value: 'Guide rails, counterweights, heavy structural brackets' },
      { param: 'Energy Savings', value: 'Up to 40% reduction in power consumption' },
      { param: 'Execution Time', value: '2 to 4 weeks per elevator' },
      { param: 'ROI', value: 'Significantly increases property value and lowers repair costs' }
    ],
    applications: ['Buildings over 15 years old', 'Heritage Structures', 'Commercial Upgrades', 'Hotels'],
  }
};

export default liftsData;
