import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const StatCard = ({ value, label, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extrai o número e verifica se tem o sinal '+'
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const hasPlusSign = value.includes('+');
  const hasPercentSign = value.includes('%');
  
  useEffect(() => {
    if (inView) {
      // Configuração da animação
      const duration = 2; // Duração em segundos
      const startTime = Date.now();
      const easing = (t) => t * (2 - t); // Easing suave
      
      const animateCount = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        
        const currentValue = Math.floor(easedProgress * numericValue);
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          // Adiciona os símbolos após completar
          if (hasPlusSign) setDisplayValue(`${numericValue}+`);
          if (hasPercentSign) setDisplayValue(`${numericValue}%`);
        }
      };
      
      animateCount();
      
      // Animação de entrada do card
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          type: 'spring',
          stiffness: 100,
          delay: index * 0.15 
        }
      });
    }
  }, [inView, controls, index, numericValue, hasPlusSign, hasPercentSign]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-lg  backdrop-blur-sm rounded-xl border border-white/20 hover:border-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300 group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-5xl font-bold text-primary-400 mb-2"
      >
        {hasPercentSign ? `${displayValue}%` : displayValue}
      </motion.div>
      <h3 className="text-base md:font-medium text-blue-950 mb-2">{label}</h3>
      <p className="text-gray-600 italic mt-2 text-center text-sm md:text-base">{description}</p>
    </motion.div>
  );
};