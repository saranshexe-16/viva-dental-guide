import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'हिंदी' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
