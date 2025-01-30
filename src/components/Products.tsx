import { motion } from 'framer-motion';
import { ExternalLink, Code, Shield, Zap } from 'lucide-react';

const products = [
  {
    title: 'Excellify',
    description: 'AI-powered mobile app for SSCE prep: live classes, secure exams, and personalized learning.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
    tags: ['EduTech', 'AILearning', 'ExamPrep'],
    icon: Shield,
  },
  {
    title: 'Along',
    description: 'Real-time transportation updates—live traffic alerts, route changes, and schedules. Your smarter way to commute.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    tags: ['CommuteBetter', 'TransportTech'],
    icon: Zap,
  },
  {
    title: 'LuminCode',
    description: 'Cloud-based IDE with collaborative features and AI assistance.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    tags: ['Development', 'Cloud', 'Collaboration'],
    icon: Code,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Cutting-edge solutions that push the boundaries of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-red-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <product.icon className="absolute bottom-4 right-4 w-8 h-8 text-red-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-white/70 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-red-500/20 text-red-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;