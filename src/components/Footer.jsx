'use client';
import React from 'react';
import { 
  Mail, Phone, Printer, MapPin, 
  Facebook, Instagram, Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1a2b2e] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* --- CONTACT INFO --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#006072] font-black text-xl">D</span>
              </div>
              <span className="text-xl font-black tracking-widest uppercase">DCR Marketing</span>
            </div>
            
            <div className="space-y-6 text-gray-400">
              <p className="font-bold text-white mb-4">DCR Marketing Sdn Bhd</p>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#4A7729] shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  C-3-03, Capital 3, Oasis Square,<br />
                  No.2, Jalan PJU 1A/7A, Ara Damansara,<br />
                  47301 Petaling Jaya, Selangor, Malaysia.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#4A7729] shrink-0" />
                <p className="text-sm">+603-7832 6103 / +603-7832 5933 (hotline)</p>
              </div>

              <div className="flex items-center gap-4">
                <Printer className="w-5 h-5 text-[#4A7729] shrink-0" />
                <p className="text-sm">+603-7832 5103 (fax)</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#4A7729] shrink-0" />
                <a href="mailto:enquiries@dcr.com.my" className="text-sm hover:text-white transition">
                  enquiries@dcr.com.my
                </a>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest mb-4 font-bold text-white/50">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/theDCR/" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006072] transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/dcr_marketing/" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1306C] transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://g.page/dcr-marketing-sdn-bhd?share" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4A7729] transition">
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTACT FORM --- */}
{/*           <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <h4 className="text-2xl font-bold mb-2">Feel free to call or write anytime</h4>
            <p className="text-gray-400 text-sm mb-8">We usually respond within 24 business hours.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7729] transition w-full" />
                <input type="email" placeholder="Your email" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7729] transition w-full" />
              </div>
              <input type="text" placeholder="Subject" 
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7729] transition w-full" />
              <textarea placeholder="Your message" rows="4"
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7729] transition w-full resize-none"></textarea>
              
              <button type="submit" className="w-full py-4 bg-[#006072] hover:bg-[#4A7729] rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Submit
              </button>
            </form>
          </div> */}
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-bold tracking-widest">
          <p uppercase>&copy; {new Date().getFullYear()} DCR MARKETING SDN BHD (718792-P). ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>Direct Sales License No: AJL931909</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;