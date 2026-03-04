import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, 
  TrendingUp, 
  Activity, 
  FileText, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CIIStorage = () => {
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
      icon: TrendingUp,
      title: 'Utility Rate Optimization',
      description: 'Pre-configured algorithms tailored for complex tariffs, including BC Hydro TOU/CPP (RS 2801-2822) and Ontario Global Adjustment (GA).',
    },
    {
      icon: Activity,
      title: 'Demand Response Ready',
      description: 'Seamlessly integrate with programs like BC Hydro\'s Industrial Load Curtailment (ILC) to unlock lucrative financial incentives through automated BESS dispatching.',
    },
    {
      icon: FileText,
      title: 'Substation-Level Design Assist',
      description: 'We provide comprehensive conceptual layouts and Basis of Design (BOD) for complex high-voltage interconnections.',
    },
    {
      icon: BarChart3,
      title: 'Free ROI Modeling',
      description: 'Using your historical load profile, we simulate the exact financial payback based on the latest local utility rates.',
    },
  ];

  const benefits = [
    'Maximize arbitrage revenue with AI-driven dispatch',
    'Reduce demand charges by 30-50%',
    'Participate in demand response programs',
    'Ensure grid compliance with P.Eng-backed designs',
    '24/7 monitoring and rapid O&M response',
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/solution-cii.jpg"
            alt="C&I Storage"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/25 to-white" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize Arbitrage with{' '}
              <span className="neurgrid-gradient-text">AI-Driven Energy Storage</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Commercial & Transmission Storage Solutions
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
                    <Activity className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For large industrial users and transmission-level facilities, energy costs are 
                  no longer just about consumption—they are about timing. With complex new utility 
                  policies like BC Hydro's Transmission Service Time-of-Use (TOU) and Critical Peak 
                  Pricing (CPP) rates (RS 2801, RS 2821), traditional peak shaving is no longer 
                  enough to maximize returns.
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
                    NeurGrid provides highly integrated BESS equipment packages designed specifically 
                    for policy-driven arbitrage. Our customized Energy Management System (NeurGrid OS) 
                    automatically dispatches power during High Load Hours (HLH) and Critical Peak events, 
                    transforming your facility's energy profile into a revenue-generating asset without 
                    disrupting core operations.
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

              {/* CTA */}
              <div className="animate-item pt-6">
                <Link
                  to="/contact"
                  className="neurgrid-btn-primary w-full justify-center group"
                >
                  Request a Free ROI Assessment
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

export default CIIStorage;
