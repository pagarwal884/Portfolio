import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const HeroSection = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
        {/* Left Section */}
        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
            Building Fast <br /> Reliable Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="text-xl md:text-xl lg:text-2xl text-purple-200 max-w-2xl mb-8">
            I'm Piyush Agarwal, a full-stack developer skilled in Django,
            JavaScript, and cloud platforms. With a strong foundation in Java,
            Python, and C++, I’ve built and deployed real-world projects like an
            Electricity Billing System, Cold Email Generator, and IPO
            Registration platform.
          </motion.p>

          {/* Contact Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            onClick={openContactForm}
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-800 hover:from-violet-700 hover:to-purple-900 rounded-xl text-lg font-medium shadow-lg shadow-violet-900/40 hover:shadow-violet-800/50 transition-all duration-300">
            Contact Me
          </motion.button>
        </div>

        {/* Right Section */}
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-[-10%] xl:top-0 w-full xl:w-[70%] h-[40vh] sm:h-[50vh] lg:h-[60vh] xl:h-full"
          scene="https://prod.spline.design/mxDrijUDoAb372Hf/scene.splinecode"
        />
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.5,
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-2xl font-bold text-cyan-300">
                  Get In Touch
                </h1>
                <button
                  onClick={closeContactForm}
                  className="p-1.5 rounded-full hover:bg-gray-700 transition-colors">
                  <FiX className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 mt-2">
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
