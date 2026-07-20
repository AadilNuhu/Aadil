const COLORS = {
    bg: '#0f172a',
    text: '#e2e8f0',
    muted: '#94a3b8',
    accent: '#22d3ee',
    card: '#1e293b',
    border: '#334155',
};

const PROCESS_STEPS = [
    { number: '01', title: 'Discover', description: 'Understand the goal, the users, and what "done" actually looks like.' },
    { number: '02', title: 'Design', description: 'Wireframe the structure, then design the interface around real content.' },
    { number: '03', title: 'Build', description: 'Write clean, tested code and check in early rather than at the end.' },
    { number: '04', title: 'Launch', description: 'Ship, monitor, and stay on hand for fixes and follow-up changes.' },
];

const SERVICES = [
    {
        title: 'Web development',
        description: 'Responsive, fast-loading sites built with React and Tailwind CSS.',
    },
    {
        title: 'Full-stack applications',
        description: 'End-to-end apps with Node.js, Express, and MySQL behind them.',
    },
    {
        title: 'UI / UX design',
        description: 'Interfaces designed around how people actually use them, not just how they look.',
    },
];

export default function WorkSection() {
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
                        How I work
                    </span>
                </div>

                <h2
                    className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl"
                    style={{ color: COLORS.text }}
                >
                    From idea to something you can ship.
                </h2>
                <p className="text-lg max-w-2xl mb-16" style={{ color: COLORS.muted }}>
                    A straightforward process, and the services it covers.
                </p>

                {/* ---------- Process ---------- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-20">
                    {PROCESS_STEPS.map((step, index) => (
                        <div key={step.number} className="relative pl-0">
                            <div className="flex items-center gap-3 mb-3">
                                <span
                                    className="text-sm font-semibold tabular-nums"
                                    style={{ color: COLORS.accent }}
                                >
                                    {step.number}
                                </span>
                                <span
                                    className="h-px flex-1"
                                    style={{ backgroundColor: COLORS.border }}
                                />
                            </div>
                            <h3
                                className="text-base font-semibold mb-2"
                                style={{ color: COLORS.text }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ---------- Services ---------- */}
                <div className="grid sm:grid-cols-3 gap-6 mb-14">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="p-6 rounded-lg border"
                            style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
                        >
                            <h3
                                className="text-base font-semibold mb-2"
                                style={{ color: COLORS.text }}
                            >
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <a
                    href="/contact"
                    className="inline-flex px-7 py-3 rounded-md font-medium text-sm transition-colors duration-200"
                    style={{ backgroundColor: COLORS.accent, color: COLORS.bg }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#67e8f9')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
                >
                    Start a project
                </a>
            </div>
        </section>
    );
}