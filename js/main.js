// ─── MEDICAL DATABASE ───
const DISEASE_DB = [
  {
    name: "Common Cold",
    symptoms: ["runny nose","sneezing","sore throat","cough","congestion","mild fever","headache","fatigue","body aches"],
    severity: "mild",
    description: "A viral infection of the upper respiratory tract caused by rhinovirus. Usually resolves in 7–10 days.",
    action: "Rest, stay hydrated, take OTC cold medicine. See doctor if fever exceeds 103°F or lasts more than 3 days."
  },
  {
    name: "Influenza (Flu)",
    symptoms: ["high fever","chills","muscle aches","body aches","fatigue","headache","cough","sore throat","runny nose","vomiting","loss of appetite"],
    severity: "moderate",
    description: "A contagious respiratory illness caused by influenza viruses. Symptoms come on suddenly and are more severe than a cold.",
    action: "Rest and fluids are key. Antiviral medications are most effective within 48 hours. Seek care if breathing is difficult."
  },
  {
    name: "COVID-19",
    symptoms: ["fever","cough","shortness of breath","fatigue","muscle aches","headache","loss of taste","loss of smell","sore throat","congestion","nausea","diarrhea","chills"],
    severity: "moderate",
    description: "Respiratory illness caused by SARS-CoV-2 coronavirus. Symptoms vary widely from mild to severe.",
    action: "Isolate immediately. Take a COVID test. Contact your doctor, especially if you have difficulty breathing or chest pain."
  },
  {
    name: "Dengue Fever",
    symptoms: ["high fever","severe headache","pain behind eyes","joint pain","muscle pain","rash","nausea","vomiting","fatigue","bleeding gums"],
    severity: "severe",
    description: "A mosquito-borne viral disease common in tropical regions. Can progress to dengue hemorrhagic fever.",
    action: "Seek medical attention immediately. Avoid aspirin/NSAIDs. Monitor platelet count. Hospitalization may be needed."
  },
  {
    name: "Malaria",
    symptoms: ["high fever","chills","shivering","sweating","headache","nausea","vomiting","muscle aches","fatigue","anemia"],
    severity: "severe",
    description: "A parasitic infection transmitted through Anopheles mosquito bites, common in tropical/subtropical areas.",
    action: "Seek emergency medical care. Antimalarial drugs required. Early treatment prevents complications."
  },
  {
    name: "Typhoid Fever",
    symptoms: ["prolonged fever","weakness","stomach pain","headache","diarrhea","constipation","loss of appetite","rash","fatigue"],
    severity: "severe",
    description: "A bacterial infection caused by Salmonella typhi, spread through contaminated food and water.",
    action: "Requires antibiotics prescribed by a doctor. Maintain hydration. Hospitalization may be necessary in severe cases."
  },
  {
    name: "Pneumonia",
    symptoms: ["cough","fever","chills","shortness of breath","chest pain","fatigue","nausea","vomiting","rapid breathing","confusion"],
    severity: "severe",
    description: "Infection that inflames air sacs in one or both lungs. Can be bacterial, viral, or fungal.",
    action: "See a doctor immediately. Chest X-ray needed for diagnosis. Antibiotics for bacterial pneumonia. Hospitalization if severe."
  },
  {
    name: "Gastroenteritis (Stomach Flu)",
    symptoms: ["nausea","vomiting","diarrhea","stomach cramps","stomach pain","fever","headache","muscle aches","loss of appetite"],
    severity: "mild",
    description: "Inflammation of the stomach and intestines, usually caused by viral or bacterial infection.",
    action: "Rest, oral rehydration, bland diet (BRAT). See a doctor if symptoms last more than 3 days or there are signs of dehydration."
  },
  {
    name: "Migraine",
    symptoms: ["severe headache","throbbing pain","nausea","vomiting","sensitivity to light","sensitivity to sound","visual disturbances","dizziness","fatigue"],
    severity: "moderate",
    description: "A neurological disorder characterized by intense, debilitating headaches. Can last hours to days.",
    action: "Rest in a dark, quiet room. OTC pain relievers may help. Consult a neurologist for recurring migraines and preventive medication."
  },
  {
    name: "Hypertension (High Blood Pressure)",
    symptoms: ["headache","dizziness","shortness of breath","nosebleed","chest pain","blurred vision","fatigue","irregular heartbeat"],
    severity: "moderate",
    description: "A chronic condition where blood pressure in the arteries is persistently elevated. Often called the 'silent killer'.",
    action: "Monitor BP regularly. Reduce salt, exercise, and manage stress. Consult a doctor for medication if needed."
  },
  {
    name: "Diabetes (Type 2)",
    symptoms: ["frequent urination","excessive thirst","blurred vision","fatigue","slow healing","numbness","tingling","unexplained weight loss","increased hunger"],
    severity: "moderate",
    description: "A metabolic disorder characterized by high blood sugar due to insulin resistance or insufficient insulin production.",
    action: "See a doctor for blood glucose testing. Lifestyle changes (diet, exercise) are key. Medication or insulin may be required."
  },
  {
    name: "Asthma",
    symptoms: ["wheezing","shortness of breath","chest tightness","cough","difficulty breathing","night cough","exercise intolerance"],
    severity: "moderate",
    description: "A chronic respiratory condition where airways narrow and swell, producing extra mucus.",
    action: "Use prescribed inhalers. Identify and avoid triggers. Severe attacks need emergency care. Regular pulmonologist follow-up."
  },
  {
    name: "Appendicitis",
    symptoms: ["abdominal pain","pain around navel","pain in lower right abdomen","nausea","vomiting","fever","loss of appetite","bloating"],
    severity: "critical",
    description: "Inflammation of the appendix. A medical emergency if the appendix ruptures.",
    action: "Go to the emergency room immediately. Surgical removal (appendectomy) is usually required."
  },
  {
    name: "Urinary Tract Infection (UTI)",
    symptoms: ["burning urination","frequent urination","cloudy urine","strong smelling urine","pelvic pain","lower back pain","blood in urine","fever"],
    severity: "mild",
    description: "An infection in any part of the urinary system. More common in women. Usually caused by bacteria.",
    action: "See a doctor for antibiotics. Drink plenty of water. Complete the full antibiotic course."
  },
  {
    name: "Anemia",
    symptoms: ["fatigue","weakness","pale skin","shortness of breath","dizziness","irregular heartbeat","cold hands","cold feet","chest pain","headache"],
    severity: "moderate",
    description: "A condition where you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
    action: "Blood test needed for diagnosis. Treatment depends on type (iron supplements, B12, etc.). Consult a hematologist."
  },
  {
    name: "Chickenpox",
    symptoms: ["itchy rash","red spots","blisters","fever","fatigue","headache","loss of appetite","sore throat"],
    severity: "mild",
    description: "A highly contagious viral infection caused by varicella-zoster virus. Common in children.",
    action: "Rest and calamine lotion for itching. Antiviral drugs for severe cases or immunocompromised patients. Avoid scratching blisters."
  },
  {
    name: "Tuberculosis (TB)",
    symptoms: ["persistent cough","coughing blood","chest pain","fatigue","weight loss","night sweats","fever","loss of appetite","chills"],
    severity: "severe",
    description: "A serious infectious disease that mainly affects the lungs, caused by Mycobacterium tuberculosis.",
    action: "Requires 6–9 months of antibiotic treatment. TB is notifiable — report to public health. Isolation may be needed initially."
  },
  {
    name: "Sinusitis",
    symptoms: ["facial pain","facial pressure","nasal congestion","runny nose","headache","toothache","cough","fever","bad breath","fatigue","post nasal drip"],
    severity: "mild",
    description: "Inflammation of the sinuses, usually following a cold or allergic reaction.",
    action: "Saline rinses, decongestants, and steam inhalation help. Antibiotics needed if bacterial. See doctor if lasting over 10 days."
  },
  {
    name: "Acid Reflux (GERD)",
    symptoms: ["heartburn","regurgitation","chest pain","difficulty swallowing","chronic cough","sore throat","nausea","bloating","burping"],
    severity: "mild",
    description: "A digestive disorder where stomach acid repeatedly flows back into the esophagus.",
    action: "Avoid trigger foods, eat smaller meals, and don't lie down after eating. Antacids or PPIs may be prescribed."
  },
  {
    name: "Arthritis",
    symptoms: ["joint pain","joint stiffness","joint swelling","reduced range of motion","redness","warmth around joints","fatigue","morning stiffness"],
    severity: "moderate",
    description: "Inflammation of one or more joints. Osteoarthritis and rheumatoid arthritis are the most common types.",
    action: "Exercise, physical therapy, and anti-inflammatory medications help. Consult a rheumatologist for disease-modifying drugs."
  }
];

