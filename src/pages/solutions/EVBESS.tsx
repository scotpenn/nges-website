import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  ArrowRight,
  CheckCircle2,
  Construction,
  Building2,
  ShoppingBag,
  Truck,
  Mountain
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const EVBESS = () => {
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
      icon: Wrench,
      title: 'Extremely Simple Installation',
      description: 'Say goodbye to complex debugging. You only need to handle equipment installation, power connection, and network connection. We handle the rest remotely.',
    },
    {
      icon: Zap,
      title: 'Save "Insufficient Grid Capacity" Projects',
      description: 'Through BESS + EMS smart scheduling, we enable high-power fast charging stations without expensive grid upgrades.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Approval Risk',
      description: 'Our P.Eng team provides CSA/UL compliance advice, NFPA 855 fire code reference, and safety distance guidance to lower your risk.',
    },
  ];

  const products = [
    {
      model: 'NG-FC100 (Basic)',
      positioning: 'Basic Fast Charging: Small commercial scenarios with sufficient grid capacity.',
      advantages: 'Pure plug-and-play. Integrated POS card reader; ready to operate upon connection. Extremely low deployment cost.',
    },
    {
      model: 'NG-FC200 (Smart)',
      positioning: 'Dynamic Allocation: Scenarios with limited grid capacity where battery storage is not required.',
      advantages: 'Prevents grid overload. EMS dynamically allocates power across multiple stalls. Highly scalable without requiring transformer upgrades.',
    },
    {
      model: 'NG-FC300 (Boost)',
      positioning: 'Storage-Enhanced: Scenarios with severe grid capacity shortages seeking to avoid expensive expansion.',
      advantages: 'Storage-backed capacity. Uses BESS to supplement extra power, bypassing long utility approval processes and costly infrastructure upgrades.',
    },
    {
      model: 'NG-FC400 (Ultra)',
      positioning: 'Large Hubs: High-traffic charging stations, logistics fleets, and highway service areas.',
      advantages: 'AI Energy Optimization. Integrates AI scheduling, large-scale storage, and multi-stall fast charging. Peak shaving and valley filling to significantly reduce operational electricity costs.',
    },
  ];

  const scenarios = [
    { icon: Building2, label: 'Commercial Parking' },
    { icon: ShoppingBag, label: 'Shopping Malls' },
    { icon: Truck, label: 'Logistics Fleets' },
    { icon: Mountain, label: 'Highway Areas' },
    { icon: Construction, label: 'Industrial Parks' },
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/solution-ev-bess-hero.png"
            alt="EV Charging + BESS EMS Dashboard"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="neurgrid-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              NeurGrid™ <span className="neurgrid-gradient-text">Fast-Charging Energy</span> Pre-integrated System
            </h1>

            <p className="text-2xl font-semibold text-blue-600 mb-4 italic">
              "We make DC fast charging projects easier for installers."
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Level 3 fast-charging + BESS + AI EMS integrated solution. 
              You handle the installation, we handle the complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-gray-50">
        <div className="neurgrid-container">
          {/* Main Value Prop */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20 animate-item">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Installers</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  NeurGrid systems are delivered as <span className="font-bold text-blue-600">pre-integrated energy platforms</span>. 
                  Installers only need to connect power and network. All system integration and commissioning are handled remotely by NeurGrid.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">Equipment Installation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">Power Connection</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">Network Connection</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
                   <Cpu className="w-24 h-24 text-blue-600 opacity-20" />
                   {/* Placeholder for system diagram or real image */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <p className="text-sm font-medium">
                    "Remote commissioning & system config included free of charge."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Installers Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-item">Why Installers Choose NeurGrid?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="animate-item neurgrid-card flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                </div>
              ))}
            </div>
            {/* Engineering Support Badge */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center gap-6 animate-item">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-gray-700 italic">
                Our P.Eng team provides full support for electrical safety standards (CSA/UL), fire safety (NFPA 855), and compliance guidance. 
                <span className="font-bold ml-1">We handle the engineering headaches so you can focus on building.</span>
              </p>
            </div>
          </div>

          {/* Product Packages Content (Refined) */}
          <div className="mb-20 pt-10">
            <div className="text-center mb-12 animate-item">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Four Standardized Product Packages</h2>
              <p className="text-gray-600">Strictly tailored solutions for every scenario</p>
            </div>
            <div className="grid gap-8">
              {products.map((pkg, index) => (
                <div 
                  key={index} 
                  className="animate-item bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="grid md:grid-cols-[280px_1fr] h-full">
                    {/* Model Sidebar */}
                    <div className="bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 group-hover:bg-blue-50 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.model}</h3>
                      <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                    
                    {/* Detailed Content */}
                    <div className="p-8 grid sm:grid-cols-2 gap-8 items-center">
                      <div>
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Positioning & Scenarios</h4>
                        <p className="text-gray-700 font-medium leading-relaxed">{pkg.positioning}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Core Advantages & Solutions</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{pkg.advantages}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenarios */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-item">Applicable Scenarios</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {scenarios.map((scene, index) => (
                <div key={index} className="animate-item flex flex-col items-center gap-4 p-8 bg-white border border-gray-50 rounded-2xl hover:bg-blue-50/30 transition-colors">
                  <scene.icon className="w-10 h-10 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800 text-center">{scene.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-item bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your next Level 3 project?</h2>
              <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                Plug in, swipe, and charge. Leave the complex energy management to NeurGrid.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors group"
              >
                Request a System Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVBESS;
