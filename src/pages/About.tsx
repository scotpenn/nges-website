import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Cpu, 
  Shield, 
  Truck,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

  const ironTriangle = [
    {
      icon: Truck,
      title: 'Supply Chain & Delivery Engine',
      description: 'Backed by deep, direct partnerships with top-tier global BESS manufacturers, we ensure you receive industry-leading Lithium Iron Phosphate (LFP) technology and pricing. We objectively select and integrate the optimal equipment tailored to your project.',
    },
    {
      icon: Shield,
      title: 'Compliance & Safety Backbone',
      description: 'Led by our internal Chief Compliance Architect (P.Eng), we translate complex Canadian electrical standards (CSA) and strict fire codes (NFPA 855) into pre-vetted Basis of Design (BOD), ensuring your project sails through the permitting process.',
    },
    {
      icon: Cpu,
      title: 'Intelligence & Arbitrage Brain',
      description: 'Our technology team delivers the NeurGrid OS—a highly customized Energy Management System designed to maximize your ROI through complex utility tariffs, including BC Hydro\'s TOU/CPP and Ontario\'s Global Adjustment.',
    },
  ];

  const values = [
    { icon: Target, title: 'Mission', desc: 'Bridge the gap between global supply chains and local compliance' },
    { icon: Users, title: 'Partnership', desc: 'Empower EPCs, never compete with them' },
    { icon: Zap, title: 'Innovation', desc: 'AI-driven arbitrage for maximum returns' },
    { icon: CheckCircle2, title: 'Reliability', desc: '24/7 O&M support across provinces' },
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 neurgrid-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">About Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging the Gap.
              <br />
              <span className="neurgrid-gradient-text">Empowering the Grid.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Our Story & Mission
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          {/* Story */}
          <div className="animate-item max-w-4xl mx-auto mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Canadian Storage Market is{' '}
                <span className="text-gray-500">Fragmented.</span>
                <span className="neurgrid-gradient-text"> We Provide the Missing Link.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canadian energy storage market has long faced a structural disconnect. Currently, 
                facility owners and EPCs face a difficult choice: affordable global hardware that 
                struggles with strict local compliance, or traditional local systems that often come 
                with higher capital costs and standard software not fully optimized for complex policy 
                arbitrage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-blue-600 font-semibold">NeurGrid solves this.</span> We are not 
                just an equipment supplier; we are a{' '}
                <span className="text-blue-600 font-semibold">Turnkey BESS Equipment and Solutions Provider</span>. 
                We translate complex Canadian safety codes and utility tariffs into bankable, 
                ready-to-deploy equipment packages.
              </p>
            </div>
          </div>

          {/* Iron Triangle */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our <span className="neurgrid-gradient-text">"Iron Triangle"</span> Advantage
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our strength lies in our multidisciplinary DNA. We are not just equipment distributors; 
                we have built an "Iron Triangle" of expertise that covers every blind spot of energy 
                storage deployment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ironTriangle.map((pillar, index) => (
                <div
                  key={index}
                  className="animate-item neurgrid-card group"
                >
                  <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                    <pillar.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="animate-item mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Our <span className="neurgrid-gradient-text">Values</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900 mb-1">{value.title}</div>
                  <div className="text-xs text-gray-500">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Promise */}
          <div className="animate-item mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Promise: <span className="neurgrid-gradient-text">Your Technical Backbone</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                We know our boundaries. We do not act as an EPC or general contractor. Whether you 
                are an engineering firm, a consulting company, or a facility owner, NeurGrid is 
                designed to empower your business, not compete with it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Complex equipment integration',
                  'Compliance blueprint',
                  '24/7 cross-provincial O&M',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-6">
                You retain the project execution and final engineering stamp.
              </p>
              <p className="text-center text-blue-600 font-semibold mt-2">
                You build the site; we supply the intelligence and reliability.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-item text-center">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-lg group inline-flex"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
