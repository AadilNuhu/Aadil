import { useState } from 'react';
import srafa from '../assets/srafa.png';
import realEstate from '../assets/realestate.png';
import ageCalculator from '../assets/age-calculator.png';
import nufaz from '../assets/nufaz.png';
import webora from '../assets/webora.png';
import calculator from '../assets/calculator.png';
import random from '../assets/randomuser.png';
import todoapp from '../assets/todoapp.png';
import rockPaperScissors from '../assets/rockpaperscissors.png';
import photopit from '../assets/photo pit screen.png';
import rating from '../assets/interactive-rating-component.png';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Reduced and unified categories
  const projects = [
    {
      id: 1,
      title: "Nufaz E-Commerce",
      description: "A full-featured online store with secure payments, product management, and a modern admin dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web App",
      image: nufaz,
      link: "https://www.aadilnuhu.store/"
    },
    {
      id: 2,
      title: "Srafa Islamic School",
      description: "A dynamic educational website with course listings, events, and admissions for Srafa Islamic School.",
      tags: ["React", "Tailwind CSS"],
      category: "Web App",
      image: srafa,
      link: "https://srafaimmunaislamic.vercel.app/"
    },
    {
      id: 3,
      title: "Real Estate Manager",
      description: "A property management platform for listing, searching, and managing real estate properties.",
      tags: ["React", "Firebase"],
      category: "Web App",
      image: realEstate,
      link: ""
    },
    {
      id: 4,
      title: "Age Calculator",
      description: "Quickly calculate your age in years, months, and days with this easy-to-use tool.",
      tags: ["React", "JavaScript"],
      category: "Utility",
      image: ageCalculator,
      link: "https://age-calculator-app.vercel.app/"
    },
    {
      id: 5,
      title: "Webora Agency",
      description: "A creative agency portfolio site with service showcases, project highlights, and client testimonials.",
      tags: ["JavaScript", "API"],
      category: "Web App",
      image: webora,
      link: "https://webora.vercel.app/"
    },
    {
      id: 6,
      title: "Calculator App",
      description: "A sleek calculator app for basic arithmetic, featuring a clean and responsive design.",
      tags: ["React", "CSS"],
      category: "Utility",
      image: calculator,
      link: "https://calculator-app-phi-flax.vercel.app/"
    },
    {
      id: 7,
      title: "Random User Generator",
      description: "Generate random user profiles with photos and details for testing and demo purposes.",
      tags: ["React", "API"],
      category: "Utility",
      image: random,
      link: "https://calculator-app-phi-flax.vercel.app/"
    },
    {
      id: 8,
      title: "Todo App",
      description: "A productivity app for managing your daily tasks with a simple and intuitive interface.",
      tags: ["React", "LocalStorage"],
      category: "Utility",
      image: todoapp,
      link: ""
    },
    {
      id: 9,
      title: "Rock Paper Scissors Game",
      description: "A fun and interactive rock-paper-scissors game with score tracking and smooth animations.",
      tags: ["React", "Game"],
      category: "Game",
      image: rockPaperScissors,
      link: "https://calculator-app-phi-flax.vercel.app/"
    },
    {
      id: 10,
      title: "Photo Pit Gallery",
      description: "A beautiful gallery app for uploading, browsing, and sharing high-quality images.",
      tags: ["React", "Gallery"],
      category: "Media",
      image: photopit,
      link: "https://calculator-app-phi-flax.vercel.app/"
    },
    {
      id: 11,
      title: "Interactive Rating Component",
      description: "A reusable and interactive rating component for collecting user feedback with a modern UI.",
      tags: ["React", "Component"],
      category: "UI Component",
      image: rating,
      link: "https://calculator-app-phi-flax.vercel.app/"
    }
  ];

  // Only main categories
  const categories = ['All', 'Web App', 'Utility', 'Game', 'Media', 'UI Component'];

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
            Explore a selection of my recent projects, including web apps, utilities, games, and more.
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
                  href={project.link || '#'}
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
            href="/projects"
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