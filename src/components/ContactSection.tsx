import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website_hp: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const apiEndpoint = import.meta.env.VITE_API_URL || '/api/contact';

      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== false) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you. Your inquiry has been sent successfully.');
        setFormData({ name: '', email: '', message: '', website_hp: '' });
      } else {
        setStatus('error');
        setFeedbackMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setFeedbackMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#0F1D30] text-white overflow-hidden py-20 lg:py-28">
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[calc(100vh-6rem)] relative z-10">
        
        {/* LEFT COLUMN - Contact Information & Form */}
        <div className="lg:col-span-7 px-8 sm:px-12 md:px-16 lg:px-20 py-8 flex flex-col justify-center relative z-10">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C5A059] block mb-4"
            >
              ATTY. ABRAHAM ESPEJO
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-8"
            >
              Experience. <br />
              Discipline. <br />
              Perspective.
            </motion.h2>

            <div className="h-[1px] bg-[#C5A059]/40 w-full mb-8" />

            {/* Sub-credentials */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 text-slate-300 text-sm sm:text-base font-medium mb-8"
            >
              <p className="font-bold text-lg text-white">36 years in litigation</p>
              <p>Former Dean - San Sebastian College School of Law</p>
              <p>Former Dean - New Era University School of Law</p>
              <p className="text-[#C5A059] text-xs uppercase tracking-wider font-semibold pt-1">
                UP Law 1990 | UP Business 1985 | Lawyer & CPA
              </p>
            </motion.div>

            <div className="h-[1px] bg-[#C5A059]/30 w-full mb-8" />

            {/* Direct Contact Links */}
            <div className="mb-10 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059] block mb-2">
                DIRECT CONTACT
              </span>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <a 
                  href="tel:+639178870709" 
                  className="flex items-center gap-3 text-slate-200 hover:text-[#C5A059] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#14223D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold tracking-wider text-base">+63 917 887 0709</span>
                </a>

                <a 
                  href="mailto:abe@espejo-partners.online" 
                  className="flex items-center gap-3 text-slate-200 hover:text-[#C5A059] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#14223D] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold tracking-wider text-base">abe@espejo-partners.online</span>
                </a>
              </div>
            </div>

            {/* Functional Interactive Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[#14223D] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-2xl relative"
            >
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
                Send a Message
              </h3>

              {/* Success Banner */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-950/70 border border-emerald-500/50 rounded-xl p-6 text-center text-emerald-200 mb-6 space-y-2"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-lg text-white">Inquiry Sent</h4>
                  <p className="text-sm">{feedbackMessage}</p>
                </motion.div>
              )}

              {/* Error Banner */}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-rose-950/70 border border-rose-500/50 rounded-xl p-4 text-rose-200 text-sm mb-6 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>{feedbackMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot Spam Field */}
                <div className="hidden aria-hidden:true" style={{ display: 'none' }}>
                  <label htmlFor="website_hp">Do not fill this</label>
                  <input 
                    type="text" 
                    id="website_hp" 
                    name="website_hp" 
                    tabIndex={-1} 
                    autoComplete="off"
                    value={formData.website_hp} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required 
                      disabled={status === 'loading'}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#0F1D30] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      disabled={status === 'loading'}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#0F1D30] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    rows={4}
                    disabled={status === 'loading'}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your legal or professional inquiry..."
                    className="w-full bg-[#0F1D30] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0F1D30] font-bold text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>

            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN - Final Desk Portrait */}
        <div className="lg:col-span-5 relative bg-[#070D1F] overflow-hidden min-h-[460px] lg:min-h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img 
              src="/assets/images/closing-portrait.jpg" 
              alt="Atty. Abraham Espejo Closing Portrait" 
              className="w-full h-full object-cover object-center lg:object-top"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
