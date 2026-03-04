import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Handshake, Users, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PartnerEcosystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const partnerTypes = [
    { icon: Building2, label: 'EPC Contractors' },
    { icon: Users, label: 'Consulting Firms' },
    { icon: Handshake, label: 'Wholesalers' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/partners-bg.jpg)' }}
      />
      
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />

      <div className="neurgrid-container relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">
              Partner Program
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Technical Backbone.
            <br />
            <span className="text-gray-500">Not Your Competitor.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Are you an EPC contractor, an electrical consulting firm, or a wholesaler? 
            NeurGrid is designed to empower your business, not compete with it. We handle 
            the complex equipment integration, supply the Basis of Design (BOD), and provide 
            the O&M safety net. You retain the project execution and final engineering stamp. 
            Let's build the grid of the future, together.
          </p>

          {/* Partner Types */}
          <div className="flex flex-wrap gap-3 mb-10">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg"
              >
                <type.icon className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">{type.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/partners"
            className="neurgrid-btn-primary text-base group inline-flex"
          >
            Join Our Partner Network
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerEcosystem;
