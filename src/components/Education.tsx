
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "RR Institute of Technology Bangalore",
      duration: "2021 - 2025",
      grade: "CGPA: 8.1/10",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and emerging technologies like AI and machine learning.",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600"
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Government Polytechnic Belur",
      duration: "2018 - 2021",
      grade: "70%",
      description: "Strong foundation in programming, web development, and computer applications. Gained practical experience in software development and database management.",
      icon: "📚",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                    <span className="filter drop-shadow-lg">{edu.icon}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <span className="text-gray-600 font-medium">📅 {edu.duration}</span>
                      <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${edu.color}`}>
                        {edu.grade}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
                <span className="text-blue-800 font-semibold">🏆 Academic Excellence</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                <span className="text-purple-800 font-semibold">💡 Innovation Focus</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                <span className="text-green-800 font-semibold">🎯 Goal-Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
