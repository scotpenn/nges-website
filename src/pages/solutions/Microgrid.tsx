import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sun, 
  Shield, 
  Battery, 
  Zap,
  Leaf,
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Microgrid = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Engineered N+2 Redundancy',
      description: 'Our advanced control architectures ensure that critical loads are maintained even if multiple generation sources fail unexpectedly.',
    },
    {
      icon: Leaf,
      title: 'Zero Fuel Hours',
      description: 'By optimizing the interaction between solar PV and high-capacity lithium battery storage, our systems can enable thousands of hours of diesel-free operation annually.',
    },
    {
      icon: Layers,
      title: 'Phased Deployment',
      description: 'We provide scalable AC microgrid architectures that allow for incremental equipment upgrades, minimizing downtime while growing with your community\'s future energy demands.',
    },
  ];

  const benefits = [
    'Reduce diesel consumption by up to 80%',
    'Ensure uninterrupted power for critical facilities',
    'Achieve true energy sovereignty',
    'Scale incrementally as demand grows',
    'Remote monitoring and rapid O&M response',
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/solution-microgrid.jpg"
            alt="Microgrid"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/25 to-white" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Sun className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Energy Sovereignty for{' '}
              <span className="neurgrid-gradient-text">Remote Communities</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Microgrids & Engineered Resilience
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Challenge & Solution */}
            <div className="space-y-10">
              {/* The Challenge */}
              <div className="animate-item">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
                    <Battery className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Remote communities and off-grid operations face significant challenges: heavy 
                  reliance on expensive diesel fuel, complex winter delivery logistics, and frequent 
                  power outages that threaten essential services.
                </p>
              </div>

              {/* Our Solution */}
              <div className="animate-item">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                </div>
                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    We deliver highly integrated Hybrid Microgrid (Diesel + Solar + BESS) equipment 
                    packages that enable true energy independence. Drawing on our extensive feasibility 
                    and system architecture experience, we provide solutions that drastically reduce 
                    diesel consumption while ensuring uninterrupted power supply in extreme environments.
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="animate-item">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 animate-item">Key Features</h2>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-item neurgrid-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* System Components */}
              <div className="animate-item neurgrid-card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Components</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Sun, label: 'Solar PV' },
                    { icon: Battery, label: 'BESS' },
                    { icon: Zap, label: 'Diesel' },
                  ].map((comp, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg"
                    >
                      <comp.icon className="w-8 h-8 text-blue-600" />
                      <span className="text-sm text-gray-600">{comp.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="animate-item pt-6">
                <Link
                  to="/contact"
                  className="neurgrid-btn-primary w-full justify-center group"
                >
                  Request a Microgrid Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Microgrid;
