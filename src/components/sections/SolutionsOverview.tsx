import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Sun, Sprout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SolutionsOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      icon: Zap,
      title: 'Transmission & C&I Arbitrage',
      description:
        'Turn complex utility policies (like BC Hydro RS 2801/2821) into revenue streams with our AI-driven peak-shaving and energy arbitrage systems.',
      image: '/images/solution-cii.jpg',
      link: '/solutions/cii-storage',
    },
    {
      icon: Sun,
      title: 'Microgrids & Engineered Resilience',
      description:
        'Achieve true energy sovereignty. We deliver highly reliable Diesel+Solar+BESS hybrid equipment packages for remote communities and critical infrastructure.',
      image: '/images/solution-microgrid.jpg',
      link: '/solutions/microgrid',
    },
    {
      icon: Zap,
      title: 'BESS + EV Fast Charging',
      description:
        'Power Level 3 chargers with "Plug-and-Play" pre-integrated BESS + EMS platforms. We bypass grid constraints and simplify installation for DC fast-charging projects.',
      image: '/images/solution-ev-bess-hero.png',
      link: '/solutions/ev-bess',
    },
    {
      icon: Sprout,
      title: 'Greenhouse ESI (Agriculture)',
      description:
        'Standardized, easy-to-permit energy storage packages designed to flatten extreme demand spikes and protect tight agricultural profit margins.',
      image: '/images/solution-greenhouse.jpg',
      link: '/solutions/greenhouse',
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
      const cards = cardsRef.current?.querySelectorAll('.solution-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
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
      className="neurgrid-section relative overflow-hidden bg-gray-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50" />
      <div className="absolute inset-0 neurgrid-grid-pattern opacity-20" />

      <div className="neurgrid-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Purpose-Built{' '}
            <span className="neurgrid-gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            For High-Demand Markets
          </p>
        </div>

        {/* Solutions Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.link}
              className="solution-card group relative block overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-50 backdrop-blur-sm border border-blue-200 rounded-xl flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
