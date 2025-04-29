'use client';

import React, { useState } from 'react';
import { Send, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

const Help: React.FC = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Help & Support</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className={`lg:col-span-2 ${bgColor} rounded-lg p-6 border ${borderColor}`}>
          <h3 className="text-lg font-medium mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600">
                <option>Technical Support</option>
                <option>Course Related</option>
                <option>Billing Issue</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600 h-32"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">FAQs</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  How do I reset my password?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Where are my certificates?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  How to download course materials?
                </a>
              </li>
            </ul>
          </div>

          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Live Chat</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">Chat with our support team</p>
            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Start Chat
            </button>
          </div>

          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Call Us</h3>
            </div>
            <p className="text-sm text-gray-400">Available 24/7</p>
            <p className="text-lg font-medium">+2349039267685</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
