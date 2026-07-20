import img from '../assets/Aadil.jpg'
import cert from '../assets/cert.png'
import {
  FaAngular,
  FaCog, FaCss3, FaDatabase, FaFigma, FaGitAlt, FaGithub,
  FaHtml5, FaJs, FaNeos, FaNodeJs, FaPhp, FaPython, FaReact, FaTerminal, FaWind
} from 'react-icons/fa';

const COLORS = {
  bg: '#0f172a',
  text: '#e2e8f0',
  muted: '#94a3b8',
  accent: '#22d3ee',
  card: '#1e293b',
  border: '#334155',
};

const MILESTONES = [
  { year: '22', title: 'Started my journey', description: 'Began as a web developer, learning HTML, CSS, and JavaScript fundamentals.' },
  { year: '23', title: 'Expanded skills', description: 'Picked up React and started exploring back-end development.' },
  { year: '24', title: 'Freelance work', description: 'Took on client projects, building real-world applications and websites.' },
  { year: '25', title: 'Full-stack development', description: 'Combining front end with back end to ship complete web applications.' },
];

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3 /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Next js', icon: <FaNeos /> },
      { name: 'Tailwind CSS', icon: <FaWind /> },
      { name: 'Figma', icon: <FaFigma /> },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <FaCog /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Postgres', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <FaDatabase /> },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      // { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Post Man', icon: <FaTerminal /> },
    ],
  },
];

const CERTIFICATES = [
  { image: cert, title: 'Certificate' },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-10" style={{ backgroundColor: COLORS.accent }} />
      <span
        className="text-xs font-medium tracking-[0.2em] uppercase"
        style={{ color: COLORS.accent }}
      >
        {children}
      </span>
    </div>
  );
}

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-5xl mx-auto">

        {/* ---------- Intro ---------- */}
        <Eyebrow>About</Eyebrow>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-14 max-w-2xl"
          style={{ color: COLORS.text }}
        >
          The developer behind the code.
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="w-full lg:w-1/3">
            <div
              className="w-full aspect-[4/5] rounded-lg overflow-hidden border"
              style={{ borderColor: COLORS.border }}
            >
              <img src={img} alt="Aadil Nuhu" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.text }}>
              Hi, I'm <span style={{ color: COLORS.accent }}>Aadil Nuhu</span>
            </h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              I'm a full stack software developer, interested in AI
              and machine learning, with a habit of sweating the details.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Over the past 3+ years I've worked across the front end and back end,
              collaborating with different teams and clients along the way. I focus on
              building responsive, user friendly applications that hold up under real
              use, not just in a demo.
            </p>
            <p className="leading-relaxed" style={{ color: COLORS.muted }}>
              I bring a design eye to that work too  every project I take on needs to
              look intentional, not just function correctly.
            </p>
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <div className="mb-20">
          <h4 className="text-sm font-semibold tracking-wide uppercase mb-8" style={{ color: COLORS.text }}>
            Career milestones
          </h4>

          <div className="space-y-6 relative before:absolute before:top-1 before:bottom-1 before:w-px before:left-4 before:bg-[#334155]">
            {MILESTONES.map((milestone) => (
              <div key={milestone.year} className="relative pl-12">
                <div
                  className="absolute text-xs font-bold top-0 left-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLORS.accent, color: COLORS.bg }}
                >
                  {milestone.year}
                </div>
                <div className="p-5 rounded-lg border" style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}>
                  <h5 className="font-semibold mb-1" style={{ color: COLORS.text }}>
                    {milestone.title}
                  </h5>
                  <p className="text-sm" style={{ color: COLORS.muted }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Skills ---------- */}
        <div className="mb-20">
          <h4 className="text-sm font-semibold tracking-wide uppercase mb-8" style={{ color: COLORS.text }}>
            What I work with
          </h4>

          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span
                  className="text-sm w-24 shrink-0"
                  style={{ color: COLORS.muted }}
                >
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border"
                      style={{ borderColor: COLORS.border, color: COLORS.text }}
                    >
                      <span style={{ color: COLORS.accent }}>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Certificates ---------- */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase mb-8" style={{ color: COLORS.text }}>
            Certifications
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES.map((certificate, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: COLORS.border, backgroundColor: COLORS.card }}
              >
                <img src={certificate.image} alt={certificate.title} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;