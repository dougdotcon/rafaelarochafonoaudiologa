import { motion } from 'motion/react';
import { ArrowRight, MapPin, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden bg-sage-soft">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[10%] right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white/50 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={12} className="text-primary" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-light whitespace-nowrap">Atendimento no Ouro Verde</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.2] md:leading-[1.1] text-primary mb-6 text-balance">
            Cuidado humanizado para a sua <span className="text-accent italic">comunicação</span>.
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Fonoaudiologia especializada em atendimento infantil e adulto. 
            Resgate a confiança no falar, ouvir e se expressar com quem valoriza sua história.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contato"
              className="bg-primary text-white px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg inline-flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-light transition-all touch-manipulation"
            >
              Agendar Consulta
              <ArrowRight size={20} />
            </motion.a>
            <a
              href="#sobre"
              className="px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg inline-flex items-center justify-center gap-2 text-primary border border-primary/20 hover:bg-white/50 transition-all touch-manipulation"
            >
              Conhecer Fono
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex items-center justify-center md:justify-start gap-6 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Award size={20} className="text-accent" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-primary">Especialista</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Formação Clínica</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-slate-200 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
              alt="Rafaela Rocha - Fonoaudióloga"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay visual info */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/50 shadow-lg">
                <p className="font-serif text-base sm:text-lg font-bold text-primary mb-1">Dra. Rafaela Rocha</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                   CRFa: 0-0000 <span className="opacity-30">|</span> Ouro Verde
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-accent/20 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
