import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StatCard } from './StatCard';


export const ImpactStats = ({ title, stats, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`shadow-lg font-medium mt-4 px-4 sm:px-6 lg:px-8  ${className}`}>
      <div className="w-full mx-auto">
        <motion.h2
          ref={ref}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 rounded-xl  overflow-hidden transition transform hover:scale-105"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-950">
          {stats.map((stat, index, label, value) => (
            <StatCard 
              key={index} 
              index={index} 
              value={stat.value} 
              label={stat.label} 
              description={stat.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};