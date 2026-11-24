import { Project, ServiceTier, CaseStudy } from '../types';

export const SHOWREEL_MAIN_VIDEO = {
  title: "INTREPID 2026 CINEMATIC DIRECTORS REEL",
  tagline: "6K HDR Mastercut • Commercials, Brand Films & Growth Engines",
  videoUrl: "https://www.youtube.com/watch?v=OxEM_MEqBwM",
  posterUrl: "https://img.youtube.com/vi/OxEM_MEqBwM/maxresdefault.jpg",
  aspectRatio: "2.39:1 Anamorphic",
  resolution: "6K Cinema DCI",
  fps: "24.000 FPS RAW",
  soundFormat: "Dolby Atmos 7.1",
  duration: "02:14"
};

export const PROJECTS: Project[] = [
  {
    id: "aether-dynamics",
    title: "The Architecture of Tomorrow",
    client: "Aether Dynamics (Autonomous Tech)",
    category: "commercial",
    tag: "Flagship 4K Commercial",
    duration: "01:30",
    aspectRatio: "2.39:1",
    resolution: "6K RED Cinema",
    year: "2026",
    metrics: "+420%",
    metricLabel: "Investor Pipeline Velocity",
    thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "A visually breathtaking, high-concept brand commercial for an autonomous aerospace robotics innovator. Produced on location in the Mojave Desert with custom tracking rigs and precision Cooke Anamorphic glass.",
    deliverables: ["90s Hero Anthem", "30s Broadcast TV Cut", "6x High-Impact 9:16 Vertical Paid Ads", "Custom Sound Design & Atmos Master"],
    gear: "RED Cinema 6K + Cooke Anamorphic /i Full Frame Plus",
    director: "Marcus Vance",
    colorGrade: "DaVinci Resolve Studio (ACEScct 33-point 3D LUT)"
  },
  {
    id: "vanguard-hyperwear",
    title: "Unyielding Velocity",
    client: "Vanguard Hyperwear",
    category: "performance_ads",
    tag: "High-ROAS Ad Engine",
    duration: "00:45",
    aspectRatio: "9:16 & 16:9",
    resolution: "6K ProRAW",
    year: "2026",
    metrics: "$8.4M",
    metricLabel: "Attributed Campaign Revenue",
    thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "A fast-paced, visceral kinetic fitness commercial designed to stop the scroll and drive hyper-converting paid acquisition across Meta, TikTok, and YouTube Shorts.",
    deliverables: ["14x Performance Ad Variations (Modular Hooks)", "High-Contrast Macro Texture Cinematography", "Dynamic Motion Graphics & Sound Effects"],
    gear: "Sony FX6 + Sony FE 24-70mm GM II + Custom High-Speed FPV Drone",
    director: "Elena Ramos",
    colorGrade: "FilmConvert Nitrate Kodak 5207 Emulation"
  },
  {
    id: "solace-audio",
    title: "Silence Is an Instrument",
    client: "Solace Audio",
    category: "brand_film",
    tag: "Luxury Brand Film",
    duration: "02:15",
    aspectRatio: "2.35:1",
    resolution: "4K ARRI ProRES",
    year: "2025",
    metrics: "2.4M+",
    metricLabel: "Organic Social Impressions",
    thumbnailUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "A poetic, sensory meditation on sound and silence. Featuring tactile extreme close-ups of CNC-milled titanium acoustic chambers and an orchestral analog synthesizer score.",
    deliverables: ["Director's Cut Brand Manifesto", "Cinema Pre-Roll Ad (60s)", "Behind-The-Scenes Craft Documentary", "Photographic Print Keyart Suite"],
    gear: "ARRI Alexa Mini LF + Atlas Orion 2x Anamorphic Series",
    director: "Julian Thorne",
    colorGrade: "Custom Print Film Emulation (Kodak 2383)"
  },
  {
    id: "founders-uncut",
    title: "Uncut: The Billion Dollar Blueprint",
    client: "Founders Uncut Media",
    category: "podcast_studio",
    tag: "4K Multi-Cam Episodic",
    duration: "58:00",
    aspectRatio: "16:9 & 9:16",
    resolution: "4K DCI Multi-Track",
    year: "2026",
    metrics: "480K+",
    metricLabel: "YouTube Subscribers in 90 Days",
    thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Complete studio design and weekly episodic video production for a tier-one venture capital podcast. Includes automated robotic multi-cam switching and instant viral short-form pipeline.",
    deliverables: ["12x 4K Full Episodic Masters", "96x Viral Short-Form Clips with High-Retention Captions", "Custom Kinetic Lower Thirds & Intro Sequence"],
    gear: "3x Sony FX3 Rigs + Shure SM7B + Aputure Electro Storm 600D Studio Lighting",
    director: "Chloe Chen",
    colorGrade: "Studio Clean Contrast Neutral"
  },
  {
    id: "kinetix-ai",
    title: "The Zero-Latency Mind",
    client: "Kinetix AI",
    category: "founder_story",
    tag: "Founder Origin & Vision Film",
    duration: "03:10",
    aspectRatio: "2.39:1",
    resolution: "6K Cinema RAW",
    year: "2025",
    metrics: "3.1x",
    metricLabel: "Series B Oversubscription Rate",
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    description: "An emotionally resonant, cinematic documentary chronicling the five-year breakthroughs of an AI frontier laboratory. Crafted to inspire investors and world-class research talent.",
    deliverables: ["3-Minute Cinematic Pitch Film", "Keynote Video Opener", "Talent Recruitment Social Slices"],
    gear: "RED Cinema 6K + Angenieux Optimo Ultra 12x Zoom",
    director: "Marcus Vance",
    colorGrade: "High Contrast Cyber Obsidian"
  },
  {
    id: "lumina-hypercar",
    title: "Apex Aerodynamics",
    client: "Lumina EV Motors",
    category: "commercial",
    tag: "High-End Automotive Commercial",
    duration: "01:15",
    aspectRatio: "2.39:1",
    resolution: "6K Full Frame",
    year: "2026",
    metrics: "$12M",
    metricLabel: "Pre-Orders in 72 Hours",
    thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "High-speed Russian arm chase-car tracking in the Swiss Alps, capturing a futuristic electric hypercar slicing through mountain switchbacks at dawn.",
    deliverables: ["75s Superbowl-Ready Broadcast Spot", "3D CGI Holographic Interior Visualizer", "Global Social Campaign Assets"],
    gear: "Flight Head V Chase Car + ARRI Alexa 35 + Master Anamorphic Primes",
    director: "Julian Thorne",
    colorGrade: "Cool Titanium & Warm Dawn ACES"
  }
];

