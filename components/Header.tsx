
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const activeLinkClasses = "text-blue-600 bg-blue-50";

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/test', name: 'Take the Test' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/privacy-policy', name: 'Privacy' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-xl font-bold text-gray-800">
                            Sociopath Traits
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
