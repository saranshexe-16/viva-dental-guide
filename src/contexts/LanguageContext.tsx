import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    appTitle: 'Dental Health Assessment',
    dashboard: 'Dashboard',
    assessment: 'Assessment',
    chatbot: 'AI Assistant',
    tutorials: 'Video Tutorials',
    education: 'Health Education',
    prescription: 'Prescription',
    uploadImage: 'Upload Dental Image',
    uploadDesc: 'Upload a clear photo of your teeth for AI-powered assessment',
    selectImage: 'Select Image',
    dragDrop: 'or drag and drop',
    analyzing: 'Analyzing...',
    chatPlaceholder: 'Ask me about dental health...',
    healthyTeeth: 'Advantages of Healthy Teeth',
    unhealthyTeeth: 'Disadvantages of Unhealthy Teeth',
    healthyList1: 'Efficient chewing and proper digestion',
    healthyList2: 'Clear speech and confident communication',
    healthyList3: 'Beautiful smile and boosted self-esteem',
    healthyList4: 'Reduced risk of systemic diseases',
    healthyList5: 'Lower dental treatment costs',
    unhealthyList1: 'Chronic pain and discomfort',
    unhealthyList2: 'Bad breath and social embarrassment',
    unhealthyList3: 'Tooth decay and potential tooth loss',
    unhealthyList4: 'Increased risk of heart disease',
    unhealthyList5: 'Higher dental treatment expenses',
    prescriptionTitle: 'Your Dental Prescription',
    noPrescription: 'No prescription available yet. Please complete your assessment.',
    tutorialTitle: '3D Dental Tutorials',
    tutorialDesc: 'Learn about dental health through interactive 3D videos',
  },
  hi: {
    appTitle: 'दंत स्वास्थ्य मूल्यांकन',
    dashboard: 'डैशबोर्ड',
    assessment: 'मूल्यांकन',
    chatbot: 'एआई सहायक',
    tutorials: 'वीडियो ट्यूटोरियल',
    education: 'स्वास्थ्य शिक्षा',
    prescription: 'नुस्खा',
    uploadImage: 'दंत छवि अपलोड करें',
    uploadDesc: 'एआई-संचालित मूल्यांकन के लिए अपने दांतों की स्पष्ट तस्वीर अपलोड करें',
    selectImage: 'छवि चुनें',
    dragDrop: 'या खींचें और छोड़ें',
    analyzing: 'विश्लेषण कर रहे हैं...',
    chatPlaceholder: 'मुझसे दंत स्वास्थ्य के बारे में पूछें...',
    healthyTeeth: 'स्वस्थ दांतों के लाभ',
    unhealthyTeeth: 'अस्वस्थ दांतों के नुकसान',
    healthyList1: 'कुशल चबाना और उचित पाचन',
    healthyList2: 'स्पष्ट भाषण और आत्मविश्वासपूर्ण संचार',
    healthyList3: 'सुंदर मुस्कान और बढ़ा हुआ आत्मसम्मान',
    healthyList4: 'प्रणालीगत रोगों का कम जोखिम',
    healthyList5: 'कम दंत उपचार लागत',
    unhealthyList1: 'पुराना दर्द और असुविधा',
    unhealthyList2: 'सांसों की दुर्गंध और सामाजिक शर्मिंदगी',
    unhealthyList3: 'दांतों की सड़न और संभावित दांत खोना',
    unhealthyList4: 'हृदय रोग का बढ़ा हुआ जोखिम',
    unhealthyList5: 'अधिक दंत उपचार खर्च',
    prescriptionTitle: 'आपका दंत नुस्खा',
    noPrescription: 'अभी तक कोई नुस्खा उपलब्ध नहीं है। कृपया अपना मूल्यांकन पूरा करें।',
    tutorialTitle: '3D दंत ट्यूटोरियल',
    tutorialDesc: 'इंटरैक्टिव 3D वीडियो के माध्यम से दंत स्वास्थ्य के बारे में जानें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
