import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoTutorials = () => {
  const { t } = useLanguage();

  const tutorials = [
    {
      title: 'Proper Brushing Technique',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400',
    },
    {
      title: 'Flossing Demonstration',
      duration: '2:30',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400',
    },
    {
      title: 'Understanding Tooth Decay',
      duration: '5:15',
      thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=400',
    },
    {
      title: 'Gum Disease Prevention',
      duration: '4:20',
      thumbnail: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">{t('tutorialTitle')}</h2>
        <p className="text-muted-foreground">{t('tutorialDesc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="overflow-hidden shadow-dental hover:shadow-glow transition-smooth cursor-pointer group">
            <div className="relative">
              <img
                src={tutorial.thumbnail}
                alt={tutorial.title}
                className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                <Button size="lg" className="rounded-full" variant="secondary">
                  <Play className="h-6 w-6 mr-2" />
                  Watch Now
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {tutorial.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{tutorial.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoTutorials;
