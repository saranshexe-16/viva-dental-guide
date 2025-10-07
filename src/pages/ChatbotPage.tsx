import Chatbot from '@/components/Chatbot';
import DentalBackground from '@/components/DentalBackground';

const ChatbotPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <DentalBackground />
      <div className="max-w-4xl mx-auto">
        <Chatbot />
      </div>
    </div>
  );
};

export default ChatbotPage;
