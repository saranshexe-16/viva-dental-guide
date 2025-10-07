import Prescription from '@/components/Prescription';
import DentalBackground from '@/components/DentalBackground';

const PrescriptionPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <DentalBackground />
      <div className="max-w-7xl mx-auto">
        <Prescription />
      </div>
    </div>
  );
};

export default PrescriptionPage;
