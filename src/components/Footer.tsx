
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Lakshmesh Gowda M S
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Aspiring Software Engineer | AI & ML Enthusiast | Building innovative solutions 
              to shape the future of technology
            </p>

            <div className="flex justify-center space-x-8 mb-8">
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Lakshmesh Gowda
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Designed By Infynex
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
