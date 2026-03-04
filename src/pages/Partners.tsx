import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Handshake, 
  Building2, 
  Users, 
  Wrench,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
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

  const partnerTypes = [
    {
      icon: Building2,
      title: 'EPC Contractors',
      description: 'Focus on what you do best—construction and project execution. We supply the integrated equipment packages, compliance documentation, and ongoing O&M support.',
    },
    {
      icon: Users,
      title: 'Consulting Firms',
      description: 'Enhance your service offering with our technical expertise. We provide the detailed system architecture and energy modeling to support your client recommendations.',
    },
    {
      icon: Wrench,
      title: 'Wholesalers',
      description: 'Expand your product portfolio with turnkey BESS solutions. We handle the technical complexity while you maintain your customer relationships.',
    },
  ];

  const whatWeProvide = [
    { icon: Zap, title: 'Integrated Equipment', desc: 'Fully configured BESS hardware packages' },
    { icon: Shield, title: 'Compliance Support', desc: 'BOD, SLDs, and pre-audit services' },
    { icon: CheckCircle2, title: 'AI Arbitrage Engine', desc: 'Customized NeurGrid OS for each project' },
    { icon: Wrench, title: '24/7 O&M', desc: 'Cross-provincial operations and maintenance' },
  ];

  const whatYouRetain = [
    'Project execution and management',
    'Final engineering stamp (EOR)',
    'Customer relationships',
    'Construction and installation',
    'Profit margins on your scope',
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/partners-bg.jpg"
            alt="Partners"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/25 to-white" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Partners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Ultimate Equipment Partner{' '}
              <span className="neurgrid-gradient-text">for EPCs</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We understand the boundaries of our business. As your turnkey provider of BESS 
              equipment and integrated solutions, we deliver fully configured hardware packages 
              and customized AI arbitrage engines.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          {/* Partner Promise */}
          <div className="animate-item max-w-4xl mx-auto text-center mb-16">
            <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Safeguarded by our 24/7 cross-provincial O&M support, we empower your project 
                execution without stepping on your engineering scope. You build the site; we 
                supply the intelligence and reliability."
              </p>
            </div>
          </div>

          {/* Partner Types */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Who We <span className="neurgrid-gradient-text">Partner With</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="animate-item neurgrid-card group"
                >
                  <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                    <type.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Provide vs What You Retain */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* What We Provide */}
            <div className="animate-item">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                What We Provide
              </h3>
              <div className="space-y-4">
                {whatWeProvide.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Retain */}
            <div className="animate-item">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                What You Retain
              </h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ul className="space-y-4">
                  {whatYouRetain.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="animate-item mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Why Partner with <span className="neurgrid-gradient-text">NeurGrid?</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: 'Zero', label: 'Competition Risk' },
                  { value: '100%', label: 'Technical Support' },
                  { value: '24/7', label: 'O&M Coverage' },
                  { value: 'P.Eng', label: 'Compliance Team' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-item text-center">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-lg group inline-flex"
            >
              Join Our Partner Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
