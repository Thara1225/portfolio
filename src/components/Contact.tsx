'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactClick = (item: string) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 500);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS credentials
      await emailjs.send(
        'service_wgmascl',
        'template_rdikqdm',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'tharasari5@gmail.com', // Your email
        },
        'X7TUwno9BdbK6yS4t'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-4 animate-fade-in">Get In Touch</h2>
        <p className="text-xl text-center text-gray-300 mb-12 animate-fade-in-up">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl text-white font-semibold mb-6 animate-pop">Contact Information</h3>
            <div className="space-y-6">
              <div 
                className={`flex items-start cursor-pointer transition-all duration-300 transform hover:scale-105 p-4 rounded-lg ${
                  clickedItem === 'email' ? 'bg-blue-500/20 scale-105 shadow-lg shadow-blue-500/50' : 'hover:bg-slate-700/50'
                }`}
                onClick={() => handleContactClick('email')}
              >
                <div className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                  clickedItem === 'email' ? 'bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse' : 'bg-blue-500/20'
                }`}>
                  <svg className={`w-6 h-6 transition-colors duration-300 ${
                    clickedItem === 'email' ? 'text-white' : 'text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300">tharasari5@gmail.com</p>
                </div>
              </div>
              
              <div 
                className={`flex items-start cursor-pointer transition-all duration-300 transform hover:scale-105 p-4 rounded-lg ${
                  clickedItem === 'phone' ? 'bg-blue-500/20 scale-105 shadow-lg shadow-blue-500/50' : 'hover:bg-slate-700/50'
                }`}
                onClick={() => handleContactClick('phone')}
              >
                <div className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                  clickedItem === 'phone' ? 'bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse' : 'bg-blue-500/20'
                }`}>
                  <svg className={`w-6 h-6 transition-colors duration-300 ${
                    clickedItem === 'phone' ? 'text-white' : 'text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+94 71 129 1392</p>
                </div>
              </div>
              
              <div 
                className={`flex items-start cursor-pointer transition-all duration-300 transform hover:scale-105 p-4 rounded-lg ${
                  clickedItem === 'location' ? 'bg-blue-500/20 scale-105 shadow-lg shadow-blue-500/50' : 'hover:bg-slate-700/50'
                }`}
                onClick={() => handleContactClick('location')}
              >
                <div className={`flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                  clickedItem === 'location' ? 'bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse' : 'bg-blue-500/20'
                }`}>
                  <svg className={`w-6 h-6 transition-colors duration-300 ${
                    clickedItem === 'location' ? 'text-white' : 'text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-300">Matara , Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8 animate-fade-in-up">
                <a href="https://github.com/Thara1225" className="text-gray-400 hover:text-white transition transform hover:scale-125 hover:rotate-12">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ratl/" className="text-gray-400 hover:text-white transition transform hover:scale-125 hover:rotate-12">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-125 hover:rotate-12">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700 animate-slide-in-right animate-pop">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg animate-fade-in">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg animate-fade-in">
                  ❌ Failed to send message. Please email me directly at tharasari5@gmail.com
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-slate-800 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full flex justify-center items-center gap-2 py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-all duration-300 ${
                    status === 'sending' 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
