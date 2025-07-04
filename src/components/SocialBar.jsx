import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 text-2xl text-blue-600 z-50">
      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-600 transition-colors"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-700 transition-colors"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-800 transition-colors"
      >
        <FaGithub />
      </a>

      {/* Extra professional link – replace with whatever you like */}
      <a
        href="https://yourportfolio.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Portfolio"
        className="hover:text-green-600 transition-colors"
      >
        <FaGlobe />
      </a>
    </div>
  );
};

export default SocialBar;
