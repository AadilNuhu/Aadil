import React from 'react'
import { useState, useEffect } from 'react';
import me from '../assets/Aadil.jpg'
import profile from '../assets/me.png'

const COLORS = { bg: '#0b1120', text: '#e2e8f0', muted: '#94a3b8', accent: '#22d3ee', accentDeep: '#0e7490', blue: '#3b82f6', };


const LandingPage = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = ['Software Engineer', 'Full Stack Developer', 'React Developer', 'Web Developer', 'Freelancer'];

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

    return (
        <section
            className="relative overflow-hidden min-h-screen flex items-center justify-center md:pt-6 px-4 lg:px-8"
            style={{ backgroundColor: '#0f172a' }}
        >
            {/* ---------- Mobile: photo as full-bleed background ---------- */}
            <div
                className="absolute inset-0 lg:hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${me})` }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 lg:hidden"
                style={{
                    background: `linear-gradient(180deg, ${COLORS.bg}f2 0%, ${COLORS.bg}e6 38%, ${COLORS.bg} 92%)`,
                }}
                aria-hidden="true"
            />

            {/* ---------- Faint structural grid, desktop only ---------- */}
            <div
                className="hidden lg:block absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
                aria-hidden="true"
            />

            <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-0 lg:min-h-screen">
                <div className="grid lg:grid-cols-12 lg:items-center gap-12 lg:gap-8">

                    {/* ---------- Left: content ---------- */}
                    <div className="lg:col-span-7 text-left">
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="h-px w-10"
                                style={{ backgroundColor: COLORS.accent }}
                            />
                            <span
                                className="text-xs font-medium tracking-[0.2em] uppercase"
                                style={{ color: COLORS.accent }}
                            >
                                Software Engineer
                            </span>
                        </div>

                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
                            style={{ color: COLORS.text }}
                        >
                            Aadil Nuhu
                        </h1>

                        <h2
                            className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 h-9"
                            style={{ color: COLORS.muted }}
                        >
                            I am a{' '}
                            <span style={{ color: COLORS.accent }}>{currentText}</span>
                            <span
                                className="inline-block w-[2px] h-6 sm:h-7 lg:h-8 ml-1 align-middle animate-pulse"
                                style={{ backgroundColor: COLORS.accent }}
                            />
                        </h2>

                        <p
                            className="text-base sm:text-lg mb-10 max-w-lg leading-relaxed"
                            style={{ color: COLORS.muted }}
                        >
                            I design and build fast, accessible web applications —
                            turning ideas into interfaces people actually enjoy using.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="px-5 md:px-7 py-3 rounded-md font-medium text-sm transition-colors duration-200"
                                style={{ backgroundColor: COLORS.accent, color: '#0b1120' }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#67e8f9')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
                            >
                                Get in touch
                            </a>
                            <a
                                href="/projects"
                                className="px-5 md:px-7 py-3 rounded-md font-medium text-sm border transition-colors duration-200"
                                style={{ borderColor: '#334155', color: COLORS.text }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.accent)}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#334155')}
                            >
                                View my work
                            </a>
                        </div>
                    </div>

                    {/* ---------- Right: portrait, desktop only ---------- */}
                    <div className="hidden lg:flex lg:col-span-5 justify-center">
                        <div className="relative w-full max-w-sm">
                            <div
                                className="absolute -top-4 -right-4 w-full h-full rounded-2xl border"
                                style={{ borderColor: COLORS.accentDeep }}
                                aria-hidden="true"
                            />
                            <div
                                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
                                style={{ backgroundColor: '#111827' }}
                            >
                                <img
                                    src={profile}
                                    alt="Aadil Nuhu"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            'linear-gradient(180deg, transparent 60%, rgba(11,17,32,0.55) 100%)',
                                    }}
                                />
                            </div>
                            <span
                                className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full"
                                style={{ backgroundColor: COLORS.accent }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage