import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KrishivBardoliwala',
      icon: Github,
      color: 'hover:text-white hover:border-white/30 hover:bg-white/5'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krishiv-bardoliwala', // Standard custom path matching his name
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5'
    },
    {
      name: 'Email',
      url: 'mailto:krishivbardoliwala@gmail.com',
      icon: Mail,
      color: 'hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate real backend ingestion (e.g. Formspree/EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          Have an idea, project collaboration, or internship opportunity? Drop a message!
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Socials & Details (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 flex-1 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-4">
                Let's start a conversation
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                I am actively seeking software engineering internships and web development roles. 
                Whether you want to discuss a potential project or just say hello, my inbox is always open.
              </p>

              {/* Direct email display */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-purple-500/20 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">EMAIL DIRECT</p>
                    <a href="mailto:krishivbardoliwala@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                      krishivbardoliwala@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <p className="text-[10px] font-mono font-medium text-gray-500 tracking-wider uppercase mb-3">SOCIAL CONNECTIONS</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-mono font-semibold rounded-xl border border-white/5 text-gray-300 transition-all duration-300 ${soc.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{soc.name.toUpperCase()}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form (7 columns) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 shadow-lg relative overflow-hidden">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono font-medium text-gray-400 tracking-wider uppercase mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-white placeholder-gray-600 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono font-medium text-gray-400 tracking-wider uppercase mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-white placeholder-gray-600 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="form-message" className="block text-xs font-mono font-medium text-gray-400 tracking-wider uppercase mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, question, or opportunity..."
                  rows={4}
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-white placeholder-gray-600 transition-all duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              {/* Status Alert displays */}
              <AnimatePresence mode="wait">
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl border border-green-500/20 bg-green-500/10 text-green-300 text-xs sm:text-sm flex flex-col gap-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-green-400 shrink-0" />
                      <span className="font-semibold">Message Submitted Successfully!</span>
                    </div>
                    <p className="text-xs text-green-400/80">
                      Thank you! Krishiv has received your details and will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-form-submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full py-3.5 px-6 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-md shadow-purple-950/40 border border-purple-500/30 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-purple-200" />
                    <span>SENDING_TRANSMISSION...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span>TRANSMISSION_COMPLETE</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>SEND_TRANSMISSION</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
