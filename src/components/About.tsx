import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Heart, ScrollText } from 'lucide-react';

export function About() {
  const qualifications = [
    {
      year: '2020',
      title: 'Graduação em Fonoaudiologia',
      school: 'Nome da Universidade'
    },
    {
      year: '2022',
      title: 'Especialização em Motricidade',
      school: 'Instituição de Ensino'
    },
    {
      year: '2023',
      title: 'Curso de Extensão em ABA',
      school: 'Centro de Formação'
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[30px] sm:rounded-[48px] overflow-hidden shadow-2xl bg-slate-100 aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Fonoaudióloga Rafaela Rocha"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary text-white p-6 sm:p-8 rounded-[25px] sm:rounded-[40px] shadow-xl z-20">
              <span className="block text-3xl sm:text-4xl font-bold mb-1">5+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 leading-tight">Anos de<br/>Experiência</span>
            </div>
            {/* Decors */}
            <div className="absolute top-1/2 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-50 sm:opacity-100" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-accent mb-6">
              <Heart size={18} className="fill-accent shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Sobre Rafaela Rocha</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8 leading-tight">
              Dedicada a transformar vidas através da <span className="text-accent">comunicação</span>.
            </h2>
            
            <div className="space-y-4 mb-8 sm:mb-10 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                Olá! Sou Rafaela Rocha, fonoaudióloga apaixonada por ajudar pessoas a desenvolverem sua capacidade de se expressar com clareza e confiança. Minha trajetória é pautada pelo estudo contínuo.
              </p>
              <p>
                Com foco principal em crianças e adultos da região do Ouro Verde e Campinas, acredito que cada atendimento deve ser único e acolhedor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sage-soft flex items-center justify-center text-primary shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm sm:text-base">Formação Acadêmica</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Graduada em Fonoaudiologia com foco clínico especializado.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sage-soft flex items-center justify-center text-primary shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm sm:text-base">Experiência Clínica</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Atuação em clínicas de referência e suporte familiar.</p>
                </div>
              </div>
            </div>

            {/* Qualifications list - Visual Resume */}
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100">
               <div className="flex items-center gap-2 mb-6 text-primary">
                 <ScrollText size={18} />
                 <h4 className="font-bold uppercase tracking-wider text-[10px] sm:text-xs text-balance">Formação e Qualificações Principais</h4>
               </div>
               <div className="space-y-5">
                 {qualifications.map((q, i) => (
                   <div key={i} className="flex items-start gap-4 pb-4 border-b border-white last:border-0 last:pb-0">
                     <span className="text-accent font-bold text-[10px] sm:text-xs bg-white px-3 py-1 rounded-full shadow-sm shrink-0">{q.year}</span>
                     <div>
                        <p className="font-bold text-primary leading-[1.2] mb-1 text-sm sm:text-base">{q.title}</p>
                        <p className="text-[10px] sm:text-xs text-slate-500">{q.school}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
