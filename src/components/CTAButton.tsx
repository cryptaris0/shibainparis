import { Button } from "@/components/ui/button";

const CTAButton = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-electric-blue/20 via-french-beige to-neon-pink/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gold/30 to-sunset-orange/30 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-bounce-in">
          <Button 
            size="lg" 
            className="text-2xl px-16 py-8 bg-gradient-to-r from-french-rouge via-neon-pink to-electric-blue hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-2xl text-french-blanc font-black rounded-3xl border-4 border-gold hover:border-mint animate-pulse-glow relative overflow-hidden group"
            onClick={() => window.open('https://pump.fun/coin/88SkRWd9djwC8nDhzTQeMmR1ju2C9mU5BP5Vwdyng8Gw', '_blank')}
          >
            <span className="relative z-10">🚀 Buy on Pump.fun 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
        
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg text-dark-text font-bold mb-2">
            🎯 Click to trade $SIP on Pump.fun 🎯
          </p>
          <p className="text-sm text-electric-blue font-medium animate-pulse">
            ⚡ To the moon with baguettes! ⚡
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAButton;