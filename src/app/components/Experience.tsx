import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-500 bg-gray-800 border-gray-700 shadow-lg shadow-blue-500/10">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2 mb-2 text-white">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    Flutter Developer
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-300">Manarat Al-Asr</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Apr 2025 - Current</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Developed and maintained cross-platform Flutter applications for Android and iOS from a single codebase',
                  'Built responsive and user-friendly UI following modern UX practices',
                  'Implemented scalable app architecture using Bloc and Clean Architecture principles',
                  'Integrated RESTful APIs and Firebase services (Auth, Firestore, FCM, Storage)',
                  'Developed offline data handling and background synchronization features',
                  'Collaborated remotely with team members using Git and Agile workflows',
                  'Improved app stability and performance through structured refactoring and bug fixing'
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-3"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}