const Description = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-neon-pink/10 via-french-cream to-electric-blue/10 relative overflow-hidden">
      {/* Fun background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/20 to-sunset-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-mint/20 to-electric-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-french-blanc/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 border-gradient-to-r from-neon-pink/30 to-electric-blue/30 animate-fade-in">
          <p className="text-xl md:text-2xl leading-relaxed text-dark-text font-medium">
            Shiba In Paris – the most chic Doge on the blockchain. No rockets 🚀 here, 
            just red wine 🍷, croissants 🥐 and the Eiffel Tower. 
            <br />
            <span className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-french-rouge via-gold to-electric-blue animate-pulse">
              Buy $SIP and join the French crypto lifestyle! 
            </span>
            <span className="text-3xl animate-wiggle inline-block">🥐</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;