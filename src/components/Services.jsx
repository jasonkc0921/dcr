'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Box, CreditCard, ChevronRight } from 'lucide-react';

const Services = ({ fadeInUp, staggerContainer, onServiceClick }) => {
  return (
    <section id="solutions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Our Core Services.</h2>
          <p className="text-[#5a6b6d] font-medium">Click on a quadrant to explore specific features and capabilities.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {/* 1. Rewards & Loyalty */}
          <motion.div 
            variants={fadeInUp} whileHover={{ y: -10 }}
            onClick={() => onServiceClick('loyalty')}
            className="md:col-span-7 p-12 bg-[#F4F8F9] rounded-[3rem] relative group cursor-pointer border border-transparent hover:border-[#006072]/20 transition-all overflow-hidden"
          >
            <div className="relative z-10">
              <Users className="w-12 h-12 text-[#006072] mb-8" />
              <h3 className="text-3xl font-black mb-6 text-[#006072]">Rewards & Loyalty Programs</h3>
              <p className="text-[#5a6b6d] text-lg leading-relaxed max-w-md">End-to-end rewards, fulfilment, and loyalty infrastructure trusted by Malaysia’s leading financial institutions and large organisations in Malaysia.</p>
              <div className="mt-8 flex items-center gap-2 text-[#006072] font-black group-hover:gap-4 transition-all uppercase">
                Explore Features <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#006072]/5 rounded-bl-[10rem] transition-transform group-hover:scale-110" />
          </motion.div>

          {/* 2. Redemption */}
          <motion.div 
            variants={fadeInUp} whileHover={{ y: -10 }}
            onClick={() => onServiceClick('redemption')}
            className="md:col-span-5 p-12 bg-[#1a2b2e] text-white rounded-[3rem] shadow-xl relative group cursor-pointer overflow-hidden"
          >
            <Gift className="w-12 h-12 text-[#4A7729] mb-8" />
            <h3 className="text-2xl font-bold mb-4">Gift Voucher</h3>
            <p className="text-gray-400 leading-relaxed">A flexible, popular reward choice in Malaysia, perfect for incentives, gifting, and instant gratification.</p>
            <div className="mt-8 flex items-center gap-2 text-[#4A7729] font-black uppercase">
              View Details <ChevronRight className="w-5 h-5" />
            </div>
          </motion.div>

          {/* 3. Inventory */}
          <motion.div 
            variants={fadeInUp} whileHover={{ y: -10 }}
            onClick={() => onServiceClick('inventory')}
            className="md:col-span-5 p-12 bg-white rounded-[3rem] border-2 border-[#F4F8F9] group cursor-pointer hover:border-[#006072]/20 transition-all"
          >
            <Box className="w-12 h-12 text-[#4A7729] mb-8" />
            <h3 className="text-2xl font-bold mb-4 text-[#1a2b2e]">Warehousing & Fulfillment</h3>
            <p className="text-[#5a6b6d]">Trusted warehousing and nationwide fulfilment backed by 20 years of industry experience and strong brand partnerships.</p>
            <div className="mt-8 flex items-center gap-2 text-[#006072] font-black uppercase">
              Our Strength <ChevronRight className="w-5 h-5" />
            </div>
          </motion.div>

          {/* 4. EPP */}
          <motion.div 
            variants={fadeInUp} whileHover={{ y: -10 }}
            onClick={() => onServiceClick('epp')}
            className="md:col-span-7 p-12 bg-gradient-to-br from-[#006072] to-[#004d5c] rounded-[3rem] text-white relative group cursor-pointer"
          >
            <CreditCard className="w-12 h-12 text-[#4A7729] mb-8" />
            <h3 className="text-3xl font-black mb-6 tracking-tight">0% Easy Payment Plan</h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm mb-6">Flexi-payment solutions supporting 11 major local credit card banks.</p>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 inline-block font-bold uppercase text-xs tracking-wider">
              Click for bank list & info
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;