import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { ArrowRight } from 'lucide-react';
import { Group } from 'three';
import ParticlesContainer from './ParticlesContainer';

function ParticleField() {
  const points = useMemo(() => {
    const p = new Float32Array(6000);
    for (let i = 0; i < p.length; i += 3) {
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      p[i] = radius * Math.sin(phi) * Math.cos(theta);
      p[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      p[i + 2] = radius * Math.cos(phi);
    }
    return p;
  }, []);
  
  const pointsRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff0000"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* ParticlesContainer in the background */}
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>

      {/* Canvas for ParticleField */}
      {/* <Canvas className="absolute inset-0 z-10">
        <ParticleField />
      </Canvas> */}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-20" />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-30 h-screen flex items-center justify-center pt-16"
        style={{ transition: 'transform 0.1s ease-out' }}
      >
        <div className="text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white">
              Luminthos Solutions
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto">
                Transforming ideas into digital reality with cutting-edge solutions
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>

                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-red-500 text-white rounded-full overflow-hidden hover:bg-red-500/10 transition-colors"
                >
                  <span>Our Products</span>
                  <div className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="w-1 h-2 bg-white/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;