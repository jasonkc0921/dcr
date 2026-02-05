'use client';
import React from 'react';
import Link from 'next/link'; // Import Link for internal routing

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#006072]/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- LOGO / HOME LINK --- */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <div className="w-20 h-10 bg-gradient-to-br from-[#006072] to-[#4A7729] rounded-xl flex items-center justify-center shadow-lg shadow-[#006072]/20">
                <img 
                 src="/dcr_logo.jpg" // Ensure your image is in public folder with this name
                 alt="DCR Logo"
                 className="w-full h-full object-cover object-top"
               />
          </div>
        </Link>

        {/* --- NAVIGATION LINKS --- */}
        <div className="flex items-center gap-8 text-sm font-semibold text-[#4e5d5f]">
          {/* Use hash for section on the same page */}
          <a href="/#solutions" className="hover:text-[#006072] transition">Solutions</a>
          
          {/* Internal link to the separate About Us page */}
          <Link href="/about" className="hover:text-[#006072] transition">
            About Us
          </Link>
          <Link href="/podcast" className="hover:text-[#006072] transition">
            Podcast
          </Link>
          <Link href="/#footer" className="hover:text-[#006072] transition">
          <button className="bg-[#006072] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all shadow-md active:scale-95">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;