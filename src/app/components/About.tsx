import { Card, CardContent } from './ui/card';
import { Code2, Rocket, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="px-6 py-20 bg-gray-900 relative overflow-hidden">
     
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Mobile Application Developer with <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5+ years of experience</span> building 
            scalable Android and Flutter applications for real-world business environments. Specialized in POS systems, 
            offline-first architectures, and hardware integrations including Bluetooth printers and payment peripherals. 
            Experienced in working on distributed teams, delivering features independently, and maintaining production apps 
            with a strong focus on performance, clean architecture, and reliability.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
              <CardContent className="pt-6 text-center">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code2 className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">Clean Architecture</h3>
                <p className="text-gray-400">
                  Expert in MVVM, Clean Architecture patterns, and scalable app design with Bloc and Provider
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
              <CardContent className="pt-6 text-center">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">Hardware Integration</h3>
                <p className="text-gray-400">
                  Specialized in integrating Bluetooth printers, payment gateways, and peripheral devices
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-6 text-center">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-8 h-8 text-purple-400" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">Team Collaboration</h3>
                <p className="text-gray-400">
                  Experienced in distributed teams, Agile workflows, and independent feature delivery
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
