const DentalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Tooth shapes */}
      <div className="absolute top-10 right-1/4 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="animate-pulse-slow">
          <path
            d="M50 10 C30 10, 20 20, 20 35 C20 50, 25 70, 35 85 C40 92, 45 95, 50 95 C55 95, 60 92, 65 85 C75 70, 80 50, 80 35 C80 20, 70 10, 50 10 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-5">
        <svg viewBox="0 0 100 100" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
          <path
            d="M50 10 C30 10, 20 20, 20 35 C20 50, 25 70, 35 85 C40 92, 45 95, 50 95 C55 95, 60 92, 65 85 C75 70, 80 50, 80 35 C80 20, 70 10, 50 10 Z"
            fill="currentColor"
            className="text-secondary"
          />
        </svg>
      </div>
    </div>
  );
};

export default DentalBackground;
