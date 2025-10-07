import ImageUpload from '@/components/ImageUpload';
import DentalBackground from '@/components/DentalBackground';

const Assessment = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <DentalBackground />
      <div className="max-w-4xl mx-auto">
        <ImageUpload />
      </div>
    </div>
  );
};

export default Assessment;
