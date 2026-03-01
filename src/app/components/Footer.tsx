import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="px-6 py-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="mb-2 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Yaser Ewida. All rights reserved.
        </motion.p>
        <motion.p 
          className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Mobile App Developer | Flutter & Java Expert
        </motion.p>
      </div>
    </footer>
  );
}