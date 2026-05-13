import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 1, type: 'spring' }}
      href="https://wa.me/5519000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl flex items-center justify-center group touch-manipulation"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={28} className="sm:w-8 sm:h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap text-sm sm:text-base">
        Agendar Consulta
      </span>
    </motion.a>
  );
}
