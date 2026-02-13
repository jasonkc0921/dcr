'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';
import Navbar from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const partners = [
    { name: "OSIM", logo: "/partners/OSIM-Logo_H.png" },
    { name: "Sony", logo: "/partners/sony-logo.png" },
    { name: "Panasonic", logo: "/partners/panasonic-logo.png" },
    { name: "Apple", logo: "/partners/Apple_logo_black.png" },
    { name: "Sharp", logo: "/partners/SHARP-Logo1.png" },
    { name: "Apacer", logo: "/partners/apacer.png" },
    { name: "Black and Decker", logo: "/partners/B-D_logo_finals__orange_stacked.png" },
    { name: "Belkin", logo: "/partners/Belkin-logo-20121.png" },
    { name: "Beurer", logo: "/partners/beurer-logo1.png" },
    { name: "Blaupunk", logo: "/partners/Blaupunkt-Logo1.png" },
    { name: "Braun", logo: "/partners/braun-logo.png" },
    { name: "Buffalo", logo: "/partners/buffalo-new-logo-FA.png" },
    { name: "Case-Logic", logo: "/partners/Case-Logic-logo.png" },
    { name: "Casio", logo: "/partners/casio-logo.png" },
    { name: "Corelle", logo: "/partners/Corelle.png" },
    { name: "Cornell", logo: "/partners/Cornell-logo.png" },
    { name: "Corningware", logo: "/partners/Corningware-new.png" },
    { name: "Delonghi", logo: "/partners/DeLonghi-logo.png" },
    { name: "Elba", logo: "/partners/elba-logo.png" },
    { name: "Faber", logo: "/partners/Faber-logo-Living-the-Italian-Style.png" },
    { name: "Fiorucci", logo: "/partners/Fiorucci-font-logo-copy.png" },
    { name: "Gardener", logo: "/partners/Gardener-logo.png" },
    { name: "Huawei", logo: "/partners/huawei-logo.jpg" },
    { name: "Imaxx", logo: "/partners/IMAXX-Logo.png" },
    { name: "Jabra", logo: "/partners/Jabra-Logo.png" },
    { name: "Kenwood", logo: "/partners/kenwood-logo.png" },
    { name: "La-Gourmet", logo: "/partners/La-Gourmet-Logo.png" },
    { name: "Lebensstil", logo: "/partners/lebensstil-kollektion-logo.png" },
    { name: "DKSH", logo: "/partners/Logo-DKSH.png" },
    { name: "Medklinn", logo: "/partners/MedKlinn-Logo.png" },
    { name: "Oasis-Swiss", logo: "/partners/oasis-swiss-logo300dpi-1.png" },
    { name: "Ogawa", logo: "/partners/ogawa-logo.png" }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a2b2e]">
      <Navbar />

      {/* --- HERO SECTION WITH TEAM BACKGROUND --- */}
      <section className="relative pt-48 pb-32 overflow-hidden flex items-center justify-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/team_pic.jpeg')" }}
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/60 via-transparent to-white/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-5xl md:text-8xl font-black tracking-tighter text-[#006072] mb-6 drop-shadow-sm"
          >
            Rediscover your <br />customers with us
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-xl text-[#1a2b2e] max-w-2xl mx-auto font-bold bg-white/40 backdrop-blur-sm py-2 rounded-lg"
          >
            DCR – The Industry Leader in Marketing & Loyalty Programs since 2006.
          </motion.p>
        </div>
      </section>

      {/* --- COMPANY STORY --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl font-black mb-6 text-[#006072]">The Industry Leader</h2>
            <p className="text-[#5a6b6d] text-lg leading-relaxed mb-6">
              DCR Marketing Sdn Bhd was established as a premier provider of customer loyalty and marketing programs in Malaysia. 
              We design, manage, advise and partner extensively in marketing programs for major corporations.
            </p>
            <p className="text-[#5a6b6d] text-lg leading-relaxed mb-8">
              Our strong alliance with various industry players and close relations to suppliers enable us to offer 
              highly competitive services in creating dynamic Marketing and Loyalty solutions.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Redemption & Fulfillment", "Stock Management", 
                "Inventory Control", "Warehousing Services", 
                "Mail Order", "Partnership Alliances"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-md font-bold text-[#1a2b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7729]" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative p-10 bg-[#006072] rounded-[3rem] text-white shadow-2xl"
          >
            <Award className="w-16 h-16 text-[#4A7729] mb-6" />
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Our strong alliance with various industry players enable us to offer highly competitive services.
            </h3>
            <p className="text-white/80 leading-relaxed">
              By leveraging our established networks and nearly two decades of expertise, we provide a one-stop marketing solution from curation to execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- AUTO-SCROLLING LOGO BAR --- */}
      <section className="py-20 border-y border-gray-100 bg-white overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-[#8a9b9d]">
            Trusted by World-Class Brands
          </h2>
        </div>
        
        <div className="relative flex items-center">
          <motion.div 
            className="flex whitespace-nowrap gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 40, 
              repeat: Infinity 
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-32 md:w-40 h-20 relative flex items-center justify-center hover:grayscale-0 transition-all duration-500"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 bg-[#1a2b2e] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-black text-[#4A7729] mb-2">18+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-50">Years Experience</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#4A7729] mb-2">100+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-50">Trusted Partners</div>
            </div>
            <div>
              <div className="text-6xl font-black text-[#4A7729] mb-2">1M+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-50">Merchandise Products</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;