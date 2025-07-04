
const Experience = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "IBM/IITG/Rooman",
      duration: "2025",
      type: "Internship",
      description: "Gained hands-on experience with cloud platforms and DevOps practices. Implemented CI/CD pipelines and managed containerized applications using Docker and Kubernetes.",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Git"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "AI Engineer intren",
      company: "Parvam Software Solutions",
      duration: "2024",
      type: "Internship",
      description: "Developed AI-powered solutions and implemented machine learning models for real-world applications. Worked on natural language processing and computer vision projects.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "AI Developer Intren",
      company: "Inventeron technologies",
      duration: "2023",
      type: "Internship",
      description: "Built intelligent systems and automated workflows using AI technologies. Collaborated with cross-functional teams to integrate AI solutions into existing products.",
      skills: ["Machine Learning", "Python", "API Development", "Data Analysis"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Python Developer Intren",
      company: "Aqumenz Automation Pvt Ltd",
      duration: "2022",
      type: "Internship",
      description: "Developed robust backend systems and APIs using Python. Implemented database solutions and optimized application performance for scalable web applications.",
      skills: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
      color: "from-green-500 to-emerald-600"
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${experience.color} mb-3`}>
                      {experience.type}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</h4>
                    <p className="text-gray-500 mb-4 font-medium">{experience.duration}</p>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
