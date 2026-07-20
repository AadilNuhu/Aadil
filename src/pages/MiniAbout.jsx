import React from 'react'
import { useState, useEffect } from 'react';

const COLORS = { bg: '#0b1120', text: '#e2e8f0', muted: '#94a3b8', accent: '#22d3ee', accentDeep: '#0e7490', blue: '#3b82f6', };

const STACK = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Postgres', 'MongoDB', 'Figma',
    'Node.js', 'Express', 'Next js', 'Typescript', 'MySQL',
];

const STATS = [
    { value: '3+', label: 'Years building for the web' },
    { value: '13', label: 'Core tools I reach for' },
    { value: 'Full-stack', label: 'Front to back' },
];

const INTERESTS = ['Gaming', 'Movies', 'Coding challenges'];

function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1800 } = {}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];
        let timeout;

        if (!deleting && text === current) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === '') {
            setDeleting(false);
            setIndex((i) => i + 1);
        } else {
            timeout = setTimeout(() => {
                setText((t) =>
                    deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
                );
            }, deleting ? deleteSpeed : typeSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
}

const MiniAbout = () => {
    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: COLORS.bg }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-10" style={{ backgroundColor: COLORS.accent }} />
                    <span
                        className="text-xs font-medium tracking-[0.2em] uppercase"
                        style={{ color: COLORS.accent }}
                    >
                        About
                    </span>
                </div>

                <h2
                    className="text-3xl sm:text-4xl font-bold mb-12 max-w-2xl"
                    style={{ color: COLORS.text }}
                >
                    I build interfaces that work as well as they look.
                </h2>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* ---------- Narrative ---------- */}
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
                            I'm <span style={{ color: COLORS.text, fontWeight: 500 }}>Aadil Nuhu</span>, a
                            software and web developer who cares about the details most people
                            never notice — the ones that make a site feel effortless to use.
                        </p>

                        <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
                            My process starts with listening. Before any code gets written, I want
                            to understand what you're actually trying to solve — so what I build
                            fits the problem, not just the brief.
                        </p>

                        <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
                            Outside of client work, I stay sharp with{' '}
                            {INTERESTS.map((interest, i) => (
                                <span key={interest}>
                                    <span style={{ color: COLORS.text }}>{interest.toLowerCase()}</span>
                                    {i < INTERESTS.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                            {' '}— habits that keep me curious and show up in how I approach a
                            problem.
                        </p>

                        <div className="pt-2">
                            <p
                                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                                style={{ color: COLORS.muted }}
                            >
                                Tools I work with
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {STACK.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-md text-sm border"
                                        style={{ borderColor: COLORS.border, color: COLORS.text }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ---------- Stat sidebar ---------- */}
                    <div className="space-y-4">
                        {STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="p-5 rounded-lg border"
                                style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
                            >
                                <p
                                    className="text-2xl font-bold mb-1"
                                    style={{ color: COLORS.accent }}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-sm" style={{ color: COLORS.muted }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniAbout