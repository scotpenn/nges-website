import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: 'Transmission & C&I Storage', path: '/solutions/cii-storage' },
        { name: 'Microgrids & Resilience', path: '/solutions/microgrid' },
        { name: 'BESS + EV Fast Charging', path: '/solutions/ev-bess' },
        { name: 'Greenhouse & Agriculture', path: '/solutions/greenhouse' },
      ],
    },
    {
      name: 'Technology',
      path: '/technology',
      dropdown: [
        { name: 'NeurGrid OS', path: '/technology/neurgrid-os' },
        { name: 'Compliance & Design Assist', path: '/technology/compliance' },
      ],
    },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-circuit)' }}
    >
      <div className="neurgrid-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <img 
              src="/images/logo.png" 
              alt="NGES - NeurGrid Energy Solution" 
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fade-in"
                    style={{ animationDuration: '0.2s' }}
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 animate-slide-up"
          style={{ animationDuration: '0.3s' }}
        >
          <div className="neurgrid-container py-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-3 text-base font-medium ${
                    isActive(link.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="neurgrid-btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
