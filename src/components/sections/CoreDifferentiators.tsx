import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Shield, FileCheck, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CoreDifferentiators = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const differentiators = [
    {
      icon: Cpu,
      title: 'Best-in-Class Hardware Integration',
      description:
        'We are a hardware-agnostic solutions provider. Leveraging our deep partnerships with multiple top-tier global BESS manufacturers, we objectively select and integrate the optimal Lithium Iron Phosphate (LFP) equipment tailored to your project\'s specific operational, compliance, and ROI requirements.',
    },
    {
      icon: Shield,
      title: 'Intelligent NeurGrid OS',
      description:
        'Hardware is only as good as its software. Our integrated Energy Management System is highly customized for complex Canadian tariffs (like BC Hydro TOU/CPP and Ontario GA) to automatically maximize your financial returns.',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Design Assist',
      description:
        'Navigating NFPA 855 and CSA standards is the biggest project bottleneck. Guided by our internal compliance experts, we provide your Engineer of Record (EOR) with the Basis of Design (BOD) and pre-audits needed to accelerate permitting.',
    },
    {
      icon: Headphones,
      title: '24/7 Local O&M Stewardship',
      description:
        'We don\'t just drop off equipment and leave. Our dedicated, cross-provincial Operations & Maintenance team provides continuous monitoring and rapid field response, ensuring your system never becomes an "orphan product."',
    },
  ];

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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.differentiator-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="neurgrid-section relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 neurgrid-grid-pattern opacity-20" />

      <div className="neurgrid-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            The NeurGrid{' '}
            <span className="neurgrid-gradient-text">Advantage</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Built for Reliability and Return
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 perspective-1000"
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="differentiator-card neurgrid-card group"
              style={{
                transform: index % 2 === 0 ? 'translateY(-15px)' : 'translateY(15px)',
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDifferentiators;
