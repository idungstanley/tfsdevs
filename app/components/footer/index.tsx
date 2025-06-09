'use client';

import React, { ReactNode } from 'react';
import { SOCIAL_LINKS, QUICK_LINKS, FOOTER_LINKS } from '@/app/constants/footerData';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';
import ProgressBar from '../ProgressBar';
import { GoChevronRight } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa6';
import Logo from '../sidebar/Logo';
import { contactInformations } from '@/app/constants/courseOfferrings';
import Link from 'next/link';
import { bootCampItems } from '@/app/constants/navigation';

export const ICON_MAP: { [key: string]: ReactNode } = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative text-white pt-12">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('/path-to-network-pattern.png')] bg-cover opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* About Section */}
        <div className="flex flex-col gap-4 md:w-[30%] w-full">
          <div className="flex flex-col gap-2 w-full">
            <Logo expanded={true} />
            <ProgressBar />
          </div>
          <div className="flex flex-col gap-3 w-full h-full">
            {contactInformations.map((info, index) => (
              <div key={index} className="flex items-center gap-2 cursor-pointer text-white text-sm">
                <div className="flex flex-col gap-1">
                  <p>{info.message}</p>
                  <a href={info.link} className="font-[600] hover:text-gray-400/90">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            {SOCIAL_LINKS.map(({ icon, link }) => (
              <a key={icon} href={link} className="p-3 border rounded-full hover:bg-[#684DF4] transition">
                {ICON_MAP[icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-end gap-20">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
              <ProgressBar />
            </div>
            <ul className="text-gray-400 space-y-2">
              {QUICK_LINKS.map((item, index) => (
                <Link
                  href={item.route}
                  onClick={() => history.pushState(null, '', item.route)}
                  key={index}
                  className="flex items-center gap-2 hover:text-[#684DF4] cursor-pointer"
                >
                  <GoChevronRight /> {item.label}
                </Link>
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
              {bootCampItems.map((item) => (
                <Link
                  href={item.route}
                  key={item.label}
                  className="flex items-center gap-2 hover:text-[#684DF4] cursor-pointer"
                >
                  <GoChevronRight /> {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 py-6 px-6 md:px-28 h-20 w-full">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-gray-400 text-sm">
            {`Copyright © ${currentYear}`} <span className="text-[#684DF4]">TheFullSnackDevs</span>
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
            className="fixed bottom-6 cursor-pointer right-6 bg-[#684DF4] text-white p-3 rounded-full shadow-lg hover:bg-[#684DF4] transition"
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
