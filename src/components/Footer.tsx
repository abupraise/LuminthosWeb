import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950 to-black opacity-50" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Luminthos
            </h3>
            <p className="text-white/70">
              Transforming ideas into digital reality with cutting-edge solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Mobile Development', 'Web Development', 'UI/UX Design', 'Cloud Solutions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-red-500/20 rounded-l-lg focus:outline-none focus:border-red-500 text-white"
              />
              <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Luminthos Solutions. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="mt-4 md:mt-0 flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;