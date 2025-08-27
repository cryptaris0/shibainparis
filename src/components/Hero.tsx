import shibaHero from "@/assets/shiba-paris-hero.jpg";

const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-br from-french-beige via-french-cream to-mint/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-pink/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-electric-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo/Hero Image */}
        <div className="mb-8 animate-bounce-in">
          <img 
            src={shibaHero} 
            alt="ShibaInParis - Cool Shiba Inu with sunglasses in front of Eiffel Tower" 
            className="w-80 h-60 object-cover mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow border-4 border-gradient-to-r from-neon-pink to-electric-blue"
          />
        </div>
        
        {/* Contract Address */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-french-rouge via-electric-blue to-neon-pink mb-6 animate-wiggle">
            Shiba In Paris
          </h1>
          <div className="bg-gradient-to-r from-french-blanc to-mint/10 p-6 rounded-3xl shadow-2xl border-2 border-electric-blue/50 hover:border-neon-pink/70 transition-all duration-300 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wider text-electric-blue mb-2 font-bold animate-pulse">
              ✨ Contract Address ✨
            </p>
            <p className="text-2xl md:text-3xl font-mono font-bold text-dark-text break-all bg-gradient-to-r from-gold to-sunset-orange bg-clip-text text-transparent">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;