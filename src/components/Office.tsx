import { motion } from 'motion/react';
import { Sparkles, Coffee, ShieldCheck, Map } from 'lucide-react';

export function Office() {
  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1631217818242-a05903f6718b?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <section id="consultorio" className="py-20 sm:py-24 bg-sage-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 block">Estrutura e Conforto</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8 leading-tight font-serif text-balance">
              Um ambiente acolhedor no coração do Ouro Verde.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed md:max-w-xl">
              O consultório foi planejado para oferecer conforto e segurança tanto para crianças quanto para adultos. Localizado em uma área de fácil acesso em Campinas.
            </p>

            <div className="space-y-5 text-left max-w-lg mx-auto md:mx-0">
              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm sm:text-base">Sala de Espera Confortável</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Acolhimento imediato para sua família.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm sm:text-base">Materiais Lúdicos e Modernos</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Estimulação interativa para resultados eficazes.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm sm:text-base">Segurança em Primeiro Lugar</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Higiene rigorosa e ambiente preparado.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 sm:mt-12 text-primary font-bold hover:gap-4 transition-all touch-manipulation"
              >
                <Map size={20} />
                Ver Localização no Mapa
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 aspect-video rounded-2xl sm:rounded-[32px] overflow-hidden shadow-lg border-2 border-white"
            >
              <img 
                src={images[0]} 
                alt="Consultório Sala Principal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl sm:rounded-[32px] overflow-hidden shadow-lg border-2 border-white"
            >
              <img 
                src={images[1]} 
                alt="Detalhe Consultório" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl sm:rounded-[32px] overflow-hidden shadow-lg border-2 border-white"
            >
              <img 
                src={images[2]} 
                alt="Materiais de Atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
