import { useState, useEffect } from 'react';
import { FaSearch,FaCode,FaRocket,FaBook,FaLaptopCode,FaShoppingCart,FaCog, FaPencilRuler, FaUserTie, FaLayerGroup, FaVial } from 'react-icons/fa';

const Home = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Software Engineer',
        'Web Developer',
        'Freelancer'
    ];

    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseBetweenRoles = 2000;

    useEffect(() => {
        const typeWriter = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                // Deleting text
                setCurrentText(currentRole.substring(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);

                if (currentIndex === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
                }
            } else {
                // Typing text
                setCurrentText(currentRole.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);

                if (currentIndex === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
                }
            }
        };

        const timer = setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentIndex, currentRoleIndex, isDeleting]);

    const processSteps = [
        {
            number: "01",
            title: "Discovery",
            description: "I begin by thoroughly understanding your project requirements, business goals, and target audience through detailed discussions and research.",
            icon: <FaSearch className='text-blue-300' />
        },
        {
            number: "02",
            title: "Planning",
            description: "I create a comprehensive project roadmap with milestones, deliverables, and timelines to ensure we're aligned on expectations.",
            icon: <FaBook className='text-blue-300' />
        },
        {
            number: "03",
            title: "Design",
            description: "I craft intuitive user interfaces and experiences with wireframes and prototypes, focusing on usability and aesthetic appeal.",
            icon: <FaPencilRuler className='text-blue-300'/>
        },
        {
            number: "04",
            title: "Development",
            description: "Using modern technologies and best practices, I build robust, scalable solutions with clean, maintainable code.",
            icon: <FaCode className='text-blue-300'/>
        },
        {
            number: "05",
            title: "Testing",
            description: "I rigorously test the product across devices and scenarios to ensure flawless performance and user experience.",
            icon: <FaVial className='text-blue-300'/>
        },
        {
            number: "06",
            title: "Launch & Support",
            description: "After deployment, I provide ongoing support and maintenance to keep your digital product running smoothly.",
            icon: <FaRocket className='text-blue-300' />
        }
    ];

    const services = [
        {
            title: "Web Development",
            description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS for optimal performance and user experience.",
            icon: <FaLaptopCode className='text-gray-900' />,
            features: [
                "Responsive Design",
                "SEO Optimized",
                "Performance Tuning",
                "Cross-browser Compatibility"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces designed to engage users and drive conversions with thoughtful user journeys.",
            icon: <FaPencilRuler />,
            features: [
                "Wireframing & Prototyping",
                "User Research",
                "Interaction Design",
                "Design Systems"
            ]
        },
        {
            title: "Full-Stack Solutions",
            description: "Complete web applications with both frontend and backend development using technologies like Node.js, Express, and MongoDB.",
            icon: <FaLayerGroup />,
            features: [
                "API Development",
                "Database Design",
                "Authentication Systems",
                "Cloud Integration"
            ]
        },
        {
            title: "Website Maintenance",
            description: "Ongoing support and updates to keep your website secure, fast, and up-to-date with the latest technologies.",
            icon: <FaCog />,
            features: [
                "Security Updates",
                "Content Updates",
                "Performance Monitoring",
                "Technical Support"
            ]
        },
        {
            title: "E-Commerce Solutions",
            description: "Online stores with seamless shopping experiences, secure payment gateways, and inventory management.",
            icon: <FaShoppingCart className='text-gray-800' />,
            features: [
                "Shopping Cart Integration",
                "Payment Processing",
                "Product Management",
                "Responsive Design"
            ]
        },
        {
            title: "Consulting",
            description: "Expert advice on technology stack selection, architecture design, and digital strategy for your business.",
            icon: <FaUserTie />,
            features: [
                "Technical Audits",
                "Project Planning",
                "Code Reviews",
                "Best Practices"
            ]
        }
    ];

    return (
        <>
            <section
                className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: '#0f172a' }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span
                            className="inline-block h-1 w-20 rounded-full"
                            style={{ backgroundColor: '#22d3ee' }}
                        ></span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#e2e8f0' }}>
                        Hi, I'm <span style={{ color: '#22d3ee' }}>Aadil Nuhu</span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 h-12" style={{ color: '#e2e8f0' }}>
                        I am a <span style={{ color: '#22d3ee' }}>{currentText}</span>
                        <span className="animate-pulse">|</span>
                    </h2>

                    <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#e2e8f0' }}>
                        I build exceptional digital experiences with modern web technologies.
                        Let's create something amazing together.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/contact"
                            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                            style={{
                                backgroundColor: '#3b82f6',
                                color: '#e2e8f0'
                            }}
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/projects"
                            className="px-8 py-3 rounded-lg font-medium border-2 transition-all duration-300 transform hover:scale-105"
                            style={{
                                borderColor: '#22d3ee',
                                color: '#22d3ee'
                            }}
                        >
                            View My Work
                        </a>
                    </div>

                    <div className="mt-16">
                        <a
                            href="#about"
                            className="inline-flex flex-col items-center text-sm font-medium"
                            style={{ color: '#e2e8f0' }}
                        >
                            <span>Scroll Down</span>
                            <svg
                                className="mt-2 animate-bounce"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: '#22d3ee' }}
                            >
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: '#0f172a' }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
                            Welcome to My Portfolio
                        </h2>
                        <div
                            className="w-20 h-1 mx-auto mb-6 rounded-full"
                            style={{ backgroundColor: '#22d3ee' }}
                        ></div>
                    </div>

                    <div className="space-y-8" style={{ color: '#e2e8f0' }}>
                        <p className="text-lg leading-relaxed">
                            Welcome to my professional portfolio! I am <span style={{ color: '#22d3ee' }}>Aadil Nuhu</span>, a passionate Software and Web developer with a flair for creating visually appealing and highly functional websites. My work is driven by the desire to combine aesthetics with usability to deliver the best possible user experience.
                        </p>

                        <p className="text-lg leading-relaxed">
                            With over <span style={{ color: '#22d3ee' }}>2 years of experience</span> in the industry, I have developed a diverse skill set that spans front-end development, user experience (UX) design, and interactive media. My expertise includes working with <span style={{ color: '#22d3ee' }}>HTML, CSS, JavaScript, PHP, MySQL</span> and modern frameworks like <span style={{ color: '#22d3ee' }}>React and Tailwind CSS</span>. I also have a solid understanding of back-end technologies like <span style={{ color: '#22d3ee' }}>Node js + Express</span>, which enables me to build full-stack applications that are both powerful and scalable.
                        </p>

                        <p className="text-lg leading-relaxed">
                            My approach is centered around understanding the unique needs of each client. I take the time to listen and gather insights about your vision and goals. This collaborative process ensures that the solutions I provide are tailored to your specific requirements and deliver maximum value.
                        </p>

                        <p className="text-lg leading-relaxed">
                            When I'm not coding, I enjoy <span style={{ color: '#22d3ee' }}>playing games, watching movies, participating in coding challenges</span> etc. These hobbies keep me inspired and creative, and often influence my work in subtle ways. I am always on the lookout for new challenges and opportunities to learn and grow.
                        </p>
                    </div>


                </div>
            </section>


            {/* MY DEVELOPMENT PROCESS SECTION */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: '#0f172a' }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
                            My Development Process
                        </h2>
                        <div
                            className="w-20 h-1 mx-auto rounded-full"
                            style={{ backgroundColor: '#22d3ee' }}
                        ></div>
                        <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: '#e2e8f0' }}>
                            A structured approach to delivering exceptional results for every project
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                                style={{
                                    backgroundColor: '#1e293b',
                                    border: '1px solid #334155'
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full mr-4 text-xl"
                                        style={{
                                            backgroundColor: '#22d3ee',
                                            color: '#0f172a'
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: '#e2e8f0' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <span className="ml-auto text-2xl">{step.icon}</span>
                                </div>
                                <p
                                    className="text-gray-300"
                                    style={{ color: '#cbd5e1' }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: '#0f172a' }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
                            My Services
                        </h2>
                        <div
                            className="w-20 h-1 mx-auto rounded-full mb-6"
                            style={{ backgroundColor: '#22d3ee' }}
                        ></div>
                        <p className="max-w-2xl mx-auto text-lg" style={{ color: '#e2e8f0' }}>
                            Comprehensive digital solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] group"
                                style={{
                                    backgroundColor: '#1e293b',
                                    border: '1px solid #334155'
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full mr-4 text-xl group-hover:rotate-6 transition-transform duration-300"
                                        style={{
                                            backgroundColor: '#22d3ee',
                                            color: '#0f172a'
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: '#e2e8f0' }}
                                    >
                                        {service.title}
                                    </h3>
                                </div>
                                <p
                                    className="mb-4"
                                    style={{ color: '#cbd5e1' }}
                                >
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                            style={{ color: '#e2e8f0' }}
                                        >
                                            <span
                                                className="inline-block mr-2 mt-1"
                                                style={{ color: '#22d3ee' }}
                                            >
                                                •
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                            style={{
                                backgroundColor: '#3b82f6',
                                color: '#e2e8f0'
                            }}
                        >
                            Get a Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        </>


    );
};

export default Home;