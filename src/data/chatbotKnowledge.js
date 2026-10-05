export const CHATBOT_KNOWLEDGE = [
  // 0. GREETINGS & HELLO
  {
    id: "greetings",
    keywords: ["hai", "hi", "hello", "hey", "hlo", "helo", "namaste", "good morning", "good evening", "greetings"],
    category: "greetings",
    title: "Greeting & Welcome",
    response: "👋 **Hello! Welcome to Medico Overseas AI Assistant** (Powered by **BuildX**).\n\nWe are India's trusted MBBS Study-Abroad Consultancy guiding students to WHO & NMC recognized medical universities in **Russia, Georgia, Kyrgyzstan, Uzbekistan, Armenia, and Vietnam**.\n\nHow can I help you today? Ask me anything about:\n- 💰 **Tuition & Hostel Fees**\n- 🎯 **NEET Eligibility & Cutoffs**\n- 🩺 **FMGE / NEXT Licensing Exam**\n- 📍 **Head Office & Branch Addresses**\n- 🛡️ **Hostels & Indian Food Mess**",
    prompts: ["📍 Get Office Address", "💰 Check MBBS Fees", "🇷🇺 MBBS in Russia", "🎯 Check NEET Cutoff"]
  },

  // 0.1 ADDRESS & LOCATIONS
  {
    id: "office_address",
    keywords: ["address", "location", "office", "where is your office", "delhi office", "mumbai office", "hyderabad office", "head office", "map", "directions", "city"],
    category: "contact",
    title: "Office Addresses & Locations",
    response: "📍 **Medico Overseas Official Branch Addresses:**\n\n1. 🏢 **Head Office (New Delhi):**\n   BuildX Tower, 5th Floor, Connaught Place, New Delhi - 110001\n   📞 Phone: +91 98765 43210\n\n2. 🏬 **Mumbai Branch:**\n   Suite 402, Trade Centre, BKC, Bandra East, Mumbai - 400051\n   📞 Phone: +91 98123 45678\n\n3. 🏥 **Hyderabad Branch:**\n   Level 3, Jubilee Heights, Road No. 36, Jubilee Hills, Hyderabad - 500033\n   📞 Phone: +91 98999 11223\n\n⏰ **Office Hours:** Monday - Saturday: 9:30 AM - 7:00 PM IST",
    prompts: ["📞 Request Expert Call", "💰 Check MBBS Fees", "🇷🇺 MBBS in Russia"]
  },

  // 1. RUSSIA
  {
    id: "russia_details",
    keywords: ["russia", "russian", "kazan", "bashkir", "crimea", "moscow", "st petersburg"],
    category: "country",
    title: "MBBS in Russia",
    response: "🇷🇺 **MBBS in Russia Details:**\n\n- **Course Duration:** 6 Years (100% English Medium).\n- **Tuition Fees:** ₹3.5 Lakhs to ₹5.5 Lakhs/year.\n- **Total 6-Year Package:** ₹24 Lakhs - ₹28.5 Lakhs (Includes tuition + hostel).\n- **Top Universities:** Kazan Federal University, Bashkir State Medical Univ, Crimea Federal Univ.\n- **NMC & WHO:** 100% Approved & recognized by World Health Organization.\n- **Key Features:** Central heating in all dorms, government state universities, high clinical practice in multi-specialty hospitals.",
    prompts: ["Compare Russia vs Georgia", "Hostel & Indian Food in Russia", "NEET Cutoff for Russia"]
  },

  // 2. GEORGIA
  {
    id: "georgia_details",
    keywords: ["georgia", "georgian", "tbilisi", "batumi", "seu"],
    category: "country",
    title: "MBBS in Georgia",
    response: "🇬🇪 **MBBS in Georgia Details:**\n\n- **Course Duration:** 6 Years (European ECTS Credit System).\n- **Tuition Fees:** ₹4.5 Lakhs to ₹6.5 Lakhs/year.\n- **Total 6-Year Package:** ₹32 Lakhs - ₹38.5 Lakhs.\n- **FMGE Passing Rate:** Exceptionally high (25% - 35%+ clearing rate in India).\n- **Top Universities:** Tbilisi State Medical Univ, Batumi Shota Rustaveli, SEU.\n- **Safety:** Ranked among top 10 safest countries globally for Indian female students.",
    prompts: ["Is NEET mandatory for Georgia?", "Compare Russia vs Georgia", "Georgia Fee Table"]
  },

  // 3. KYRGYZSTAN
  {
    id: "kyrgyzstan_details",
    keywords: ["kyrgyzstan", "kyrgyz", "osh", "bishkek", "ism", "cheap", "budget", "lowest fee"],
    category: "country",
    title: "MBBS in Kyrgyzstan",
    response: "🇰🇬 **MBBS in Kyrgyzstan (Most Budget Friendly):**\n\n- **Course Duration:** 5 Years + 1 Year Internship.\n- **Tuition Fees:** ₹2.5 Lakhs to ₹3.5 Lakhs/year.\n- **Total Package:** Under ₹20 Lakhs total!\n- **Flight Duration:** Only 3.5 hours from New Delhi.\n- **Top Universities:** Osh State Medical University, Kyrgyz State Medical Academy, ISM Bishkek.",
    prompts: ["Kyrgyzstan Total Package", "Flight duration to Kyrgyzstan", "Apply for Osh State"]
  },

  // 4. UZBEKISTAN
  {
    id: "uzbekistan_details",
    keywords: ["uzbekistan", "uzbek", "tashkent", "samarkand"],
    category: "country",
    title: "MBBS in Uzbekistan",
    response: "🇺🇿 **MBBS in Uzbekistan:**\n\n- **Course Duration:** 6 Years (Fully NMC 2021 Gazette Compliant).\n- **Tuition Fees:** ₹2.8 Lakhs to ₹3.8 Lakhs/year.\n- **Total 6-Year Package:** ₹22 Lakhs - ₹24 Lakhs.\n- **Flight Time:** Direct 2.5-hour flights from Delhi to Tashkent.\n- **Top Institutes:** Tashkent Medical Academy, Samarkand State Medical Univ.",
    prompts: ["Is Uzbekistan NMC approved?", "Tashkent Medical Academy Fees", "Apply for Uzbekistan"]
  },

  // 5. ARMENIA
  {
    id: "armenia_details",
    keywords: ["armenia", "yerevan", "ysmu"],
    category: "country",
    title: "MBBS in Armenia",
    response: "🇦🇲 **MBBS in Armenia:**\n\n- **Course Duration:** 6 Years (European Standard Medical Education).\n- **Tuition Fees:** ₹3.2 Lakhs to ₹4.5 Lakhs/year.\n- **Total Package:** ₹24 Lakhs - ₹28 Lakhs.\n- **Capital City:** Yerevan State Medical University (Established 1920 with century-old medical legacy).",
    prompts: ["Armenia Fee Breakdown", "Is Yerevan safe?", "Apply for Armenia"]
  },

  // 6. VIETNAM
  {
    id: "vietnam_details",
    keywords: ["vietnam", "vietnamese", "can tho", "ho chi minh"],
    category: "country",
    title: "MBBS in Vietnam",
    response: "🇻🇳 **MBBS in Vietnam:**\n\n- **Course Duration:** 6 Years (Modern Asian Infrastructure).\n- **Tuition Fees:** ₹3.8 Lakhs to ₹5.0 Lakhs/year.\n- **Highlights:** High-tech simulation labs, tropical weather familiar to Indian students, direct short flights.",
    prompts: ["Vietnam University List", "Compare Vietnam vs Kyrgyzstan", "Apply for Vietnam"]
  },

  // 7. NEET RULES & CUTOFFS
  {
    id: "neet_qualification",
    keywords: ["neet", "cutoff", "marks", "without neet", "score", "qualify", "mandatory"],
    category: "exam",
    title: "NEET Requirement",
    response: "🎯 **NEET Qualification Rules for MBBS Abroad:**\n\n- **Is NEET Required?** Yes! NMC mandates NEET qualification for all Indian passport holders studying abroad.\n- **Qualifying Cutoff:** Approximately 135-145 marks (Out of 720) for General & 108-118 for SC/ST/OBC.\n- **NEET Score Validity:** NEET scorecard is valid for **3 Years** for overseas medical admissions.\n- **12th PCB Cutoff:** 50% aggregate in Physics, Chemistry & Biology (40% for reserved categories).",
    prompts: ["What if I failed NEET?", "Check My NEET Eligibility", "Lowest Budget Countries"]
  },

  // 8. FMGE & NEXT LICENSING EXAM
  {
    id: "fmge_next_info",
    keywords: ["fmge", "next", "licensing", "nbe", "screening", "exam", "pass rate", "coaching"],
    category: "exam",
    title: "FMGE / NEXT Exam",
    response: "🩺 **FMGE / NEXT Licensing Exam Guide:**\n\n- **What is FMGE?** Screening test conducted by NBE in India for foreign medical graduates.\n- **Passing Score:** Must score 50% (150 out of 300 marks). **No negative marking!**\n- **Medico Overseas Support:** We provide **free online FMGE test series and faculty coaching** to all enrolled students starting from 1st Year of MBBS study!",
    prompts: ["Which country has highest FMGE pass rate?", "FMGE Exam Syllabus", "NMAT Exam Info"]
  },

  // 9. HOSTEL, FOOD & INDIAN MESS
  {
    id: "hostel_food",
    keywords: ["hostel", "food", "mess", "indian food", "living", "accommodation", "dorm", "canteen"],
    category: "lifestyle",
    title: "Hostel & Indian Mess",
    response: "🍛 **Hostels & Indian Food Facilities:**\n\n- **Dedicated Hostels:** Separate furnished boys and girls dormitories with 24/7 CCTV & security.\n- **Indian Mess:** Experienced chefs from North & South India prepare fresh Veg & Non-Veg Indian meals daily (Roti, Rice, Dal, Paneer, Chicken).\n- **Amenities:** Central heating in all rooms, high-speed Wi-Fi, study rooms, and laundry units.",
    prompts: ["Are hostels safe for girls?", "Monthly living cost", "Check Fees"]
  },

  // 10. SAFETY & PARENTS CONCERNS
  {
    id: "safety_parents",
    keywords: ["safe", "safety", "parents", "girl", "girls", "security", "crime", "war", "peace"],
    category: "safety",
    title: "Student Safety",
    response: "🛡️ **Student Safety & Guardian Support:**\n\n- **24/7 On-Campus Security:** All medical university campuses and dorms feature strict biometric security and student ID access.\n- **Medico Overseas Coordinators:** Our dedicated Indian representatives reside on campus in Russia, Georgia, Kyrgyzstan, etc., to assist students 24/7.\n- **Parent Updates:** Parents receive regular academic and health progress reports.",
    prompts: ["Connect with Student Parent", "View Branch Offices", "Request Callback"]
  },

  // 11. FEES & TOTAL BUDGET COMPARISON
  {
    id: "fees_budget_all",
    keywords: ["fee", "fees", "cost", "budget", "total package", "price", "lakh", "money", "expensive"],
    category: "finance",
    title: "Total Budget Comparison",
    response: "💰 **Total 6-Year MBBS Packages (Tuition + Hostel):**\n\n1. 🇰🇬 **Kyrgyzstan:** ₹18 Lakhs - ₹21 Lakhs total\n2. 🇺🇿 **Uzbekistan:** ₹22 Lakhs - ₹24 Lakhs total\n3. 🇷🇺 **Russia:** ₹24 Lakhs - ₹28.5 Lakhs total\n4. 🇦🇲 **Armenia:** ₹24 Lakhs - ₹28 Lakhs total\n5. 🇻🇳 **Vietnam:** ₹28 Lakhs - ₹34 Lakhs total\n6. 🇬🇪 **Georgia:** ₹32 Lakhs - ₹38.5 Lakhs total\n\n*Zero capitation or hidden donation fees!*",
    prompts: ["Use Budget Calculator", "Russia University Fees", "Georgia University Fees"]
  },

  // 12. ADMISSION DEADLINES & PROCESS
  {
    id: "admission_process",
    keywords: ["admission", "apply", "process", "documents", "deadline", "date", "seat", "step", "passport"],
    category: "process",
    title: "Admission Process",
    response: "📋 **5-Step Fast Admission Process:**\n\n1. **Submit Documents:** 10th & 12th marksheets + NEET scorecard + Passport copy.\n2. **Offer Letter:** Issued by University within 48 Hours.\n3. **Ministry Authorization:** Verification by Education Ministry.\n4. **Visa Stamping:** Guaranteed student visa processing.\n5. **Flight Departure:** Travel in guided Medico Overseas student groups with airport pick-up.",
    prompts: ["Check Document List", "Apply for 2026 Batch", "Talk to Expert"]
  },

  // 13. BUILDX COMPANY INFO
  {
    id: "buildx_info",
    keywords: ["buildx", "who built", "developer", "platform", "company", "technology"],
    category: "tech",
    title: "BuildX Technology",
    response: "🚀 **BuildX AI Platform:**\n\nThis web application and AI Assistant are engineered by **BuildX**, bringing state-of-the-art web technology, database persistence, dark/light themes, and smart medical counselling tools to Medico Overseas!",
    prompts: ["Check MBBS Fees", "Talk to Medical Specialist", "View Destinations"]
  }
];

export const PRESET_PROMPTS = [
  "📍 Get Office Address",
  "💰 Check Total Packages & Fees",
  "🇷🇺 Tell me about MBBS in Russia",
  "🇬🇪 Why choose Georgia for MBBS?",
  "🎯 NEET Cutoff & 12th PCB %",
  "🩺 FMGE / NEXT Exam Rules",
  "🛡️ Hostel & Indian Mess Info",
  "📞 Request Expert Callback"
];
