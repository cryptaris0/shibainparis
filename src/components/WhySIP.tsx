import { Card } from "@/components/ui/card";

const WhySIP = () => {
  const features = [
    {
      emoji: "🐕",
      title: "Universal Meme",
      description: "Everyone loves Shibas",
      color: "from-neon-pink to-french-rouge",
      bgColor: "bg-gradient-to-br from-neon-pink/20 to-french-rouge/20"
    },
    {
      emoji: "🇫🇷",
      title: "French Spirit", 
      description: "Chic, croissants and memes",
      color: "from-french-bleu to-electric-blue",
      bgColor: "bg-gradient-to-br from-french-bleu/20 to-electric-blue/20"
    },
    {
      emoji: "🚀",
      title: "Pump Potential",
      description: "A good meme needs no utility",
      color: "from-gold to-sunset-orange",
      bgColor: "bg-gradient-to-br from-gold/20 to-sunset-orange/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-french-blanc via-mint/10 to-french-cream relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-neon-pink/10 to-electric-blue/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-gold/10 to-mint/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-french-rouge via-electric-blue to-neon-pink mb-16 animate-bounce-in">
          Why $SIP? 🤔✨
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`p-8 text-center border-3 hover:border-transparent transition-all duration-500 ${feature.bgColor} backdrop-blur-sm hover:scale-110 animate-fade-in shadow-2xl hover:shadow-3xl`} 
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-8xl mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{feature.emoji}</div>
              <h3 className={`text-2xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-lg text-dark-text font-medium">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySIP;