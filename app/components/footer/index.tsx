'use client';

import React, { ReactNode } from 'react';
import { SOCIAL_LINKS, QUICK_LINKS, IT_SERVICES, FOOTER_LINKS } from '@/app/constants/footerData';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';
import ProgressBar from '../ProgressBar';
import { GoChevronRight } from 'react-icons/go';

const ICON_MAP: { [key: string]: ReactNode } = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0E1225] text-white pt-12">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('/path-to-network-pattern.png')] bg-cover opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-col items-center justify-between gap-8">
        {/* About Section */}
        <div className="flex flex-col gap-4 md:w-[30%] w-full">
          <div>
            <h2 className="text-xl font-bold mb-2">ABOUT COMPANY</h2>
            <ProgressBar />
          </div>
          <p className="text-sm text-gray-400">
            Professionally redefine transparent ROI through low-risk high-yield imperatives. Progressively create
            empowered, cost-effective users via team-driven solutions.
          </p>
          <div className="flex gap-3 mt-4">
            {SOCIAL_LINKS.map(({ icon, link }) => (
              <a key={icon} href={link} className="p-3 border rounded-full hover:bg-[#684DF4] transition">
                {ICON_MAP[icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-col w-full justify-end gap-20">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
              <ProgressBar />
            </div>
            <ul className="text-gray-400 space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item} className="flex items-center gap-2 hover:text-[#684DF4] cursor-pointer">
                  <GoChevronRight /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold mb-4">IT SERVICES</h2>
              <ProgressBar />
            </div>
            <ul className="text-gray-400 space-y-2">
              {IT_SERVICES.map((item) => (
                <li key={item} className="flex items-center gap-2 hover:text-[#684DF4] cursor-pointer">
                  <GoChevronRight /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 py-6 px-6 h-20 flex justify-center w-full items-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 <span className="text-[#684DF4]">TheFullSnackDevs</span>
          </p>

          {/* Footer Links */}
          <div className="flex gap-4 text-gray-400 text-sm">
            {FOOTER_LINKS.map(({ name, link }) => (
              <a key={name} href={link} className="hover:text-white">
                {name}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            className="fixed bottom-6 right-6 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
