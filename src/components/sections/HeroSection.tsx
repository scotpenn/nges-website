import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart3 } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Canvas animation for grid background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid animation
    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 60;
      const rows = Math.ceil(canvas.height / gridSize) + 1;
      const cols = Math.ceil(canvas.width / gridSize) + 1;

      ctx.strokeStyle = 'rgba(37, 99, 235, 0.06)';
      ctx.lineWidth = 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gridSize;
          const y = i * gridSize;
          
          // Pulsing effect at intersections
          const pulse = Math.sin(time * 2 + i * 0.5 + j * 0.5) * 0.5 + 0.5;
          const radius = 2 + pulse * 2;
          
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37, 99, 235, ${0.08 + pulse * 0.1})`;
          ctx.fill();
        }
      }

      // Draw grid lines
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }
      for (let j = 0; j <= cols; j++) {
        ctx.beginPath();
        ctx.moveTo(j * gridSize, 0);
        ctx.lineTo(j * gridSize, canvas.height);
        ctx.stroke();
      }

      time += 0.016;
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    // GSAP animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/50 z-[1]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 neurgrid-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-8">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">
              Turnkey BESS Solutions Provider
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Turnkey Energy Storage Systems.
            <br />
            <span className="neurgrid-gradient-text">Powered by Smart Arbitrage.</span>
            <br />
            <span className="text-gray-500">Backed by Local O&M.</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Bridging the gap between Tier-1 global supply chains and strict Canadian grid compliance. 
            We deliver turnkey Battery Energy Storage Systems (BESS) powered by customized AI arbitrage 
            and backed by cross-provincial O&M.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-lg px-8 py-4 group"
            >
              <BarChart3 className="w-5 h-5" />
              Request a Free ROI & Arbitrage Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="neurgrid-btn-secondary text-lg px-8 py-4"
            >
              Explore Our Solutions
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 'Tier-1', label: 'Hardware Partners' },
              { value: '24/7', label: 'O&M Support' },
              { value: 'AI', label: 'Arbitrage Engine' },
              { value: 'P.Eng', label: 'Compliance Team' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[3]" />
    </section>
  );
};

export default HeroSection;
