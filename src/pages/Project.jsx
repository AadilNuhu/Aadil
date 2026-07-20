import { useState } from 'react';
import srafa from '../assets/srafa.png';
import realEstate from '../assets/realestate.png';
import genzstack from '../assets/genzstack.png';
import cineroll from '../assets/cineroll.png';
import nextflix from '../assets/nextflix.png';
import webora from "../assets/webora.png"
import whitelines from "../assets/2i.png"


const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'GENZStack',
      description: 'A community-driven platform for developers to ask questions, share knowledge, and showcase projects.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'Full Stack',
      image: genzstack,
      link: 'https://genzstack.vercel.app/'
    },
    {
      id: 2,
      title: 'CineRoll',
      description: 'A personal movie watchlist app where users can organize titles, update details, and manage posters.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      category: 'Full Stack',
      image: cineroll,
      link: 'https://cinerollio.vercel.app/'
    },
    {
      id: 3,
      title: 'Nextflix',
      description: 'A modern movie discovery experience focused on browsing trending titles and exploring new releases.',
      tags: ['React', 'Tailwind CSS'],
      category: 'Frontend',
      image: nextflix,
      link: 'https://nextflixhub.vercel.app'
    },
    {
      id: 4,
      title: 'Srafa Islamic School',
      description: 'A polished educational website with course highlights, school events, and admission information.',
      tags: ['React', 'Tailwind CSS'],
      category: 'Frontend',
      image: srafa,
      link: 'https://srafaimmunaislamic.vercel.app/'
    },
    {
      id: 5,
      title: 'Real Estate Manager',
      description: 'A property management platform built for browsing, searching, and organizing real estate listings.',
      tags: ['Angular', 'Tailwind'],
      category: 'Full Stack',
      image: realEstate,
      link: 'https://estate-agency-sable.vercel.app/'
    },
    {
      id: 6,
      title: 'Webora',
      description: 'A responsive web development agency website that highlights professional web design, development, and branding services for businesses of all sizes.',
      tags: ['React', 'Tailwind'],
      category: 'Frontend',
      image: webora,
      link: 'https://webora.vercel.app/'
    },
    {
      id: 7,
      title: '2I Whitelines',
      description: "A responsive car rental, sales, and export website designed to help customers browse available vehicles, explore services, and make inquiries with ease.", tags: ['React', 'Tailwind'],
      category: 'Frontend',
      image: whitelines,
      link: 'https://2i-whitelines.vercel.app/'
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

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
            A curated selection of projects grouped by focus, from full-stack products to polished front-end experiences.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default Project;