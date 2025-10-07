import { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { t } = useLanguage();

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size should be less than 10MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        handleAnalysis();
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        handleAnalysis();
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleAnalysis = () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalyzing(false);
      toast.success('Analysis complete! Check your results.');
    }, 3000);
  };

  return (
    <Card className="p-8 shadow-dental">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Upload className="h-8 w-8 text-primary" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-2">{t('uploadImage')}</h2>
          <p className="text-muted-foreground">{t('uploadDesc')}</p>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-border rounded-lg p-12 transition-smooth hover:border-primary hover:bg-primary/5"
        >
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Uploaded dental"
                className="max-h-64 mx-auto rounded-lg shadow-lg"
              />
              {analyzing && (
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>{t('analyzing')}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <label htmlFor="file-upload">
                  <Button variant="default" className="cursor-pointer" asChild>
                    <span>{t('selectImage')}</span>
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('dragDrop')}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ImageUpload;
