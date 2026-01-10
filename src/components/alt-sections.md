import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Shield, Zap, TrendingUp, Sparkles } from 'lucide-react';

const PremiumHeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20;
        const y = ((e.clientY - top) / height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-blue-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="glass p-4 rounded-2xl shadow-2xl">
          <Shield className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <div className="absolute top-1/3 right-16 animate-float delay-700">
        <div className="glass p-4 rounded-2xl shadow-2xl">
          <Zap className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float delay-1000">
        <div className="glass p-4 rounded-2xl shadow-2xl">
          <TrendingUp className="w-8 h-8 text-green-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-spin-slow" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ENTERPRISE-GRADE SOLUTION
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Landscape
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the future of enterprise solutions with our <span className="font-semibold text-blue-300">AI-powered platform</span> that drives <span className="font-semibold text-green-300">300% more efficiency</span> and accelerates growth.
          </p>

          {/* Interactive Stats Cards */}
          <div 
            className="max-w-4xl mx-auto mb-16"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Customer Satisfaction', value: '99.8%', color: 'from-green-500 to-emerald-400' },
                { label: 'ROI Increase', value: '340%', color: 'from-blue-500 to-cyan-400' },
                { label: 'Deployment Speed', value: '10x Faster', color: 'from-purple-500 to-pink-400' }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="btn btn-lg group relative overflow-hidden rounded-full px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center gap-3">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="btn btn-lg glass rounded-full px-10 py-5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="relative">
            <div className="text-center text-gray-400 mb-8 text-sm font-semibold tracking-wider">
              TRUSTED BY INDUSTRY LEADERS
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {['TechCorp', 'InnovateCo', 'FutureSystems', 'DataFlow', 'CloudFirst'].map((company, index) => (
                <div 
                  key={index}
                  className="text-2xl font-bold text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumHeroSection;





import { useEffect, useRef, useState } from 'react';
import { Truck, Package, Globe, Clock, Shield, MapPin, ArrowRight, Play, BarChart3, Award } from 'lucide-react';

const LogisticsHeroSection = () => {
  const [activeRoute, setActiveRoute] = useState(0);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const routes = [
    { from: 'Shanghai', to: 'Los Angeles', duration: '14 days', mode: 'Sea' },
    { from: 'Frankfurt', to: 'Chicago', duration: '2 days', mode: 'Air' },
    { from: 'Singapore', to: 'Rotterdam', duration: '21 days', mode: 'Sea' },
    { from: 'Dubai', to: 'New York', duration: '16 hours', mode: 'Air' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoute((prev) => (prev + 1) % routes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 15;
        const y = ((e.clientY - top) / height - 0.5) * 15;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Global Network Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="opacity-50">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Transport Icons */}
        <div className="absolute top-20 left-1/4 animate-float">
          <div className="p-4 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <Truck className="w-10 h-10 text-blue-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-20 animate-float delay-1000">
          <div className="p-4 rounded-xl bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
            <Package className="w-10 h-10 text-emerald-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-20 animate-float delay-700">
          <div className="p-4 rounded-xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/20">
            <Globe className="w-10 h-10 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Animated Route Visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 backdrop-blur-sm">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                GLOBAL LOGISTICS PARTNER SINCE 1995
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Global Logistics,
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Local Precision
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            End-to-end cargo solutions with <span className="font-semibold text-blue-300">real-time tracking</span>, 
            <span className="font-semibold text-emerald-300"> 99.7% on-time delivery</span>, and 
            <span className="font-semibold text-amber-300"> customs clearance in 24h</span>.
          </p>

          {/* Live Route Tracker */}
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className="glass rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  Live Route Tracking
                </h3>
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">ACTIVE</span>
                </div>
              </div>
              
              <div className="relative h-32 bg-slate-800/50 rounded-xl border border-slate-700/50 mb-6 overflow-hidden">
                {/* Route Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full">
                    <div 
                      className="absolute -top-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                      style={{
                        left: `${(activeRoute + 1) * 25 - 12.5}%`,
                        transition: 'left 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <Truck className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {routes.map((route, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-4 border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                      activeRoute === index
                        ? 'border-blue-500 bg-blue-500/10 scale-105'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    onClick={() => setActiveRoute(index)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-sm font-medium text-gray-400">From</div>
                        <div className="text-lg font-bold text-white">{route.from}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-400">To</div>
                        <div className="text-lg font-bold text-white">{route.to}</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Clock className="w-4 h-4" />
                        {route.duration}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        route.mode === 'Air' 
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {route.mode}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { icon: Globe, value: '190+', label: 'Countries Served', color: 'from-blue-500 to-cyan-500' },
              { icon: Truck, value: '15,000+', label: 'Daily Shipments', color: 'from-emerald-500 to-green-500' },
              { icon: Shield, value: '99.7%', label: 'On-Time Delivery', color: 'from-amber-500 to-yellow-500' },
              { icon: BarChart3, value: '40%', label: 'Cost Reduction', color: 'from-purple-500 to-pink-500' }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <metric.icon className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  <div className="text-sm font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn btn-lg group relative overflow-hidden rounded-full px-10 py-5 bg-gradient-to-r from-blue-600 to-emerald-600 border-none text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center gap-3">
                Get Instant Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="btn btn-lg glass rounded-full px-10 py-5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
                Track Shipment
              </span>
            </button>
          </div>

          {/* Client Logos */}
          <div className="relative">
            <div className="text-center text-gray-400 mb-8 text-sm font-semibold tracking-wider">
              TRUSTED BY GLOBAL BRANDS
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {[
                { name: 'VOLVO', color: 'text-blue-400' },
                { name: 'MAERSK', color: 'text-emerald-400' },
                { name: 'DHL', color: 'text-yellow-400' },
                { name: 'FEDEX', color: 'text-purple-400' },
                { name: 'AMAZON', color: 'text-amber-400' },
                { name: 'TOYOTA', color: 'text-red-400' }
              ].map((company, index) => (
                <div 
                  key={index}
                  className={`text-xl font-bold ${company.color} hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer`}
                  style={{ filter: 'drop-shadow(0 0 10px currentColor)' }}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Shipping Container */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="flex animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="mx-4 w-48 h-24 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="text-center">
                <Package className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">CARGO {i+1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default LogisticsHeroSection;