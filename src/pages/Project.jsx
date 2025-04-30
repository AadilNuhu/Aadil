import { useState } from 'react';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
      image: "/projects/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern responsive portfolio for a creative professional.",
      tags: ["React", "Tailwind CSS"],
      category: "Web Design",
      image: "/projects/portfolio.jpg"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop functionality.",
      tags: ["React", "Firebase"],
      category: "Web Development",
      image: "/projects/taskapp.jpg"
    },
    {
      id: 4,
      description: "Machine learning model for image classification.",
      title: "Image Recognition System",
      tags: ["Python", "TensorFlow"],
      category: "Data Science",
      image: "/projects/ml.jpg"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps.",
      tags: ["JavaScript", "API"],
      category: "Web Development",
      image: "/projects/weather.jpg"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Dashboard for tracking engagement metrics.",
      tags: ["React", "Chart.js"],
      category: "Data Visualization",
      image: "/projects/analytics.jpg"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
            My Projects
          </h2>
          <div 
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: '#22d3ee' }}
          ></div>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#e2e8f0' }}>
            A collection of my recent work across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl"
              style={{ 
                backgroundColor: '#1e293b',
                border: '1px solid #334155'
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#e2e8f0' }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: '#cbd5e1' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: '#22d3ee20',
                        color: '#22d3ee'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href="#"
                  className="w-full text-center px-4 py-2 rounded-md font-medium transition-colors"
                  style={{ 
                    backgroundColor: '#3b82f6',
                    color: '#e2e8f0'
                  }}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#projects" 
            className="inline-block px-8 py-3 rounded-lg font-medium border-2 transition-all duration-300 transform hover:scale-105"
            style={{ 
              borderColor: '#22d3ee',
              color: '#22d3ee'
            }}
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;