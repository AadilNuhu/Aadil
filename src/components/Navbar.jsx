import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const COLORS = {
    bg: '#0f172a',
    text: '#e2e8f0',
    muted: '#94a3b8',
    accent: '#22d3ee',
    border: '#1e293b',
};

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    // { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="sticky top-0 z-50 border-b backdrop-blur"
            style={{ backgroundColor: `${COLORS.bg}f0`, borderColor: COLORS.border }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-base font-semibold tracking-tight"
                        style={{ color: COLORS.text }}
                    >
                        Aadil Nuhu
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                    </Link>

                    {/* ---------- Desktop menu ---------- */}
                    <div className="hidden md:flex items-center gap-8">
                        {LINKS.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="relative py-2 text-sm font-medium group"
                                style={({ isActive }) => ({ color: isActive ? COLORS.text : COLORS.muted })}
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        <span
                                            className="absolute left-0 -bottom-[1px] h-[2px] rounded-full transition-all duration-200"
                                            style={{
                                                backgroundColor: COLORS.accent,
                                                width: isActive ? '100%' : '0%',
                                            }}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            style={{ backgroundColor: COLORS.accent, color: COLORS.bg }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#67e8f9')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
                        >
                            Let's talk
                        </Link>
                    </div>

                    {/* ---------- Mobile toggle ---------- */}
                    <button
                        onClick={() => setIsOpen((v) => !v)}
                        className="md:hidden p-2 rounded-md"
                        style={{ color: isOpen ? COLORS.accent : COLORS.muted }}
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>

            {/* ---------- Mobile menu ---------- */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300 border-t"
                style={{
                    maxHeight: isOpen ? '20rem' : '0',
                    borderColor: isOpen ? COLORS.border : 'transparent',
                }}
            >
                <div className="px-4 py-3 space-y-1">
                    {LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2.5 rounded-md text-sm font-medium"
                            style={({ isActive }) => ({
                                color: isActive ? COLORS.accent : COLORS.muted,
                                backgroundColor: isActive ? '#1e293b' : 'transparent',
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                            to="/contact"
                            className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            style={{ backgroundColor: COLORS.accent, color: COLORS.bg }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#67e8f9')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
                        >
                            Let's talk
                        </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;