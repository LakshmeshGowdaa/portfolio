
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              I am a highly motivated Software Engineer with a strong foundation in <span className="text-purple-600 font-semibold"> Computer</span>  <span className="text-blue-600 font-semibold"> Science </span>  and a deep passion for
              <span className="text-blue-600 font-semibold"> Artificial Intelligence and Machine Learning</span>. 
              Having successfully completed my Bachelor of Engineering in Computer Science,
              I am motivated by the transformative power of technology to solve real-world challenges and create meaningful impact.
            </p>
            
            <p>
              My journey in tech has been enriched by diverse internship experiences across 
              <span className="text-purple-600 font-semibold"> DevOps, Python Development, and AI Engineering</span>. 
              I believe in continuous learning and staying updated with the latest technological advancements 
              to create innovative solutions that make a difference.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new AI frameworks, contributing to open-source projects, 
              or designing user-friendly interfaces. My goal is to leverage technology to build products that 
              enhance user experiences and drive digital transformation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-700">Internships Completed</div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">13+</div>
              <div className="text-gray-700">Projects Built</div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
              <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
              <div className="text-gray-700">Years of Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
