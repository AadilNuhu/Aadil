import img from '../assets/Aadil.jpg'
import cert from '../assets/cert.png'
import { FaCog, FaCss3, FaDatabase, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaWind } from 'react-icons/fa';
const About = () => {
  const milestones = [
    {
      year: "22",
      title: "Started My Journey",
      description: "Began as a web developer, learning HTML, CSS, and JavaScript fundamentals."
    },
    {
      year: "23",
      title: "Expanded Skills",
      description: "Mastered front-end frameworks like React and started exploring back-end development."
    },
    {
      year: "24",
      title: "Freelance Work",
      description: "Started taking on client projects, building real-world applications and websites."
    },
    {
      year: "25",
      title: "Full-Stack Development",
      description: "Combining Front end with Backend to create Full and Complete web applications."
    }
  ];

  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 className='text-white'/> },
    { name: "CSS", level: 95, icon: <FaCss3 className='text-white'/> },
    { name: "JavaScript", level: 90, icon: <FaJs className='text-white' /> },
    { name: "React", level: 85, icon: <FaReact className='text-white'/> },
    { name: "Node.js", level: 80, icon: <FaNodeJs className='text-white' /> },
    { name: "Python", level: 75, icon: <FaPython className='text-white'/> },
    { name: "Git", level: 90, icon: <FaGitAlt className='text-white'/> },
    { name: "GitHub", level: 90, icon: <FaGithub className='text-white'/> },
    { name: "MySQL", level: 80, icon: <FaDatabase className='text-white'/> },
    { name: "PHP", level: 75, icon: <FaPhp className='text-white'/> },
    { name: "Express", level: 85, icon:  <FaCog className='text-white'/>},
    { name: "Tailwind CSS", level: 90, icon: <FaWind className='text-white'/> }
  ];

  return (
    <>
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0f172a' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
              About Me
            </h2>
            <div
              className="w-20 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: '#22d3ee' }}
            ></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 ">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4"
                style={{
                  borderColor: '#22d3ee',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                }}
              >
                {/* Replace with your actual image */}
                <div
                  className="w-full h-full bg-gray-700 flex flex-start items-center justify-center text-4xl"
                  style={{ color: '#e2e8f0' }}
                >
                  <img src={img} alt="" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3" style={{ color: '#e2e8f0' }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Hi, I'm <span style={{ color: '#22d3ee' }}>Aadil Nuhu</span>
              </h3>

              <p className="text-lg mb-6">
                I'm a passionate Software and Web developer, currently exploring data science (ML Engineer) with a keen eye for detail.
              </p>

              <h4 className="text-xl font-semibold mb-4" style={{ color: '#22d3ee' }}>
                My Journey
              </h4>

              <p className="mb-8">
                I started my journey as a web developer over 2 years ago, diving deep into the world of front-end and back-end development. My passion for technology and design led me to work on various projects, each adding a new dimension to my skill set.
              </p>

              <p className="mb-8">
                Throughout my career, I have had the opportunity to collaborate with diverse teams and clients, which has enriched my experience and honed my skills. I specialize in creating responsive, user-friendly websites and applications that not only meet client needs but also exceed their expectations.
              </p>

              <p className="mb-8">
                In addition to my technical skills, I bring a creative touch to my work, ensuring that every project I undertake is visually appealing and aligned with modern design principles.
              </p>

              {/* Timeline */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6" style={{ color: '#22d3ee' }}>
                  Career Milestones
                </h4>

                <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:w-1 before:left-4 before:bg-gray-600">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative pl-12">
                      <div
                        className="absolute font-bold top-1 left-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#22d3ee', color: '#0f172a' }}
                      >
                        {milestone.year}
                      </div>
                      <div
                        className="p-6 rounded-lg"
                        style={{ backgroundColor: '#1e293b' }}
                      >
                        <h5 className="font-semibold text-lg mb-2">{milestone.title}</h5>
                        <p style={{ color: '#cbd5e1' }}>{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0f172a' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
              My Skills
            </h2>
            <div
              className="w-20 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: '#22d3ee' }}
            ></div>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: '#e2e8f0' }}>
              Technologies I work with and my proficiency level in each
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: '#e2e8f0' }}
                  >
                    {skill.name}
                  </h3>
                  <span className="ml-auto font-medium" style={{ color: '#22d3ee' }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: '#22d3ee'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
        <h1 className='bg-gray-800 text-white font-bold text-center py-5 md:text-5xl text-2xl'>All Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-800">
        <img src={cert} alt="" className='w-full' />
        <img src={cert} alt="" className='w-full' />
        <img src={cert} alt="" className='w-full' />
      </div>
    </>
  );
};

export default About;