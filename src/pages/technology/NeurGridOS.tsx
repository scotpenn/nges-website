import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, 
  TrendingUp, 
  Sun, 
  Shield,
  Activity,
  BarChart3,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const NeurGridOS = () => {
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

  const capabilities = [
    {
      icon: TrendingUp,
      title: 'Automated Policy Arbitrage & Demand Response',
      description: 'Built-in logic to predict and react to complex regional tariffs. Pre-configured for BC Hydro\'s Time-of-Use (RS 2801), Critical Peak Pricing (RS 2821/2822), and seamless integration with the Industrial Load Curtailment (ILC) program to maximize your financial incentives automatically.',
    },
    {
      icon: Sun,
      title: 'Microgrid Orchestration (DERMS)',
      description: 'Advanced control architectures that seamlessly coordinate hybrid generation (Diesel + Solar + BESS) to maximize "Zero Fuel Hours" and ensure N+2 redundancy for off-grid operations.',
    },
    {
      icon: Shield,
      title: 'NFPA 855 Safety Logic',
      description: 'Configured with advanced thermal runaway monitoring and fire-system interlocking to meet strict North American safety codes and accelerate your project permitting.',
    },
    {
      icon: Activity,
      title: 'Predictive O&M Diagnostics',
      description: 'Continuous monitoring of cell-level data to anticipate maintenance needs before they cause system downtime, serving as the digital foundation for our 24/7 cross-provincial O&M team.',
    },
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/neurgrid-os-dashboard.jpg"
            alt="NeurGrid OS Dashboard"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/25 to-white" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Technology</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Intelligent Hub for Your{' '}
              <span className="neurgrid-gradient-text">Energy Assets</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              NeurGrid OS (Intelligent Energy Platform)
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          {/* Platform Overview */}
          <div className="animate-item max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Platform Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hardware is only as smart as the software that controls it. NeurGrid OS is a highly 
              customized and localized Energy Management System (EMS). We integrate top-tier North 
              American software frameworks with our deep understanding of Canadian utility tariffs 
              and safety regulations, delivering a seamless arbitrage, microgrid control, and 
              security experience.
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Core <span className="neurgrid-gradient-text">Capabilities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="animate-item neurgrid-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <capability.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="animate-item mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/images/neurgrid-os-dashboard.jpg"
                alt="NeurGrid OS Dashboard"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Real-Time Energy Management
                </h3>
                <p className="text-gray-600">
                  Monitor, control, and optimize your energy assets from a single interface
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="animate-item grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Zap, value: '<100ms', label: 'Response Time' },
              { icon: BarChart3, value: '99.9%', label: 'Uptime' },
              { icon: TrendingUp, value: '30%+', label: 'ROI Improvement' },
              { icon: Shield, value: 'SOC 2', label: 'Security Certified' },
            ].map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl"
              >
                <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-item text-center">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-lg group inline-flex"
            >
              Schedule a Platform Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeurGridOS;
