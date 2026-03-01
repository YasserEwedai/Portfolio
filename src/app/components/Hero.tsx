import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import profilePhoto from 'figma:asset/c777a2bd636cfe51371c188a354993dc3ef2d7a7.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-[5]">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Photo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={profilePhoto}
                alt="Yaser Ewida"
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500/30 shadow-2xl"
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Yaser Ewida
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mobile App Developer
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Flutter & Java Expert | 5+ Years Experience
            </motion.p>

            <motion.div 
              className="space-y-3 mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a 
                href="mailto:eng.yaser.ewida@gmail.com" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors justify-center md:justify-start"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>eng.yaser.ewida@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:+972598678895" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors justify-center md:justify-start"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Phone className="w-5 h-5" />
                <span>+972 598 678 895</span>
              </motion.a>
              <motion.div 
                className="flex items-center gap-2 justify-center md:justify-start"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                <span>Palestine – Gaza</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a 
                    href="https://www.linkedin.com/in/yasser-ewedai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <a 
                    href="https://github.com/YasserEwedai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/50"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}