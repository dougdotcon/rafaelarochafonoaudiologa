import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Qual a duração das sessões?',
      answer: 'As sessões de fonoaudiologia geralmente duram entre 40 a 50 minutos, variando de acordo com o plano terapêutico e a necessidade específica do paciente.'
    },
    {
      question: 'Atende convênios ou apenas particular?',
      answer: 'No momento os atendimentos são realizados de forma particular. No entanto, fornecemos recibos e relatórios detalhados para que você possa solicitar o reembolso junto ao seu plano de saúde.'
    },
    {
      question: 'Quanto tempo dura o tratamento?',
      answer: 'O tempo de tratamento é subjetivo e depende da avaliação inicial, da queixa do paciente e da constância nas sessões. Após a avaliação, o fonoaudiólogo traça um prognóstico estimado.'
    },
    {
      question: 'Onde fica exatamente o consultório?',
      answer: 'Estamos localizados na região do Ouro Verde, em Campinas. O endereço exato é fornecido no agendamento, facilitando o acesso para quem mora nos bairros próximos.'
    },
    {
      question: 'Atende crianças com autismo (TEA)?',
      answer: 'Sim, realizamos atendimentos voltados para o desenvolvimento da comunicação em pacientes com TEA, utilizando abordagens personalizadas e estimulação adequada.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <MessageCircleQuestion size={18} />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Perguntas comuns</h2>
            <p className="text-sm sm:text-base text-slate-500">
              Tire suas principais dúvidas sobre o atendimento fonoaudiológico.
            </p>
          </motion.div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors touch-manipulation"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-primary text-base sm:text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-primary transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 sm:p-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50 border-t border-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
