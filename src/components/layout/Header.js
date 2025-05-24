import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menuName) => setOpenDropdown(menuName);
  const handleMouseLeave = () => setOpenDropdown(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Group Members',
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
      submenu: [
        { name: 'Research Papers', path: '/research/papers' },
        { name: 'Books', path: '/research/books' },
        { name: 'Patents', path: '/research/patents' },
        { name: 'Invited Talks', path: '/research/talks' }
      ]
    },
    { name: 'Publications', path: '/publications' },
    { name: 'Awards', path: '/awards' },
    { name: 'Our Lab', path: '/lab' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/images/logos/iitr-logo-white.png"
                alt="IIT Roorkee Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Water Resources Research Group</h1>
              <p className="text-xs text-gray-600">WRDM Department, IIT Roorkee</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 relative">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`py-2 px-1 text-sm font-medium ${
                      openDropdown === link.name ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'
                    }`}
                  >
                    {link.name}
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 min-w-[180px] z-50">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.path}
                          href={sublink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-2 px-1 text-sm font-medium ${
                    router.pathname === link.path
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name} className="bg-gray-50 rounded-md">
                    <span className="px-4 py-2 text-sm font-medium text-gray-800">{link.name}</span>
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        href={sublink.path}
                        className="block px-6 py-1 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-3 py-2 text-sm ${
                      router.pathname === link.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
