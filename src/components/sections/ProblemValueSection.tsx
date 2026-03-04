import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link2, Shield, Cpu, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProblemValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Visual animation
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, x: 30, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visualRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Link2, text: 'Global Supply Chain' },
    { icon: Shield, text: 'Canadian Compliance' },
    { icon: Cpu, text: 'AI Arbitrage' },
    { icon: Wrench, text: 'Local O&M' },
  ];

  return (
    <section
      ref={sectionRef}
      className="neurgrid-section relative overflow-hidden bg-gray-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 neurgrid-grid-pattern opacity-30" />

      <div className="neurgrid-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              The Canadian Storage Market is{' '}
              <span className="text-gray-500">Fragmented.</span>
              <br />
              <span className="neurgrid-gradient-text">We Provide the Missing Link.</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Currently, facility owners and EPCs face a difficult choice: affordable overseas 
                hardware that fails local compliance, or expensive local systems lacking advanced 
                policy arbitrage.
              </p>
              <p>
                <span className="text-gray-900 font-semibold">NeurGrid solves this.</span> We are not 
                just an equipment supplier; we are a{' '}
                <span className="text-blue-600">Turnkey BESS Equipment and Solutions Provider</span>. 
                We translate complex Canadian safety codes and utility tariffs into bankable, 
                ready-to-deploy equipment packages.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Bridge Concept */}
          <div
            ref={visualRef}
            className="relative perspective-1000"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 preserve-3d hover:rotate-y-[-5deg] transition-transform duration-500 shadow-lg">
              {/* Bridge SVG */}
              <svg
                viewBox="0 0 400 200"
                className="w-full h-auto"
              >
                {/* Left Pillar - Global Supply */}
                <rect x="20" y="80" width="60" height="120" fill="#e2e8f0" rx="4" />
                <text x="50" y="170" textAnchor="middle" fill="#64748b" fontSize="10">
                  Global
                </text>
                <text x="50" y="185" textAnchor="middle" fill="#64748b" fontSize="10">
                  Supply
                </text>

                {/* Right Pillar - Local Compliance */}
                <rect x="320" y="80" width="60" height="120" fill="#e2e8f0" rx="4" />
                <text x="350" y="170" textAnchor="middle" fill="#64748b" fontSize="10">
                  Local
                </text>
                <text x="350" y="185" textAnchor="middle" fill="#64748b" fontSize="10">
                  Compliance
                </text>

                {/* Bridge Arch */}
                <path
                  d="M80,120 Q200,40 320,120"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Bridge Deck */}
                <rect x="70" y="115" width="260" height="10" fill="#2563eb" rx="2" />

                {/* NeurGrid Logo on Bridge */}
                <circle cx="200" cy="85" r="25" fill="white" stroke="#2563eb" strokeWidth="2" />
                <text x="200" y="90" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">
                  N
                </text>

                {/* Connection Lines */}
                {[100, 140, 180, 220, 260, 300].map((x, i) => (
                  <line
                    key={i}
                    x1={x}
                    y1={125}
                    x2={x}
                    y2={140 + (i % 2) * 20}
                    stroke="#2563eb"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />
                ))}

                {/* Circuit Nodes */}
                {[
                  { x: 100, y: 150 },
                  { x: 160, y: 170 },
                  { x: 240, y: 160 },
                  { x: 300, y: 180 },
                ].map((pos, i) => (
                  <circle
                    key={i}
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill="#2563eb"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </svg>

              {/* Label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                NeurGrid Bridge
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemValueSection;
