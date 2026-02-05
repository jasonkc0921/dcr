'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = ({ fadeInUp }) => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center pt-32 pb-24 px-6 md:px-20 overflow-hidden bg-cover bg-right md:bg-center"
      style={{ 
        // Replace with your actual image path
        backgroundImage: "url('dcr_hero1.png')", 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      {/* Content Container: Aligned to the left to match your graphic */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-2xl text-left" // Changed from text-center to text-left
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-widest uppercase bg-white/80 backdrop-blur-sm border border-[#006072]/10 text-[#006072] rounded-md shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" /> Market Premier Since 2006
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#1a2b2e]">
            The Trusted Engine <br />
            <span className="text-[#006072]">
              Behind Top Brands.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-[#5a6b6d] mb-10 max-w-lg font-medium leading-relaxed">
            Join the network powering Malaysia's financial leaders with 18+ years of expertise in loyalty marketing and e-commerce.
          </p>

          {/* Action Button - To match the "Get Started" in the reference */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-[#006072] text-white rounded-xl font-bold shadow-lg shadow-[#006072]/20 hover:bg-[#004d5c] transition-all flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;