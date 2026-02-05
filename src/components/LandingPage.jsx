'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Globe, Layers, CreditCard, Zap, CheckCircle2, 
  MousePointer2, Gift, Search, Lock, Clock, Truck, Users
} from 'lucide-react';

// Import sub-components
import Navbar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import Groups  from './Groups';
import Footer from './Footer';

const LandingPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const serviceDetails = {
    loyalty: {
      title: "Rewards & Loyalty Programs",
      color: "bg-[#006072]",
      features: [
        { icon: <Globe className="w-5 h-5" />, title: "Online Purchase", desc: "Allow customers and employees to purchase items without leaving home." },
        { icon: <Layers className="w-5 h-5" />, title: "Instalment Plans", desc: "Enjoy up to 36 months affordable monthly instalments (subject to card type)." },
        { icon: <CreditCard className="w-5 h-5" />, title: "Easy Payment Facilities", desc: "Increases affordability and sales for your products." },
        { icon: <Zap className="w-5 h-5" />, title: "Advanced Ordering", desc: "A hassle-free system delivering products right to the doorstep in days." }
      ]
    },
    redemption: {
      title: "Redemption & Fulfillments",
      color: "bg-[#1a2b2e]",
      features: [
        { icon: <CheckCircle2 className="w-5 h-5" />, title: "Full Process Handling", desc: "We manage employee rewards, credit card rewards, and mail orders." },
        { icon: <MousePointer2 className="w-5 h-5" />, title: "Multi-Method Redemption", desc: "Conventional, online, or on-the-spot—state your preference." },
        { icon: <Gift className="w-5 h-5" />, title: "Added Gift Services", desc: "Gift-wrapping, address confirmation, and doorstep delivery with acknowledgement." },
        { icon: <Search className="w-5 h-5" />, title: "Real-Time Tracking", desc: "Tracking is done online in real-time. We handle all queries and complaints." }
      ]
    },
    inventory: {
      title: "Inventory & Warehousing",
      color: "bg-[#4A7729]",
      features: [
        { icon: <Lock className="w-5 h-5" />, title: "24-Hour Security", desc: "Surveillance, authorized card access systems, and insurance coverage." },
        { icon: <Layers className="w-5 h-5" />, title: "Inventory Control", desc: "Our system monitors stock levels to save you unnecessary costs." },
        { icon: <Clock className="w-5 h-5" />, title: "Just-In-Time Management", desc: "Minimizes storage space, passing the cost benefits directly to you." },
        { icon: <Truck className="w-5 h-5" />, title: "Diverse Categories", desc: "Premium gifts, consumer appliances, household, health & beauty, and vouchers." }
      ]
    },
    epp: {
      title: "0% Easy Payment Plan",
      color: "bg-gradient-to-r from-[#006072] to-[#4A7729]",
      features: [
        { icon: <Zap className="w-5 h-5" />, title: "0% Interest", desc: "Enjoy up to 60 affordable monthly instalments (subject to card availability)." },
        { icon: <CreditCard className="w-5 h-5" />, title: "Single Terminal", desc: "Hassle-free. Accept up to 11 major local credit card banks." },
        { icon: <Users className="w-5 h-5" />, title: "Everyone Wins", desc: "Secures better cash flow for merchants while customers benefit from flexi-instalments." },
        { icon: <Gift className="w-5 h-5" />, title: "Earn Points", desc: "A quick and easy way to secure customer loyalty through point-earning rewards." }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a2b2e]">
      <Navbar />
      <Hero fadeInUp={fadeInUp} />
      <Services 
        fadeInUp={fadeInUp} 
        staggerContainer={staggerContainer} 
        onServiceClick={setActiveModal} 
      />
      <Groups />
      <Footer />

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  y: 0,
                  transition: { type: "spring", damping: 25, stiffness: 300 } 
                }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
              <div className={`${serviceDetails[activeModal].color} p-8 text-white flex justify-between items-center`}>
                <h3 className="text-2xl font-black tracking-tight">{serviceDetails[activeModal].title}</h3>
                <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceDetails[activeModal].features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#006072]/20 transition-all">
                    <div className="text-[#006072] shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                <button className="px-8 py-3 bg-[#006072] text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all">
                  Request Full Brochure
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;