import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => setOpenDropdown(menuName);
  const handleMouseLeave = () => setOpenDropdown(null);

  // Fixed toggle function with proper state management
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Group Members',
      path: '/people',
      submenu: [
        { name: 'PI', path: '/people/pi' },
        { name: 'PhD Scholars', path: '/people/phd' },
        { name: 'Masters Students', path: '/people/masters' },
        { name: 'Interns', path: '/people/interns' },
        { name: 'Past Members', path: '/people/past' }
      ]
    },
    {
      name: 'Research',
      path: '/research',
      submenu: [
        { name: 'Research Papers', path: '/research/papers' },
        { name: 'Books', path: '/research/books' },
        { name: 'Patents', path: '/research/patents' },
        { name: 'Invited Talks', path: '/research/talks' }
      ]
    },
    {
      name: 'Events',
      path: '/events',
      submenu: [
        { name: 'Upcoming Events', path: '/events/upcoming' },
        { name: 'Past Events', path: '/events/past' },
      ]
    },
    { name: 'Awards', path: '/awards' },
    {
      name: 'Our Lab',
      path: '/lab',
      submenu: [
        { name: 'Instruments', path: '/lab/instruments' },
        { name: 'Facilities', path: '/lab/facilities' },
        { name: 'About Lab', path: '/lab/about' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={closeAllMenus}
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logos/iitr-logo-white.png"
                alt="IIT Roorkee Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">WTM Research Group</span>
              <span className="block text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">IIT Roorkee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    router.pathname === link.path 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    router.pathname === link.path ? 'w-4/5 -translate-x-1/2' : 'group-hover:w-4/5 group-hover:-translate-x-1/2'
                  }`}></span>
                </Link>
                
                {link.submenu && (
                  <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-56 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 origin-top ${
                    openDropdown === link.name 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                    <div className="py-1 border border-gray-100 rounded-lg">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.path}
                          href={sublink.path}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            router.pathname === sublink.path
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                          onClick={closeAllMenus}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleButtonRef}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 transform transition-transform duration-200 hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform transition-transform duration-200 hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[80vh] py-3 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <Link
                  href={link.path}
                  onClick={closeAllMenus}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    router.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-6 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        href={sublink.path}
                        onClick={closeAllMenus}
                        className={`block px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                          router.pathname === sublink.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}