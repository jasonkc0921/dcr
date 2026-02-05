'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Mic2, ExternalLink, User } from 'lucide-react';

const PodcastList = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Updated podcasts array with your actual content
  const podcasts = [
    {
      id: 1,
      category: "DREAMSHOP PODCAST (Episode 1)",
      title: "Mr Juan's Episode",
      guest: "Mr. Juan Chow Wee",
      organization: "DIDI Group",
      date: "Aug 04, 2023",
      duration: "60 min",
      description: "Insights into the DIDI Group journey and how brand partnerships are evolving in the Malaysian market.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremys-encounter-with-mr-juan-chow-wee-executive-director-of-didi-group-presented-by-dreamshop",
      // Use the thumbnail from image_f8a072.jpg or your asset path
      image: "/Dreamshop-Podcast-didi-group-juan.jpg" 
    },
    {
      id: 2,
      category: "DCR PODCAST (Episode 2)",
      title: "Nutrigene Modern Sciences",
      guest: "Dr Wenxi Choo",
      organization: "Nutrigene Modern Sciences",
      date: "Aug 11, 2023",
      duration: "60 min",
      description: "Exploring how their mission to democratize DNA testing, unveiling latent potentials and talents encoded in your child’s genetic blueprint.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremy-engages-in-a-conversation-with-dr-wenxi-choo-the-director-of-nutrigene-modern-sciences",
      image: "/Dreamshop-Podcast-Nutrigene-wenxi.jpg"
    },
    {
      id: 3,
      category: "DCR PODCAST (Episode 3)",
      title: "Ecotech Cleaning Industry",
      guest: "Mr Eric Wong",
      organization: "Ecotech Cleaning Industry",
      date: "Aug 18, 2023",
      duration: "60 min",
      description: "Find out how their HYLA ‘water separator’ filtration vacuum and the low-maintenance air cleaning system work",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremys-conversation-with-dr-nomas-alvin-yeow-certified-nutritionist",
      image: "/Dreamshop-Podcast-Ecotech-Cleaning-eric-wong.jpg"
    },
    {
      id: 4,
      category: "DCR PODCAST (Episode 4)",
      title: "Glampot Sdn Bhd",
      guest: "Ms Gabriena Lee",
      organization: "Glampot Sdn Bhd",
      date: "Aug 25, 2023",
      duration: "60 min",
      description: "Exploring topics from virtual browsing to in-store trials, delve into how Glampot is revolutionizing the shopping experience to cater to various preferences.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremys-memorable-encounter-with-ms-gabriena-lee-co-founder-of-glampot-boutique",
      image: "/Glampot-AFO-Interview-800x450-D7.jpg"
    },
    {
      id: 5,
      category: "DCR PODCAST (Episode 5)",
      title: "Milieu Solar Sdn Bhd",
      guest: "Mr Phum Boon Lim",
      organization: "Milieu Solar Sdn Bhd",
      date: "Sep 1, 2023",
      duration: "60 min",
      description: "Learn how they have established a strong reputation as a comprehensive solution provider, responsible for overseeing the entire solar energy journey, including all aspects of engineering, procurement, construction, and commissioning (EPCC) processes.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremys-enlightening-conversation-with-mr-phum-boon-lim-ceo-of-milieu-solar-sdn-bhd",
      image: "/Dreamshop-Podcast-Milieu-Solar-mr.-phum.jpg"
    },
    {
      id: 6,
      category: "DCR PODCAST (Episode 6)",
      title: "Epigenetic Experience Center",
      guest: "Dr. Nomas Alvin Yeow",
      organization: "Epigenetic Experience Center",
      date: "Sep 8, 2023",
      duration: "60 min",
      description: "Discovering how Dr. Yeow’s innovative approach delivers nutrients directly into the bloodstream, bypassing barriers like the digestive system!",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=jeremys-conversation-with-dr-nomas-alvin-yeow-certified-nutritionist-2",
      image: "/Dreamshop-Podcast-Epigenetic-Experience-Center-Nomas.jpg"
    },
    {
      id: 7,
      category: "DCR PODCAST (Episode 7)",
      title: "Suria Gold Jewellery & Accessories",
      guest: "Ms Hazel Tan",
      organization: "Suria Gold Jewellery & Accessories",
      date: "Sep 15, 2023",
      duration: "60 min",
      description: "Tune in to discover everything about gold as an investment and gain insights into what to consider when purchasing gold jewelry with Jeremy!",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=unlocking-the-golden-investment-opportunity-hanging-out-with-ms-hazel-tan-director-of-suria-gold-jewelry",
      image: "/EP7.jpg"
    },
    {
      id: 8,
      category: "DCR PODCAST (Episode 8)",
      title: "SJDX Tea – JDX Gift & Food Packaging S/B",
      guest: "Mr David Jong",
      organization: "JDX Tea – JDX Gift & Food Packaging S/B",
      date: "Sep 22, 2023",
      duration: "60 min",
      description: "Discovering their amazing festival gifts, specializing in Chinese New Year hampers and mooncakes, all crafted with “gifting sincerity and wellness” in mind. Join Jeremy on this exciting discussion!",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=galore-of-festival-gifts-hanging-out-with-mr-david-jong-retail-manager-of-jdx-gift-food-packaging-s-b",
      image: "/EP8.jpg"
    },
    {
      id: 9,
      category: "DCR PODCAST (Episode 9)",
      title: "Ruby-Cell Malaysia",
      guest: "Ms Lim Mei Yen",
      organization: "Ruby-Cell Malaysia",
      date: "Sep 29, 2023",
      duration: "60 min",
      description: "Explore the realm of timeless beauty with Ruby-Cell Skincare: Where Science Meets Radiance.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=discovering-the-beauty-hanging-out-with-ms-lim-mei-yen-chief-marketing-officer-and-director-of-ruby-cell-malaysia",
      image: "/EP9.jpg"
    },
    {
      id: 10,
      category: "DCR PODCAST (Episode 10)",
      title: "Chester Black Card",
      guest: "Dato Howard Chew",
      organization: "Chester Black Card",
      date: "Nov 10, 2023",
      duration: "60 min",
      description: "Explore the core of this exclusive Networking & Technology Merchant Platform—a global hub for investment, business networking, and education. Join Jeremy in this engaging discussion!",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=exploring-networking-and-technology-a-conversation-with-dato-howard-chew-group-executive-chairman-of-black-card-platform",
      image: "/EP10.jpg"
    },
    {
      id: 11,
      category: "DCR PODCAST (Episode 11)",
      title: "Mageline World",
      guest: "Ms Shirley Swu",
      organization: "Mageline World",
      date: "Oct 27, 2023",
      duration: "60 min",
      description: "Explore the world of conscious beauty and the art of enhancing natural beauty with Mageline World.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=revealing-the-beauty-within-a-conversation-with-shirley-swu-director-of-mageline-world",
      image: "/EP11.jpg"
    },
    {
      id: 12,
      category: "DCR PODCAST (Episode 12)",
      title: "Smart Rental",
      guest: "Mr Joshua Chin",
      organization: "Smart Rental",
      date: "Nov 3, 2023",
      duration: "60 min",
      description: "Explore how Smart Rental integrates ESG Sustainability and Tech Innovation in an enlightening conversation with Joshua Chin.",
      host: "Jeremy",
      spotifyUrl: "https://aforadio.my/?podcast=asias-first-sustainability-computer-subscription-a-conversation-with-joshua-chin-founder-ceo-of-smart-rental-sdn-bhd",
      image: "/EP12.jpg"
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 bg-[#F4F8F9]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-[#4A7729] font-bold tracking-widest uppercase text-xs">Industry Insights</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#1a2b2e] mt-4 mb-6 tracking-tighter">
            OUR <span className="text-[#006072]">PODCASTS</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#006072] mx-auto rounded-full mb-8" />
          <p className="text-[#5a6b6d] max-w-2xl mx-auto text-lg">
            Tune in to industry leaders and marketing experts as we discuss loyalty trends, 
            e-commerce innovations, and business growth strategies.
          </p>
        </motion.div>

        {/* Podcast Grid - Ensures similar content across each grid item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast) => (
            <motion.div
              key={podcast.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#006072]/5 group hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
            >
              {/* Thumbnail Area - Aspect Ratio Locked for Consistency */}
              <div className="relative overflow-hidden bg-[#1a2b2e] aspect-video sm:aspect-square md:aspect-video lg:aspect-[16/9]">
                <img 
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006072]/80 to-transparent z-10" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 bg-[#4A7729] rounded-full flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>

                {/* Episode Tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1 rounded-lg tracking-widest uppercase">
                    {podcast.category}
                  </span>
                </div>
              </div>

              {/* Content Area - Aligned Layout */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#006072]"/> {podcast.date}</span>
                  <span className="flex items-center gap-1.5"><Mic2 size={12} className="text-[#006072]"/> {podcast.duration}</span>
                </div>

                <h3 className="text-2xl font-black text-[#1a2b2e] leading-tight mb-2 group-hover:text-[#006072] transition-colors">
                  {podcast.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <User size={14} className="text-[#4A7729]" />
                  <p className="text-[#4A7729] text-sm font-bold">
                    {podcast.guest} <span className="text-[#5a6b6d] font-medium">({podcast.organization})</span>
                  </p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                  {podcast.description}
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-[10px] font-bold text-gray-400 uppercase italic">Host: {podcast.host}</p>
                  <a 
                    href={podcast.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#006072] font-black text-xs uppercase tracking-wider hover:text-[#4A7729] transition-colors"
                  >
                    Listen on Spotify <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastList;