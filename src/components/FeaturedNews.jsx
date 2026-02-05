'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    date: '12 May 2021',
    category: 'Corporate',
    title: 'Support Local At The Artisans Showcase This Weekend',
    excerpt: 'The virtual shopping mall championing local brands, The Artisans Haven (TAH) is going physical for the first time at The LINC KL this weekend.',
    image: '/Support_local_artisan.jpg',
    slug: 'https://www.tatlerasia.com/lifestyle/arts/the-artisans-showcase'
  },
  {
    id: 2,
    date: '16 Mar 2021',
    category: 'Innovation',
    title: 'These Two Malaysian Women Created A Digital Mall To Help Local Artisans & Small Businesses',
    excerpt: 'The Artisans Haven was founded in May 2020 in the midst of the pandemic during CMCO by two incredible Malaysian women',
    image: '/artisan_mall.jpg',
    slug: 'https://says.com/my/lifestyle/artisans-haven-online-store-malaysia'
  },
   {
    id: 3,
    date: '29 Oct 2021',
    category: 'Partnership',
    title: 'Beli VESPA Secara Dalam Talian. Ansuran Mudah 0% Sehingga 3 Tahun. Bermula RM475 Sebulan',
    excerpt: 'Peminat Vespa kini sudah boleh membeli jentera penuh gaya itu secara dalam talian buat pertama kalinya menerusi platform e-dagang Dreamshop.com.my.',
    image: '/press-release-7-vespa.jpg',
    slug: 'https://www.mekanika.com.my/beli-vespa-secara-dalam-talian-ansuran-mudah-0-sehingga-3-tahun-bermula-rm475-sebulan/#google_vignette'
  },
  {
    id: 4,
    date: '7 Apr 2021',
    category: 'Innovation',
    title: '虚拟商城展现本地创意,黄彩莹珍视手作的温度',
    excerpt: '点击进入The Artisans Haven的官网，映入眼帘的是一张张商场及店铺的照片，让人不禁疑惑：这家新商场到底是开在哪里？',
    image: '/oriental-daily-2-1536x1536.jpg',
    slug: 'https://www.orientaldaily.com.my/news/rwf/2021/04/07/403447'
  },
  {
    id: 5,
    date: '13 Oct 2022',
    category: 'Partnership',
    title: 'DREAMSHOP Collaborates With CIMB Bank To Offer 0% Monthly Installments Of Up To 60 Months For APRILIA Customers',
    excerpt: 'With the PETRONAS GRAND PRIX OF MALAYSIA (previously known as MotoGP™ Malaysia) fever hitting Malaysia again, Dreamshop makes their customers’ dream of owning a brand new Aprilia bike come true!',
    image: '/press-release-3-drivingmotion.jpg',
    slug: 'https://drivingmotion.com/dreamshop-collaborates-with-cimb-bank-to-offer-0-monthly-instalments-of-up-to-60-months-for-aprilia-customers/'
  },
  {
    id: 6,
    date: '13 Oct 2022',
    category: 'Partnership',
    title: 'Dreamshop partnered CIMB to make your dream a reality',
    excerpt: 'Dreamshop has collaborated with CIMB Bank to make your dream of owning a brand new Aprilia bike a reality, by offering 0% Easy Pay Plan of up to 60 months to Aprilia enthusiasts. ',
    image: '/press-release-1-cimb.jpg',
    slug: 'https://www.auto-news-asia.com/?p=16713'
  }
];

const FeaturedNews = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#006072] mb-4"
            >
              Featured News
            </motion.h1>
            <p className="text-slate-500 text-lg">
              The latest updates, press releases, and corporate milestones from DCR Marketing.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-[#006072]">All News</span>
            <span className="px-4 py-2 hover:bg-white transition cursor-pointer border border-transparent rounded-full text-xs font-bold text-slate-400">Press Releases</span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#006072]/10 transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#006072] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4 uppercase tracking-tighter">
                  <Calendar size={14} />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-[#006072] transition-colors">
                  <Link href={`${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <Link 
                    href={`${item.slug}`}
                    className="flex items-center gap-2 text-[#006072] font-bold text-sm group/btn"
                  >
                    Read Story 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  {/* <button className="text-slate-300 hover:text-[#4A7729] transition-colors">
                    <Share2 size={18} />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;