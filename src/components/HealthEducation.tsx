import { CheckCircle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const HealthEducation = () => {
  const { t } = useLanguage();

  const healthyBenefits = [
    t('healthyList1'),
    t('healthyList2'),
    t('healthyList3'),
    t('healthyList4'),
    t('healthyList5'),
  ];

  const unhealthyConsequences = [
    t('unhealthyList1'),
    t('unhealthyList2'),
    t('unhealthyList3'),
    t('unhealthyList4'),
    t('unhealthyList5'),
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Healthy Teeth */}
      <Card className="p-6 shadow-dental border-2 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">{t('healthyTeeth')}</h2>
          </div>

          <ul className="space-y-3">
            {healthyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              Regular dental care and good oral hygiene habits lead to a healthier, happier life with confidence and well-being.
            </p>
          </div>
        </div>
      </Card>

      {/* Unhealthy Teeth */}
      <Card className="p-6 shadow-dental border-2 border-destructive/20">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-destructive/10">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-destructive">{t('unhealthyTeeth')}</h2>
          </div>

          <ul className="space-y-3">
            {unhealthyConsequences.map((consequence, index) => (
              <li key={index} className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{consequence}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
            <p className="text-sm text-muted-foreground">
              Neglecting oral health can have serious consequences affecting not just your teeth, but your overall health and quality of life.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HealthEducation;