export const SERVICES: ServiceTier[] = [
  {
    id: "flagship-commercials",
    title: "Flagship Brand Films & Commercials",
    code: "SVC-01 // CINEMA COMMERCE",
    subtitle: "Hollywood-caliber storytelling engineered to elevate your brand prestige and dominate market share.",
    highlightBadge: "High Prestige",
    description: "We don't just shoot videos; we direct cultural moments. From initial high-concept treatments and screenwriting to multi-million dollar camera packages, precision lighting, and Dolby Atmos mastering, your brand will command absolute respect.",
    deliverables: [
      "Full Creative Treatment & Screenplay",
      "ARRI / RED 6K Cinema Camera Packages",
      "Executive Director & Full Hollywood Crew",
      "Bespoke Original Score & Sound Design",
      "Broadcast & Omnichannel Delivery Rights"
    ],
    timeline: "3 to 5 Weeks",
    idealFor: "Venture-backed Tech, Luxury Goods, Consumer Brands & Enterprise",
    impactMetric: "Industry-defining brand authority & 5x perceived brand valuation",
    startingBudget: "$25,000+",
    popular: true
  },
  {
    id: "performance-creative-engine",
    title: "Paid Growth Video Engine",
    code: "SVC-02 // DIRECT ROAS",
    subtitle: "High-volume, scroll-stopping video ads designed systematically for Meta, TikTok & YouTube.",
    highlightBadge: "Maximum ROAS",
    description: "Creative is the ultimate targeting lever in modern digital advertising. We engineer modular video ad assets with high-retention hooks, compelling visual storytelling, and clear call-to-actions that lower Customer Acquisition Cost (CAC) and scale pipeline.",
    deliverables: [
      "Monthly Creative Testing Sprint (15–30 Ad Variations)",
      "High-Converting First 3-Second Hook Architecture",
      "Dynamic Native Editing, Subtitles & Motion Graphics",
      "Iterative Data Feedback Loops & Fatigue Replacement",
      "Full Raw Asset Delivery for Internal Growth Teams"
    ],
    timeline: "Continuous Monthly Retainer or 2-Week Sprint",
    idealFor: "D2C Brands, SaaS, Fintech & High-Scale E-Commerce",
    impactMetric: "+180% to +450% Average Attributed Return On Ad Spend",
    startingBudget: "$12,500/mo"
  },
  {
    id: "founder-manifestos",
    title: "Executive & Founder Documentaries",
    code: "SVC-03 // NARRATIVE CAPITAL",
    subtitle: "Compelling cinematic documentaries that convert prospective investors, employees, and enterprise clients.",
    highlightBadge: "Storytelling",
    description: "People do not buy what you do; they buy why you do it. We conduct deep-dive founder interviews with cinematic lighting to capture the grit, vision, and human core of your company, turning your journey into an unstoppable narrative asset.",
    deliverables: [
      "In-Depth Documentary Style Interview Directing",
      "Cinematic B-Roll of HQ, Lab, & Team in Action",
      "Investor Pitch Cut (3–5 min) & Keynote Opener",
      "Social Thought-Leadership Micro-Cuts for LinkedIn/X",
      "Full Archival 4K Master Archive"
    ],
    timeline: "2 to 3 Weeks",
    idealFor: "Series A–D Founders, Visionary CEOs, Tech Innovators",
    impactMetric: "Drives institutional investor buy-in & top 1% talent recruiting",
    startingBudget: "$18,000"
  },
  {
    id: "podcast-studio-engine",
    title: "4K Multi-Cam Podcast & Studio Production",
    code: "SVC-04 // BROADCAST SUITE",
    subtitle: "Turnkey multi-camera studio recording, live switching, and viral short-form syndication.",
    highlightBadge: "Turnkey",
    description: "Launch or elevate a premier video podcast. We handle the entire technical and creative pipeline: broadcast 4K multi-cam setups, acoustic optimization, broadcast-grade microphones, dynamic lower-thirds, and automated short-form viral cutdown engines.",
    deliverables: [
      "Multi-Angle 4K Cinema Camera Coverage",
      "Broadcast Studio Audio Engineering & Noise Mastering",
      "Full Episodic Long-Form YouTube Masters",
      "8–12 Viral Vertical Shorts per Episode (TikTok, Reels, Shorts)",
      "Custom Thumbnail Packaging & Title Testing Matrix"
    ],
    timeline: "48-Hour Turnaround Post Recording",
    idealFor: "Top Creators, Media Brands, Executives, Thought Leaders",
    impactMetric: "0 to 100k+ organic audience growth within 90 days",
    startingBudget: "$6,500/mo"
  },
  {
    id: "3d-motion-vfx",
    title: "Luxury Product Cinematography & 3D VFX",
    code: "SVC-05 // FUTURE MOTION",
    subtitle: "Extreme macro lens camera movement paired with photorealistic 3D visual effects.",
    highlightBadge: "Visual FX",
    description: "Showcase physical or digital products with hypnotic fidelity. We combine robotic motion control (BOLT) camera arms, anamorphic macro optics, liquid/particle physics, and high-end Unreal Engine / Cinema 4D simulations for visuals impossible in traditional shoots.",
    deliverables: [
      "Robotic High-Speed Motion Control Captures",
      "4K Photorealistic 3D Product Modeling & Rendering",
      "Exploded Product Views, Liquid & Particle Physics",
      "Color-accurate Studio Light Simulation",
      "Infinite Aspect Ratio Assets (Web, Billboards, Mobile)"
    ],
    timeline: "3 to 4 Weeks",
    idealFor: "Hardware Tech, Consumer Electronics, Cosmetics, Luxury Spirits",
    impactMetric: "+310% higher conversion rate on product landing pages",
    startingBudget: "$15,000"
  }
];

