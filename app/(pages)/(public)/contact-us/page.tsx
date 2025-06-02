'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '@/app/components/button/Button';
import InputWithLabel from '@/app/components/input/InputWithLabel';
import { MdSubject } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { SOCIAL_LINKS } from '@/app/constants/footerData';
import { ICON_MAP } from '@/app/components/footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-32 md:px-20 p-4">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-[700] text-left md:text-center md:px-10 text-white md:text-base text-sm text-wrap w-full]">
              [ GET IN <span className="text-[#684DF4]"> TOUCH</span> ]
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg">
              Have any concern? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you as
              soon as possible.
            </p>
          </motion.div>

          <div className="flex w-full justify-center gap-12 flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/3 bg-slate-900 rounded-lg p-6"
            >
              <div className="card h-full">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-gray-400"></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <a
                        href="mailto:info@thefullsnackdevs.com"
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        info@thefullsnackdevs.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <a href="tel:+2349039267685" className="text-gray-400 hover:text-primary-500 transition-colors">
                        +234(90)39267685
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-bold">Connect with us:</p>
                    <div className="flex gap-3">
                      {SOCIAL_LINKS.map(({ icon, link }) => (
                        <a
                          key={icon}
                          href={link}
                          target="_blank"
                          className="p-3 border rounded-full hover:bg-[#684DF4] transition"
                        >
                          {ICON_MAP[icon]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 bg-slate-900 rounded-lg p-6"
            >
              <form onSubmit={handleSubmit} className="card">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <div className="space-y-4">
                  <InputWithLabel
                    name="fullName"
                    required
                    label="Your Name"
                    placeholder="John Doe"
                    labelClasses="text-white mb-1 font-semibold"
                    classes="border-0.5 px-2 bg- text-[15px] text-white border border-gray-500"
                    trailingIconClasses="top-6"
                    value={formData.fullName}
                    leadingIcon={<CiUser className="text-white" />}
                    width="w-full"
                    onChange={(e) => handleChange(e)}
                    height="h-[40px] rounded-lg"
                  />
                  <div className="flex items-center gap-4">
                    <InputWithLabel
                      name="email"
                      label="Email"
                      required
                      placeholder="johndoe@example.com"
                      labelClasses="text-white mb-1 font-semibold"
                      classes="border-0.5 px-2 text-[15px] text-white border border-gray-500"
                      trailingIconClasses="top-6"
                      value={formData.email}
                      leadingIcon={<AiOutlineMail className="text-white" />}
                      width="w-full"
                      onChange={handleChange}
                      height="h-[40px] rounded-lg"
                    />
                    <InputWithLabel
                      name="subject"
                      label="Subject"
                      placeholder="Subject"
                      labelClasses="text-white mb-1 font-semibold"
                      classes="border-0.5 px-2 text-[15px] text-white border border-gray-500"
                      trailingIconClasses="top-6"
                      value={formData.subject}
                      leadingIcon={<MdSubject className="text-white" />}
                      width="w-full"
                      onChange={handleChange}
                      height="h-[40px] rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="ml-1 text-red-500">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-background-primary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    ></textarea>
                  </div>
                  <Button
                    label="Send Message"
                    width="w-full"
                    type="submit"
                    buttonStyle="custom"
                    height="h-[45px]"
                    labelSize="text-[15px] font-lg rounded-md"
                    customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full hover:opacity-90"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
