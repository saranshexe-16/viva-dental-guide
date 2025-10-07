import { FileText, Calendar, User, Pill } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Prescription = () => {
  const { t } = useLanguage();

  // Sample prescription data
  const prescription = {
    patientName: 'John Doe',
    date: new Date().toLocaleDateString(),
    dentist: 'Dr. Sarah Johnson',
    medications: [
      {
        name: 'Amoxicillin 500mg',
        dosage: '1 capsule',
        frequency: '3 times daily',
        duration: '7 days',
        instructions: 'Take with food',
      },
      {
        name: 'Ibuprofen 400mg',
        dosage: '1 tablet',
        frequency: 'Every 6 hours',
        duration: '5 days',
        instructions: 'Take after meals',
      },
    ],
    notes: 'Follow up in 2 weeks. Continue regular brushing and flossing. Avoid hard foods on the affected side.',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="p-8 shadow-dental">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center pb-6 border-b">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{t('prescriptionTitle')}</h2>
            <p className="text-muted-foreground">Digital Prescription Record</p>
          </div>

          {/* Patient Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Patient</p>
                <p className="font-medium">{prescription.patientName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{prescription.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Dentist</p>
                <p className="font-medium">{prescription.dentist}</p>
              </div>
            </div>
          </div>

          {/* Medications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Pill className="h-5 w-5 text-primary" />
              Medications
            </h3>
            <div className="space-y-4">
              {prescription.medications.map((med, index) => (
                <Card key={index} className="p-4 bg-muted/50">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{med.name}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Dosage: </span>
                        <span className="font-medium">{med.dosage}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Frequency: </span>
                        <span className="font-medium">{med.frequency}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">{med.duration}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Instructions: </span>
                        <span className="font-medium">{med.instructions}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
            <p className="text-muted-foreground">{prescription.notes}</p>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t text-center text-sm text-muted-foreground">
            <p>This is a digital prescription. Keep it for your records.</p>
            <p className="mt-1">For questions, contact your dental provider.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Prescription;
