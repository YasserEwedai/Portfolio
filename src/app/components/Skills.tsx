import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Android (Java)', 'REST APIs', 'JSON'],
    color: 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30'
  },
  {
    title: 'Architecture & State Management',
    skills: ['MVVM', 'Clean Architecture', 'Bloc', 'Provider'],
    color: 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30'
  },
  {
    title: 'Backend & Databases',
    skills: ['Firebase', 'Firestore', 'Realtime DB', 'MySQL', 'SQL Server', 'SQLite'],
    color: 'bg-green-500/20 text-green-300 hover:bg-green-500/30 border border-green-500/30'
  },
  {
    title: 'Integrations',
    skills: ['Payment Gateways', 'Bluetooth Printers', 'Push Notifications', 'Maps & Location'],
    color: 'bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border border-orange-500/30'
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Firebase Console', 'Google Play Console'],
    color: 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30'
  },
  {
    title: 'Other',
    skills: ['JavaFX', 'VB.NET'],
    color: 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30 border border-gray-500/30'
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="px-6 py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary"
                          className={category.color}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}