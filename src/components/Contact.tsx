import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
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
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
              <form className="space-y-6">
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

            <div className="h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg border border-red-500/20 p-4">
              <div className="w-full h-full flex items-center justify-center text-white/70">
                <MapPin className="w-8 h-8 text-red-500 mr-2" />
                <span>Map loading...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;