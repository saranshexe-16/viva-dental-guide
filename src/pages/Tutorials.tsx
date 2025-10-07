import VideoTutorials from '@/components/VideoTutorials';
import DentalBackground from '@/components/DentalBackground';

const Tutorials = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <DentalBackground />
      <div className="max-w-7xl mx-auto">
        <VideoTutorials />
      </div>
    </div>
  );
};

export default Tutorials;
