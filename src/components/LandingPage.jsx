'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Globe, Layers, CreditCard, Zap, CheckCircle2, 
  MousePointer2, Gift, Search, Lock, Clock, Truck, Users,
  ShieldCheck, Handshake, TrendingUp, Settings, BarChart3, Box,
  Target, Rocket, ShieldAlert, LineChart, BadgeCheck
} from 'lucide-react';

import Navbar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import Groups from './Groups';
import Footer from './Footer';

const LandingPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const router = useRouter(); // Initialize router

  const handleButtonClick = (intentionValue) => {
    setActiveModal(null); // Close modal
    router.push(`/signup?intention=${intentionValue}`); // Navigate with query param
  };

  const serviceDetails = {
    loyalty: {
      title: "Loyalty Program Management",
      color: "bg-[#006072]",
      features: [
        { icon: <ShieldCheck className="w-5 h-5" />, title: "Structured Compliance", desc: "Strengthen long-term customer loyalty through structured, compliant, and scalable rewards programs." },
        { icon: <Handshake className="w-5 h-5" />, title: "Motivate Partners", desc: "Motivate agents, dealers, and partners with measurable incentives that drive performance and retention." },
        { icon: <TrendingUp className="w-5 h-5" />, title: "Data-Driven Mechanics", desc: "Increase engagement and repeat behaviour using data-driven, goal-based loyalty mechanics." },
        { icon: <Settings className="w-5 h-5" />, title: "End-to-End Management", desc: "Reduce operational complexity with centralized fulfilment, reporting, and end-to-end programme management." }
      ],
      buttons: [
        { label: "Loyalty Program Enquiry", primary: true, intention: "loyalty-enquiry" },
        { label: "Join as Supplier", primary: false, intention: "loyalty-supplier" }
      ]
    },
    redemption: {
      title: "Gift Voucher",
      color: "bg-[#1a2b2e]",
      features: [
        { icon: <Gift className="w-5 h-5" />, title: "Flexible Choice", desc: "Flexible reward choice accepted across multiple brands and categories." },
        { icon: <Zap className="w-5 h-5" />, title: "Instant Issuance", desc: "Instant issuance with faster fulfilment compared to physical rewards." },
        { icon: <BarChart3 className="w-5 h-5" />, title: "Budget Control", desc: "Easy to manage, track, and control reward budgets at scale." },
        { icon: <Handshake className="w-5 h-5" />, title: "Ideal for Incentives", desc: "Ideal for customer rewards, employee incentives, and dealer programmes." }
      ],
      buttons: [
        { label: "Explore Gift Voucher Solutions", primary: true, intention: "voucher-solutions" }
      ]
    },
    inventory: {
      title: "Warehousing & Fulfillment",
      color: "bg-[#4A7729]",
      features: [
        { icon: <Box className="w-5 h-5" />, title: "Professional Management", desc: "Secure warehousing managed by experienced fulfilment professionals." },
        { icon: <Truck className="w-5 h-5" />, title: "Nationwide Delivery", desc: "Nationwide delivery via trusted courier partners." },
        { icon: <Clock className="w-5 h-5" />, title: "Proven Reliability", desc: "Proven SLA performance backed by 20 years’ experience." },
        { icon: <Handshake className="w-5 h-5" />, title: "Strong Partnerships", desc: "Strong, long-term merchandise brand partnerships." }
      ],
      buttons: [{ label: "Fulfilment Enquiry", primary: true, intention: "fulfillment-services" }]
    },
    epp: {
      title: "0% Easy Payment Plan",
      color: "bg-gradient-to-r from-[#006072] to-[#4A7729]",
      features: [
        { icon: <TrendingUp className="w-5 h-5" />, title: "Higher Order Value", desc: "Customers upgrade to premium options when instalment plans make it affordable." },
        { icon: <Target className="w-5 h-5" />, title: "Increased Conversion", desc: "Turn browsers into buyers—instalments close the deal when customers are on the fence." },
        { icon: <Globe className="w-5 h-5" />, title: "Massive Market Reach", desc: "Access 10+ million credit cards across 11 partner banks in Malaysia." },
        { icon: <ShieldAlert className="w-5 h-5" />, title: "Zero Payment Risk", desc: "Receive full settlement upfront (minus transaction fees)—no chasing payments." },
        { icon: <Rocket className="w-5 h-5" />, title: "Marketing Amplification", desc: "Featured in DreamShop and partner bank campaigns for maximum visibility." },
        { icon: <LineChart className="w-5 h-5" />, title: "Weekly Auto-Settlement", desc: "Thursday cutoff, Monday payment—consistent, predictable cash flow." },
        { icon: <BadgeCheck className="w-5 h-5" />, title: "Competitive Fees", desc: "Transaction fees vary by bank and tenure—affordable and transparent." },
        { icon: <Zap className="w-5 h-5" />, title: "Fast Activation", desc: "Go live in 7-10 working days (subject to approval)—start selling sooner." }
      ],
      buttons: [{ label: "Start Selling on DreamShop", primary: true, intention: "dreamshop-merchant" }]
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a2b2e]">
      <Navbar />
      <Hero fadeInUp={fadeInUp} />
      <Services fadeInUp={fadeInUp} staggerContainer={staggerContainer} onServiceClick={setActiveModal} />
      <Groups />
      <Footer />

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} className="relative w-full max-w-3xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className={`${serviceDetails[activeModal].color} p-8 text-white flex justify-between items-center`}>
                <h3 className="text-2xl font-black tracking-tight">{serviceDetails[activeModal].title}</h3>
                <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors"><X className="w-6 h-6" /></button>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
                {serviceDetails[activeModal].features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-[#006072] shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-center gap-4">
                {serviceDetails[activeModal].buttons.map((btn, i) => (
                  <button 
                    key={i}
                    onClick={() => handleButtonClick(btn.intention)} // Integrated click handler
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      btn.primary ? "bg-[#006072] text-white" : "bg-white border border-gray-200 text-gray-700"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;