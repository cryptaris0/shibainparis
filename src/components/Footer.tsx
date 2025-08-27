const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-dark-text via-french-rouge/20 to-electric-blue/20 text-french-blanc text-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-neon-pink/10 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gold/10 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <p className="text-xl md:text-2xl font-bold mb-4">
            <span className="animate-bounce inline-block">🥖 </span>
            Powered by baguette, fueled by vin rouge 
            <span className="animate-wiggle inline-block"> 🍷</span>
            <span className="animate-bounce inline-block">🐕</span>
          </p>
          
          {/* Fun animated emoji row */}
          <div className="flex justify-center gap-6 mt-8 text-4xl">
            <span className="animate-float" style={{ animationDelay: '0s' }}>🥐</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🗼</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🍷</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>🐕</span>
            <span className="animate-float" style={{ animationDelay: '2s' }}>💎</span>
          </div>
          
          <div className="mt-8 text-sm opacity-70 animate-pulse">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-mint">
              Made with ❤️ in Paris • ShibaInParis 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;