// ─── SYMPTOM CHECKER LOGIC ───
function analyzeSymptoms(inputText) {
  const input = inputText.toLowerCase();
  const words = input.split(/[\s,;.]+/).map(w => w.trim()).filter(Boolean);

  const scores = DISEASE_DB.map(disease => {
    let matchCount = 0;
    let matchedSymptoms = [];

    disease.symptoms.forEach(symptom => {
      const symptomWords = symptom.toLowerCase().split(' ');
      const matched = symptomWords.every(sw => input.includes(sw)) ||
                      words.some(w => symptom.includes(w) && w.length > 3);
      if (matched) {
        matchCount++;
        matchedSymptoms.push(symptom);
      }
    });

    const score = matchCount / disease.symptoms.length;
    return { ...disease, score, matchCount, matchedSymptoms };
  });

  return scores
    .filter(d => d.matchCount > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function getSeverityClass(severity) {
  const map = { mild: 'sev-mild', moderate: 'sev-moderate', severe: 'sev-severe', critical: 'sev-critical' };
  return map[severity] || 'sev-mild';
}

function getSeverityLabel(severity) {
  return severity.charAt(0).toUpperCase() + severity.slice(1);
}

// ─── MAIN JS ───
document.addEventListener('DOMContentLoaded', () => {
  // Animate stats
  document.querySelectorAll('.stat-num').forEach(el => {
    el.style.animation = 'fadeUp 0.6s ease both';
  });

  // Navbar active link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') && path.includes(a.getAttribute('href').replace('../','')));
  });
});
