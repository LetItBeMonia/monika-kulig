export const BgDots = ({ size = 1, numberOfDots = 30, duration = 100 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: numberOfDots }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "#fff7ed",
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 100}%`,
            animation: `drift-up ${duration}s linear infinite`,
            animationDelay: `${Math.random() * -duration}s`,
            // animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            // animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};
