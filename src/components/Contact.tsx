import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      value: '(19) 00000-0000',
      href: 'https://wa.me/5500000000000'
    },
    {
      icon: Mail,
      label: 'E-mail Profissional',
      value: 'contato@rafaelarocha.com.br',
      href: 'mailto:contato@rafaelarocha.com.br'
    },
    {
      icon: Clock,
      label: 'Horário de Atendimento',
      value: 'Segunda a Sexta: 08:00 - 18:00',
      href: null
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Região do Ouro Verde - Campinas, SP',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 bg-sage-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl shadow-primary/10 overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
          
          <div className="p-6 sm:p-12 md:p-16 lg:p-20 order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3 block">Vamos conversar?</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-8 leading-tight">
                Agende sua consulta ou avaliação.
              </h2>
              <p className="text-xs sm:text-lg text-slate-600 mb-8 sm:mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
                A fonoaudiologia é o caminho para uma comunicação mais clara e segura. Estou aqui para ajudar.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:gap-6 text-left">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 sm:p-0 rounded-2xl bg-sage-soft/30 sm:bg-transparent border border-sage-soft/50 sm:border-0 group">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white sm:bg-sage-soft shadow-sm sm:shadow-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <info.icon size={18} className="sm:hidden" />
                      <info.icon size={24} className="hidden sm:block" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-sm sm:text-lg font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 truncate"
                        >
                          <span className="truncate">{info.value}</span>
                          <ExternalLink size={10} className="opacity-50 shrink-0 sm:w-3.5 sm:h-3.5" />
                        </a>
                      ) : (
                        <p className="text-sm sm:text-lg font-bold text-primary truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5519000000000"
                className="mt-8 sm:mt-16 w-full bg-primary text-white py-4 sm:py-6 rounded-xl sm:rounded-3xl font-bold text-sm sm:text-xl flex items-center justify-center gap-2 sm:gap-4 shadow-lg shadow-primary/10 hover:bg-primary-light transition-all touch-manipulation"
              >
                <MessageSquare size={18} className="sm:w-6 sm:h-6" />
                Agendar via WhatsApp
              </motion.a>
            </motion.div>
          </div>

          <div className="relative h-[200px] sm:h-[400px] lg:h-auto order-2 lg:order-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.8016462744!2d-47.1685!3d-22.9567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b9f1d0000001%3A0x0!2sOuro%20Verde%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1652190000000!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[0.9]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Consultório"
            ></iframe>
            
            <div className="absolute bottom-4 left-4 right-4 sm:top-8 sm:right-8 sm:left-auto bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/50 z-10 max-w-full sm:max-w-[220px]">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Localização</p>
              <p className="text-xs sm:text-sm font-bold text-primary flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                Próximo ao Terminal Ouro Verde
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
