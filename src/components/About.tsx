import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-white/90 text-lg leading-relaxed">
                At Luminthos Solutions, we're more than just a tech company. We're innovators, 
                dreamers, and problem-solvers passionate about creating digital experiences 
                that inspire and transform.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Our team of experts combines creativity with technical excellence to deliver 
                solutions that not only meet but exceed expectations. We believe in pushing 
                boundaries and exploring new possibilities in technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;