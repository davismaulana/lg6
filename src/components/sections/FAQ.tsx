import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeIn } from '../animations/FadeIn';

const faqs = [
  {
    question: 'Apakah konsultasinya berbayar?',
    answer: 'Coach Ferly melakukan screening terlebih dahulu. Diskusi awal tidak dipungut biaya — tujuannya untuk memastikan ini cocok untuk Anda.',
  },
  {
    question: 'Apakah langsung dengan Coach Ferly?',
    answer: 'Proses dimulai dengan tim kami untuk kenalan dan diskusi awal. Jika sesuai kriteria, Anda akan dijadwalkan langsung dengan Coach Ferly.',
  },
  {
    question: 'Apa bedanya dengan coaching atau seminar lain?',
    answer: 'Coach Ferly bukan motivational speaker. Fokusnya adalah pada desain sistem bisnis dan eksekusi nyata, bukan sesi motivasi.',
  },
  {
    question: 'Berapa lama prosesnya?',
    answer: 'Dari chat pertama hingga jadwal konsultasi biasanya 2-5 hari kerja, tergantung ketersediaan.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <Card
                className="p-6 bg-zinc-900/30 border-zinc-800 hover:border-gold-500/20 cursor-pointer transition-all"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex justify-between items-center group">
                  <h3 className="text-lg font-medium text-gold-400 group-hover:text-gold-300 transition-colors">
                    {faq.question}
                  </h3>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </div>

                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === idx ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