export const CLIENT_LOGOS = [
  { name: "VANGUARD", tier: "Hyperwear Enterprise" },
  { name: "AETHER DYNAMICS", tier: "Aerospace Robotics" },
  { name: "KINETIX AI", tier: "Frontier Foundation" },
  { name: "SOLACE AUDIO", tier: "Luxury Acoustics" },
  { name: "LUMINA HYPERCAR", tier: "EV Mobility" },
  { name: "APEX VENTURES", tier: "Tier-1 Venture Capital" },
  { name: "CHRONOS WATCHES", tier: "Haute Horlogerie" },
  { name: "NEXUS ROBOTICS", tier: "Industrial Automation" }
];

export const AGENCY_STATS = [
  { value: "$120M+", label: "Client Revenue Generated", detail: "Directly tracked to campaigns" },
  { value: "350M+", label: "Organic & Paid Views", detail: "Across global media channels" },
  { value: "99.4%", label: "Client Re-Booking Rate", detail: "Long-term creative partners" },
  { value: "6K HDR", label: "Mastering Standard", detail: "Cinema DCI & Dolby Atmos" }
];

export const PRODUCTION_PIPELINE = [
  {
    step: "01",
    phase: "STRATEGIC BLUEPRINT",
    duration: "DAYS 1 – 5",
    title: "Deconstruct the Brand & Formulate the Hook",
    description: "We don't pick up a camera until we understand your exact audience psychology, competitive landscape, and commercial objective. We pitch three distinct conceptual directions, full screenplays, and visual moodboards.",
    deliverable: "Approved Directorial Treatment, Storyboards & Call Sheets"
  },
  {
    step: "02",
    phase: "PRINCIPAL PHOTOGRAPHY",
    duration: "PRODUCTION PHASE",
    title: "Hollywood-Grade Execution on Set",
    description: "Our elite production crews operate high-speed cinema packages (ARRI / RED), high-output lighting rigs, anamorphic glass, and precision robotic stabilization to capture visuals that look like $500,000 studio productions.",
    deliverable: "6K RAW DCI Multi-Track Footage Archive"
  },
  {
    step: "03",
    phase: "PRECISION POST-PRODUCTION",
    duration: "DAYS 10 – 18",
    title: "Rhythm, Color Grade & Bespoke Audio Design",
    description: "The film comes alive in post. World-class editing rhythm, theatrical ACES color grading, custom CGI overlays, and sound design with sub-bass drops that give viewers goosebumps on headphones and theater speakers.",
    deliverable: "First Cut Review in Frame.io with Timed Feedback"
  },
  {
    step: "04",
    phase: "OMNICHANNEL DISTRIBUTION",
    duration: "DEPLOYMENT",
    title: "Cutdowns, Formats & Growth Optimization",
    description: "One shoot yields dozens of high-value assets. We package 16:9 hero cuts, 9:16 vertical TikTok/Reels variants, 4:5 social feeds, and micro-hooks formatted for instant campaign launch and maximum ROAS.",
    deliverable: "Multi-Format Master Deliverables + Ad Variation Matrix"
  }
];

export const TECH_ARSENAL = [
  { category: "Cinema Cameras", items: "RED Komodo-X 6K, ARRI Alexa Mini LF, Sony FX9 / FX3" },
  { category: "Optics & Glass", items: "Cooke Anamorphic /i Full Frame, Atlas Orion 2x, Leica R Summicron Cine" },
  { category: "Movement & Aerial", items: "DJI Inspire 3 Cine RAW, Freefly MōVI Pro, Ronin 4D 6K, Dana Dolly" },
  { category: "Color & Finish", items: "DaVinci Resolve Studio 19, ACES Color Science, Flanders Scientific OLEDs" },
  { category: "Sound Architecture", items: "Sennheiser MKH 416, Sound Devices Scorpio 32-Track, Dolby Atmos 7.1.4" }
];
