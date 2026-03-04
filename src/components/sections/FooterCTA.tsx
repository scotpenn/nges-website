import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 neurgrid-grid-pattern opacity-30" />
      </div>

      {/* Animated Data Visualization */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid Lines */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated Line Chart */}
          <path
            d="M0,250 Q50,200 100,220 T200,150 T300,100 T400,80"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <path
            d="M0,280 Q50,240 100,250 T200,200 T300,160 T400,120"
            fill="none"
            stroke="#2563eb"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Data Points */}
          {[100, 150, 200, 280].map((y, i) => (
            <circle
              key={i}
              cx={100 + i * 80}
              cy={y}
              r="4"
              fill="#2563eb"
              className="animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}

          {/* Vertical Bars */}
          {[60, 120, 180, 240, 300, 360].map((x, i) => (
            <rect
              key={i}
              x={x}
              y={300 - (50 + Math.random() * 100)}
              width="20"
              height={50 + Math.random() * 100}
              fill="#2563eb"
              fillOpacity="0.2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative neurgrid-container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Start Your Project
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Empower Your Next{' '}
            <span className="neurgrid-gradient-text">Energy Storage Project?</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Stop leaving money on the grid. Partner with NeurGrid to get your highly integrated BESS equipment package and a complimentary AI-driven arbitrage model today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="neurgrid-btn-primary text-base group"
            >
              Get Your Free ROI Model & System Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/partners"
              className="neurgrid-btn-secondary text-base"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
