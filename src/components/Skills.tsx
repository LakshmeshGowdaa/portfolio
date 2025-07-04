
const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Java", level: 80, color: "from-orange-400 to-red-600" },
        { name: "C", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-300 to-yellow-500" },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-red-500" },
        { name: "PHP", level: 70, color: "from-indigo-400 to-purple-600" },
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: "React", level: 85, color: "from-cyan-400 to-blue-600" },
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "SQL/MySQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 75, color: "from-green-400 to-green-600" },
        { name: "Git/GitHub", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Docker", level: 70, color: "from-blue-500 to-cyan-600" },
      ]
    },
    {
      category: "Design & Creative",
      skills: [
        { name: "UI/UX Design", level: 80, color: "from-pink-400 to-purple-600" },
        { name: "Figma", level: 85, color: "from-purple-400 to-pink-600" },
        { name: "Canva", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Premiere Pro", level: 70, color: "from-purple-500 to-indigo-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {["SEO", "Digital Marketing", "DevOps", "AI/ML", "Data Analysis", "Problem Solving"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transform transition-transform duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <br></br>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 ease-out group-hover:scale-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;
