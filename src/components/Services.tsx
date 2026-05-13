import { motion } from 'motion/react';
import { Baby, Users, Brain, Mic2, Star, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Atendimento Infantil',
      description: 'Estimulação de fala, linguagem e desenvolvimento comunicativo para crianças em fase de crescimento.',
      icon: Baby,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Linguagem e Fala',
      description: 'Tratamento de dificuldades na articulação das palavras, gagueira e atrasos no desenvolvimento fonológico.',
      icon: Mic2,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Motricidade Orofacial',
      description: 'Trabalho com os músculos do rosto e boca para melhorar funções como respiração, mastigação e deglutição.',
      icon: Brain,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Fonoaudiologia Escolar',
      description: 'Assessoria para escolas e acompanhamento de crianças com dificuldades de aprendizagem ligadas à fala.',
      icon: Users,
      color: 'bg-orange-50 text-orange-600',
    }
  ];

  const highlights = [
    'Avaliação completa e detalhada',
    'Orientações individuais para a família',
    'Abordagem humanizada e acolhedora',
    'Uso de estratégias lúdicas e científicas'
  ];

  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 block">Serviços Especializados</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">Como posso te ajudar?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg text-balance">
              Oferecemos um acompanhamento personalizado para cada etapa do desenvolvimento e necessidades comunicativas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-slate-100 hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 transition-all group bg-white"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-sage-soft rounded-[30px] sm:rounded-[48px] p-6 sm:p-12 md:p-16 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 leading-tight">Diferenciais do nosso atendimento</h3>
            <p className="text-slate-600 mb-8 border-l-4 border-accent pl-4 sm:pl-6 italic text-sm sm:text-base">
              "Meu objetivo é que cada paciente se sinta ouvido e compreendido, criando um espaço seguro para o desenvolvimento da comunicação."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-6 sm:p-8 text-center border-2 sm:border-4 border-white">
               <div className="flex flex-col items-center">
                 <Star className="text-accent mb-3 fill-accent" size={24} />
                 <p className="text-lg sm:text-2xl font-serif text-primary mb-2 italic font-bold">Resgate a sua voz</p>
                 <p className="text-[10px] sm:text-sm text-slate-500 uppercase tracking-widest font-semibold">Transformando vidas através da comunicação</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
