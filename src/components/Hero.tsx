import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white"
    >
      {/* Blurred Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 animate-fade-up">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Lakshmesh Gowda M S
          </span>
        </h1>

        <div className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium animate-fade-up delay-200">
          Aspiring Software Engineer
        </div>

        <div className="text-xl md:text-2xl text-blue-600 mb-6 font-medium animate-fade-up delay-300">
          AI & ML Enthusiast
        </div>

        <div className="text-lg text-gray-600 mb-8 flex items-center justify-center gap-2 animate-fade-up delay-400">
          <span>📍</span>
          <span>Bengaluru, Karnataka</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up delay-500">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
          </Button>

          <Button
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
