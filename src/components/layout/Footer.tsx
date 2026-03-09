import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Technology', path: '/technology' },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
  ];

  const solutionLinks = [
    { name: 'Transmission & C&I Storage', path: '/solutions/cii-storage' },
    { name: 'Microgrids & Resilience', path: '/solutions/microgrid' },
    { name: 'Greenhouse & Agriculture', path: '/solutions/greenhouse' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="neurgrid-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <img 
                src="/images/logo.png" 
                alt="NGES - NeurGrid Energy Solution" 
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Turnkey BESS equipment and solutions provider. Bridging the gap between Tier-1 global supply chains and strict Canadian grid compliance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/neurgrid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Vancouver, British Columbia<br />Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:scot@neurgrid.ca"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  scot@neurgrid.ca
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+1-778-917-9876"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  +1-778-917-9876
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer & Legal */}
      <div className="border-t border-gray-200">
        <div className="neurgrid-container py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center lg:text-left max-w-3xl">
              NeurGrid is a turnkey BESS equipment and solutions provider. We provide design assist, compliance pre-audit, and O&M services. All engineering design, permitting stamp, and construction services are retained by your chosen licensed EPC and Engineer of Record (EOR).
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className="text-gray-500 hover:text-blue-600 text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200/50 text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} NeurGrid. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
