'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Helper to handle hover states
  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#006072]/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <div className="w-20 h-10 bg-gradient-to-br from-[#006072] to-[#4A7729] rounded-xl flex items-center justify-center shadow-lg shadow-[#006072]/20 overflow-hidden">
            <img 
              src="/dcr_logo.jpg" 
              alt="DCR Logo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </Link>

        {/* --- NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#4e5d5f]">
          <a href="/#solutions" className="hover:text-[#006072] transition">Solutions</a>
          
          {/* 1. LOYALTY CAMPAIGN DROPDOWN */}
          <div 
            className="relative group py-6"
            onMouseEnter={() => handleMouseEnter('loyalty')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[#006072] transition tracking-wider font-semibold]">
              Loyalty Campaign <ChevronDown size={14} className={`transition-transform ${openDropdown === 'loyalty' ? 'rotate-180' : ''}`} />
            </button>
            
            {openDropdown === 'loyalty' && (
              <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2">
                <DropdownLink href="https://unirm.my/Member/Main.aspx">UOB BANK REDEMPTION</DropdownLink>
                <DropdownLink href="https://pbrewards.my/Member/Main.aspx">PUBLIC BANK REDEMPTION</DropdownLink>
                <DropdownLink href="https://bonuslink.com.my/products">BONUSLINK REDEMPTION</DropdownLink>
                <DropdownLink href="https://dreamshop.com.my/promo/boostup">BOOST E-WALLET REDEMPTION</DropdownLink>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#006072] transition">About Us</Link>

          {/* 2. NEWS DROPDOWN (Podcast + Featured News) */}
          <div 
            className="relative group py-6"
            onMouseEnter={() => handleMouseEnter('news')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[#006072] transition tracking-wider font-semibold">
              News <ChevronDown size={14} className={`transition-transform ${openDropdown === 'news' ? 'rotate-180' : ''}`} />
            </button>
            
            {openDropdown === 'news' && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 animate-in fade-in slide-in-from-top-2">
                <DropdownLink href="/podcast">Podcast</DropdownLink>
                <DropdownLink href="/featurednews">Featured News</DropdownLink>
              </div>
            )}
          </div>

          <Link href="/#footer">
            <button className="bg-[#006072] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all shadow-md active:scale-95">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Reusable Dropdown Link Component
const DropdownLink = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block px-4 py-3 rounded-xl hover:bg-[#006072]/5 hover:text-[#006072] transition-colors text-xs font-bold"
  >
    {children}
  </a>
);

export default Navbar;