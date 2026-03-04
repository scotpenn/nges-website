import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileCheck, 
  Shield, 
  ClipboardCheck, 
  FileText,
  Flame,
  Plug,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Compliance = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animate-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Basis of Design (BOD) & SLDs',
      description: 'We provide your engineering team with pre-vetted conceptual layouts and standard Single-Line Diagrams (SLDs) tailored to your specific application (e.g., Microgrids, Greenhouses), drastically reducing your front-end engineering time.',
    },
    {
      icon: Flame,
      title: 'NFPA 855 & UL 9540A Pre-Audits',
      description: 'We conduct early-stage gap analyses on critical fire safety requirements. By leveraging UL 9540A thermal runaway data, we optimize spatial separation, explosion control, and fire-system interlocking to ensure your site layout sails through local fire department reviews.',
    },
    {
      icon: Plug,
      title: 'Utility Interconnection Support',
      description: 'We translate complex hardware specifications and AI EMS control logic into the exact technical language required by local utilities (like BC Hydro) to secure your interconnection agreements smoothly.',
    },
  ];

  const standards = [
    { code: 'NFPA 855', name: 'Fire Safety Standard' },
    { code: 'CSA C22.1', name: 'Canadian Electrical Code' },
    { code: 'UL 9540A', name: 'Thermal Runaway Test' },
    { code: 'UL 1973', name: 'Battery Safety Standard' },
    { code: 'IEEE 1547', name: 'Interconnection Standard' },
    { code: 'BC Hydro', name: 'Grid Integration' },
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/compliance-design.jpg"
            alt="Compliance Design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/25 to-white" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Technology</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Navigating the Code.
              <br />
              <span className="neurgrid-gradient-text">Accelerating Your Permit.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Compliance Pre-Audit & Design Assist
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left Column - Challenge & Value */}
            <div className="space-y-10">
              {/* The Challenge */}
              <div className="animate-item">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Compliance Challenge</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In Canada, the biggest bottleneck for energy storage deployment isn't hardware 
                  procurement—it's securing interconnection and fire permits. Navigating strict 
                  Canadian electrical standards (CSA) and the National Fire Protection Association 
                  (NFPA 855) guidelines requires deep local engineering expertise. Procuring overseas 
                  hardware without proper compliance translation often leads to costly project delays 
                  or permit rejections.
                </p>
              </div>

              {/* Our Value */}
              <div className="animate-item">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Technical Backbone</h2>
                </div>
                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    NeurGrid acts as the vital bridge between Tier-1 global supply chains and local 
                    Authorities Having Jurisdiction (AHJ). Under the guidance of our internal Chief 
                    Compliance Architect (P.Eng), we provide comprehensive "Design Assist" services.
                  </p>
                  <p className="text-blue-600 font-semibold">
                    We deliver the system architecture and compliance blueprint; your Engineer of 
                    Record (EOR) retains the final stamp and project execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 animate-item">Core Support Capabilities</h2>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-item neurgrid-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standards Grid */}
          <div className="animate-item mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Standards We Navigate
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <div className="text-lg font-bold text-blue-600 mb-1">{standard.code}</div>
                  <div className="text-xs text-gray-500">{standard.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Flow */}
          <div className="animate-item mb-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our <span className="neurgrid-gradient-text">Process</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {[
                { step: '1', title: 'Discovery', desc: 'Project requirements' },
                { step: '2', title: 'Pre-Audit', desc: 'Gap analysis' },
                { step: '3', title: 'Design', desc: 'BOD & SLDs' },
                { step: '4', title: 'Support', desc: 'Permit assistance' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mb-2">
                      <span className="text-xl font-bold text-blue-600">{item.step}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block w-12 h-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="animate-item text-center">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-lg group inline-flex"
            >
              Get Compliance Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
