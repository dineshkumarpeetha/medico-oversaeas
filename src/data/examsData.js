export const EXAMS_DATA = {
  fmge: {
    id: "fmge",
    title: "FMGE / NEXT Coaching & Licensing Guide",
    fullName: "Foreign Medical Graduate Examination / National Exit Test (NEXT)",
    badge: "Licensing Exam India",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "FMGE (Foreign Medical Graduate Examination) is the screening test conducted by NBE (National Board of Examinations) for Indian citizens holding a medical degree from foreign universities to practice medicine in India.",
    eligibility: [
      "Must be a citizen of India or Overseas Citizen of India (OCI)",
      "Must possess a primary medical qualification (MBBS or equivalent) recognized by the foreign country",
      "The university must be listed in WHO Directory and approved by National Medical Commission (NMC) India",
      "Must have obtained an Eligibility Certificate from NMC (if applicable)"
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      totalQuestions: "300 Multiple Choice Questions (MCQs)",
      totalMarks: "300 Marks",
      passingCriteria: "50% Marks (150 out of 300)",
      negativeMarking: "No Negative Marking",
      sections: "Part A (150 Questions) & Part B (150 Questions)",
      frequency: "Conducted twice a year (June & December sessions)"
    },
    subjectBreakdown: [
      { subject: "Anatomy", weightage: "17 Questions", phase: "Pre-Clinical" },
      { subject: "Physiology", weightage: "17 Questions", phase: "Pre-Clinical" },
      { subject: "Biochemistry", weightage: "16 Questions", phase: "Pre-Clinical" },
      { subject: "Pathology", weightage: "13 Questions", phase: "Para-Clinical" },
      { subject: "Microbiology", weightage: "13 Questions", phase: "Para-Clinical" },
      { subject: "Pharmacology", weightage: "13 Questions", phase: "Para-Clinical" },
      { subject: "Forensic Medicine", weightage: "10 Questions", phase: "Para-Clinical" },
      { subject: "General Medicine", weightage: "33 Questions", phase: "Clinical" },
      { subject: "General Surgery", weightage: "32 Questions", phase: "Clinical" },
      { subject: "Obstetrics & Gynecology", weightage: "30 Questions", phase: "Clinical" },
      { subject: "Pediatrics", weightage: "15 Questions", phase: "Clinical" },
      { subject: "Community Medicine (PSM)", weightage: "30 Questions", phase: "Clinical" }
    ],
    coachingAssistance: [
      "Live & Recorded lectures by India's top medical faculties from 1st Year onwards",
      "Subject-wise mock test series matching NBE clinical case scenario pattern",
      "High-yield quick revision notes & image-based question banks",
      "Dedicated doubt resolution portal and mentorship groups",
      "Guidance for NEXT Step 1 and Step 2 exam transition"
    ],
    faqs: [
      {
        q: "When can a student start preparing for FMGE?",
        a: "It is strongly recommended to start FMGE/NEXT subject-wise preparation from the 1st year of MBBS study abroad. Medico Overseas provides online learning modules for all years."
      },
      {
        q: "What is the difference between FMGE and NEXT?",
        a: "NEXT (National Exit Test) will replace FMGE and NEET-PG in India, serving as a unified examination for licensing and post-graduate medical admissions."
      }
    ]
  },
  nmat: {
    id: "nmat",
    title: "NMAT (National Medical Admission Test) Guide",
    fullName: "National Medical Admission Test for Asian & Regional Universities",
    badge: "Medical Entrance Test",
    heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "The National Medical Admission Test (NMAT) is an aptitude & science assessment required for admission into Doctor of Medicine (MD/MBBS) programs in select destination countries like Philippines and partner institutes.",
    eligibility: [
      "Bachelor's degree in Science/Pre-Med or completed 12th standard PCB",
      "Minimum 50% aggregate in Physics, Chemistry, and Biology",
      "Valid passport and NEET qualification"
    ],
    examPattern: {
      mode: "Online / Paper-based Multiple Choice",
      part1: "Mental Ability: Verbal, Inductive Reasoning, Quantitative, Perceptual Acuity",
      part2: "Academic Proficiency: Biology, Physics, Chemistry, Social Science",
      scoring: "Percentile score system (cut-offs vary by university from 40 to 90 percentile)"
    },
    coachingAssistance: [
      "NMAT sample question papers and practice workbooks",
      "Speed technique workshops for Part-1 mental ability sections",
      "Core science subject refresher courses in Chemistry & Biology",
      "One-on-one mock interviews for university screening"
    ],
    faqs: [
      {
        q: "What NMAT score is required for top medical colleges?",
        a: "Most reputed universities require a percentile score between 40% and 75% in NMAT depending on seat availability."
      },
      {
        q: "Does Medico Overseas assist with NMAT registration?",
        a: "Yes, Medico Overseas provides end-to-end guidance for NMAT registration, fee payment, test center selection, and online prep materials."
      }
    ]
  }
};
