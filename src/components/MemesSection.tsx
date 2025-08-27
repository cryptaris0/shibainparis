const MemesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mint/20 via-french-cream to-gold/20 relative overflow-hidden">
      {/* Fun animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-pink/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-40 w-24 h-24 bg-electric-blue/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-20 w-28 h-28 bg-gold/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-electric-blue to-gold mb-16 animate-wiggle">
          Community Memes 🎨✨
        </h2>
        
        <div className="bg-gradient-to-br from-french-blanc/90 to-mint/20 p-12 rounded-3xl border-4 border-dashed border-electric-blue/50 text-center backdrop-blur-sm shadow-2xl hover:border-neon-pink/70 transition-all duration-500 animate-fade-in">
          <div className="text-8xl mb-6 animate-float">🎨</div>
          <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-french-rouge to-electric-blue mb-6 animate-pulse">
            Coming Soon! 🚀
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-medium">
            Post your memes on Twitter with 
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-blue animate-pulse"> #ShibaInParis </span> or 
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-blue animate-pulse"> $SIP </span> 
            to appear here soon! 
            <br />
            <span className="text-2xl animate-bounce inline-block">🐕</span>
            <span className="font-bold text-gold"> Show us your best $SIP content! </span>
            <span className="text-2xl animate-bounce inline-block">🇫🇷</span>
          </p>
          
          {/* Fun emoji decoration */}
          <div className="flex justify-center gap-4 mt-8 text-3xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🥐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍷</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🗼</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🐕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💎</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemesSection;