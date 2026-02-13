'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const Groups = ({ fadeInUp }) => {
  const [playing, setPlaying] = useState({});

  const handlePlay = (name) => {
    setPlaying((prev) => ({ ...prev, [name]: true }));
  };

  // 1. Function to open links in a new tab (SEO & Performance Optimized)
  const openInNewTab = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const businessGroups = [
    {
      name: "Dreamshop",
      tagline: "Dreams Become Reality",
      desc: "Your getaway with a full range of products and gift voucher B2C e-commerce platform. Pay with points or enjoy 0% Interest Easy Payment Plans from 11 different banks.",
      stats: [
        { label: "Annual Redeemed Value", value: "13.04%" },
        { label: "Points Awarded Manually", value: "17.23%" }
      ],
      videoSrc: "/videos/DCR_Presentation_Final.mp4",
      thumbnail: "/dreamshop-thumb.jpg", 
      color: "from-[#006072] to-[#004d5c]",
      href: "https://dreamshop.com.my/?utm_source=DCR%20WEBSITE&utm_medium=DCR%20WEBSITE&utm_campaign=DCR%20WEBSITE" // Added URL
    },
    {
      name: "Gift Voucher",
      tagline: "Buy, Send & Redeem",
      desc: "Shop from hundreds of retailer gift vouchers—promo, paper, or e-vouchers delivered to your doorstep. Safe, easy, and convenient.",
      stats: [
        { label: "Voucher Selections", value: "300+" },
        { label: "Niche Categories", value: "7" }
      ],
      videoSrc: "/videos/GiftVoucher.mp4",
      thumbnail: "/justvoucher_thumbnail.jpg",
      color: "from-[#1a2b2e] to-black",
      reverse: true,
      href: "https://giftvoucher.my/?utm_source=DCR%20WEBSITE&utm_medium=DCR%20WEBSITE&utm_campaign=DCR%20WEBSITE" // Added URL
    }
  ];

  return (
    <section className="py-24 bg-[#F4F8F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#1a2b2e] mb-4 uppercase tracking-tighter">Our Specialized Groups</h2>
          <div className="h-1.5 w-24 bg-[#006072] mx-auto rounded-full" />
        </div>

        <div className="space-y-32">
          {businessGroups.map((group) => (
            <motion.div 
              key={group.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row items-center gap-16 ${group.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* VIDEO SIDE */}
              <div className="flex-1 w-full relative group">
                <div className="aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white transition-all">
                  {!playing[group.name] && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 pointer-events-none group-hover:bg-black/40 transition-all">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white fill-current" />
                      </div>
                    </div>
                  )}

                  <video 
                    controls 
                    playsInline
                    preload="metadata"
                    onPlay={() => handlePlay(group.name)}
                    poster={group.thumbnail} 
                    className="w-full h-full object-cover"
                  >
                    <source src={group.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="flex-1 space-y-8 text-left">
                <div>
                  <h3 className="text-5xl font-black text-[#006072] mb-2 tracking-tighter uppercase">{group.name}</h3>
                  <p className="text-[#4A7729] font-bold tracking-widest uppercase text-xs">{group.tagline}</p>
                </div>
                
                <p className="text-[#5a6b6d] leading-relaxed text-lg font-medium">{group.desc}</p>

                <div className="grid grid-cols-2 gap-8">
                  {group.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-black text-[#1a2b2e]">{s.value}</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* 2. Button with New Tab logic */}
                <button 
                  onClick={() => openInNewTab(group.href)}
                  className={`px-8 py-4 bg-gradient-to-r ${group.color} text-white rounded-2xl font-bold flex items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95`}
                >
                  Visit {group.name} <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Groups;