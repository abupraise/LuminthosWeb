import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Globe, Palette, Search, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform solutions that deliver exceptional user experiences.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Responsive, modern websites that drive engagement and conversions.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with data-driven SEO strategies and content optimization.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Scalable and secure database architectures for your business needs.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that convert.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimize your applications for speed and efficiency.',
  }
];

const ServiceCard = ({ icon: Icon, title, description }: typeof services[0]) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-lg border border-red-500/20 min-h-[250px]"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl" />
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </motion.div>

        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ transform: `translateY(${y}px)` }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;