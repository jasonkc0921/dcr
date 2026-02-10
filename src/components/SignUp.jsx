'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // Import to read URL parameters
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const SignUpFormContent = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    contactNumber: '',
    email: '',
    intention: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [emailError, setEmailError] = useState('');

  // Automatically pre-fill the dropdown based on URL params
  useEffect(() => {
    const intentionFromUrl = searchParams.get('intention');
    if (intentionFromUrl) {
      setFormData((prev) => ({ ...prev, intention: intentionFromUrl }));
    }
  }, [searchParams]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'email') {
      setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('A valid email is required.');
      return;
    }

    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ companyName: '', name: '', contactNumber: '', email: '', intention: '', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 pt-20">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-white p-12 rounded-[3rem] shadow-xl max-w-md border border-slate-100">
          <CheckCircle2 className="w-20 h-20 text-[#4A7729] mx-auto mb-6" />
          <h2 className="text-3xl font-black text-[#006072] mb-4">Submission Received!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">Thank you for reaching out. Our team will review your inquiry and get back to you within 24-48 hours.</p>
          <button onClick={() => setStatus('idle')} className="text-[#006072] font-bold underline hover:opacity-70 transition">Send another message</button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-[#006072] mb-4">Partner With Us</motion.h1>
          <p className="text-slate-500 text-lg">Tell us about your business goals and let's build something great together.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Company Name *</label>
            <input required type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all" placeholder="e.g. DCR Marketing Sdn Bhd" />
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name *</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all" placeholder="Enter your name" />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Contact Number *</label>
            <input required type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all" placeholder="+6012-345 6789" />
          </div>

          {/* Email Address */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Address *</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-6 py-4 bg-slate-50 border ${emailError ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all`} placeholder="you@company.com" />
            {emailError && <p className="mt-2 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {emailError}</p>}
          </div>

          {/* Intention Dropdown */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">How can we help? *</label>
            <div className="relative">
              <select 
                required 
                name="intention" 
                value={formData.intention} 
                onChange={handleChange} 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all appearance-none cursor-pointer pr-12 font-semibold text-[#1a2b2e]"
              >
                <option value="" disabled>Select your intention</option>
                <option value="loyalty-enquiry">Enquire About Loyalty Program</option>
                <option value="loyalty-supplier">Join as Loyalty Program Supplier</option>
                <option value="voucher-solutions">Explore Gift Voucher Solutions</option>
                <option value="fulfillment-services">Enquire About Fulfillment Services</option>
                <option value="dreamshop-merchant">Sign Up As DreamShop Merchant</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Message *</label>
            <textarea required name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#006072] outline-none transition-all resize-none" placeholder="Tell us more about your requirements..."></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="w-full bg-[#006072] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#004d5c] hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              {status === 'loading' ? 'Processing...' : <>Send Inquiry <Send size={18}/></>}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

// Main Export with Suspense Boundary for SearchParams
const SignUp = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#006072] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SignUpFormContent />
    </Suspense>
  );
};

export default SignUp;