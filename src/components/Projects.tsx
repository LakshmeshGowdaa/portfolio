
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI Smart Board",
      description: "An interactive smart board application powered by AI that recognizes gestures and handwriting, revolutionizing digital presentation experiences.",
      tags: ["Python", "AI", "Computer Vision", "Neural Networks", "UI/UX"],
      gradient: "from-purple-500 to-pink-500",
      icon: "📋"
    },
    {
      title: "AI Driver Monitoring System",
      description: "An intelligent system that monitors driver behavior and detects drowsiness using computer vision and machine learning algorithms to enhance road safety.",
      tags: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "Computer Vision"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🚗"
    },
    {
      title: "Air Quality Prediction",
      description: "A predictive model that analyzes environmental data to forecast air quality levels, helping communities make informed decisions about outdoor activities.",
      tags: ["Python", "Scikit-learn", "Pandas", "Data Analysis", "API Integration"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🌍"
    },
    {
      title: "Gender and Age Detection",
      description: "A real-time computer vision application that accurately detects and classifies gender and age from facial features using deep learning models.",
      tags: ["Python", "Deep Learning", "OpenCV", "CNN", "Image Processing"],
      gradient: "from-orange-500 to-red-500",
      icon: "👤"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
