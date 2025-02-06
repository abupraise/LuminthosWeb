import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true); // State to track map loading
  const [mapLoadTimeout, setMapLoadTimeout] = useState(false); // State to track if the map takes too long to load

  // Simulate a loading timeout for the map
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMapLoading) {
        setMapLoadTimeout(true); // If the map is still loading after 5 seconds, show the refresh button
      }
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer); // Cleanup the timer
  }, [isMapLoading]);

  // Function to reload the map
  const reloadMap = () => {
    setIsMapLoading(true); // Set loading state to true
    setMapLoadTimeout(false); // Reset the timeout state
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/70">Let's turn your vision into reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
              <form className="space-y-6">
                {/* Form fields */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-red-500/20 text-white focus:outline-none focus:border-red-500"
                    placeholder="Full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-red-500/20 text-white focus:outline-none focus:border-red-500"
                    placeholder="name@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-red-500/20 text-white focus:outline-none focus:border-red-500 h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.button>
              </form>

              {/* <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>+234 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>contact@luminthos.com</span>
                </div>
              </div> */}

            </div>

            {/* Map Section */}
            <div className="h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg border border-red-500/20 p-4 relative">
              {/* Loader and MapPin */}
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                  <div className="flex flex-col items-center gap-3">
                    <MapPin className="w-8 h-8 text-red-500 animate-bounce" />
                    <p className="text-white/70">Loading map...</p>
                  </div>
                </div>
              )}

              {/* Refresh Button */}
              {mapLoadTimeout && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-white/70">Map is taking too long to load.</p>
                    <button
                      onClick={reloadMap}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <RefreshCw className="w-5 h-5" />
                      <span>Refresh Map</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.07435594971!2d7.36782148081807!3d9.147757367502118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddffd56aa2721%3A0x17aa91e883977f6a!2sLandforce%20plaza%20(Sani%20Dogo%20house)!5e0!3m2!1sen!2sng!4v1738351046299!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoading(false)} // Set loading to false when the map loads
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;