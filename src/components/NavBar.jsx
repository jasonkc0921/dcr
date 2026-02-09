'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

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

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button 
          className="md:hidden p-2 text-[#006072]" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#4e5d5f]">
          <a href="/#solutions" className="hover:text-[#006072] transition">Solutions</a>
          
          <div 
            className="relative group py-6"
            onMouseEnter={() => handleMouseEnter('loyalty')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[#006072] transition tracking-wider font-semibold">
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

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/#solutions" onClick={toggleMobileMenu} className="text-lg font-bold text-[#4e5d5f]">Solutions</Link>
          
          <div className="flex flex-col gap-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Loyalty Campaigns</p>
            <DropdownLink href="https://unirm.my/Member/Main.aspx">UOB Bank</DropdownLink>
            <DropdownLink href="https://pbrewards.my/Member/Main.aspx">Public Bank</DropdownLink>
            <DropdownLink href="https://bonuslink.com.my/products">Bonuslink</DropdownLink>
          </div>

          <Link href="/about" onClick={toggleMobileMenu} className="text-lg font-bold text-[#4e5d5f]">About Us</Link>
          
          <div className="flex flex-col gap-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">News</p>
            <Link href="/podcast" onClick={toggleMobileMenu} className="text-sm font-semibold">Podcast</Link>
            <Link href="/featurednews" onClick={toggleMobileMenu} className="text-sm font-semibold">Featured News</Link>
          </div>

          <Link href="/#footer" onClick={toggleMobileMenu}>
            <button className="w-full bg-[#006072] text-white py-4 rounded-xl font-bold shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

const DropdownLink = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block py-2 text-sm font-semibold text-[#006072] md:text-xs md:font-bold md:px-4 md:py-3 md:rounded-xl md:hover:bg-[#006072]/5 md:transition-colors"
  >
    {children}
  </a>
);

export default Navbar;