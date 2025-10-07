import { useLanguage } from '@/contexts/LanguageContext';
import DentalBackground from '@/components/DentalBackground';
import dentalHero from '@/assets/dental-hero.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    'AI-powered dental assessment',
    '24/7 intelligent chatbot support',
    'Interactive 3D video tutorials',
    'Comprehensive health education',
    'Digital prescription management',
    'Multi-language support',
  ];

  return (
    <div className="min-h-screen">
      <DentalBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Advanced <span className="text-primary">Dental Health</span> Assessment
              </h1>
              <p className="text-xl text-muted-foreground">
                Experience cutting-edge AI technology for comprehensive dental analysis, 
                personalized recommendations, and expert guidance in your preferred language.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white shadow-dental hover:shadow-glow transition-smooth"
                  onClick={() => navigate('/assessment')}
                >
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/chatbot')}
                >
                  Try AI Assistant
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={dentalHero}
                  alt="Dental Health"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-dental animate-float">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-dental animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Dental Care Platform</h2>
            <p className="text-xl text-muted-foreground">Everything you need for optimal oral health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Assessment',
                description: 'Upload dental images for instant AI-powered analysis and recommendations',
                icon: '🦷',
              },
              {
                title: '3D Learning',
                description: 'Interactive video tutorials demonstrate proper techniques and procedures',
                icon: '📹',
              },
              {
                title: 'Expert Guidance',
                description: 'Get personalized advice from our AI assistant trained on dental expertise',
                icon: '🤖',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-dental hover:shadow-glow transition-smooth">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
