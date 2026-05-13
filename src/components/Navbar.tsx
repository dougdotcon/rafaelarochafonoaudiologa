import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Consultório', href: '#consultorio' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-lg sm:text-xl font-bold text-primary tracking-tight">Rafaela Rocha</span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent font-semibold -mt-1">Fonoaudióloga</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5519000000000"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary-light transition-all"
          >
            <Phone size={16} />
            Agendar
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 -mr-2 touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-6 border-t border-slate-50"
            >
              {menuItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-slate-700 hover:text-primary active:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/5519000000000"
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl text-lg font-bold mt-2 shadow-lg shadow-primary/20"
              >
                <Phone size={20} />
                Agendar Avaliação
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
