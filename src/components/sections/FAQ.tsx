import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeIn } from '../animations/FadeIn';

const faqs = [
  {
    question: 'Apa bedanya dengan seminar bisnis pada umumnya?',
    answer: 'Seminar = teori massal. Di sini Coach Ferly membedah sistem operasional bisnis Anda langsung — cashflow, efisiensi tim, struktur biaya — dan memberikan solusi yang bisa dieksekusi.',
  },
  {
    question: 'Kenapa tidak cukup belajar dari YouTube atau buku bisnis?',
    answer: 'Konten gratis = pengetahuan umum. Coaching ini seperti dokter spesialis — memeriksa langsung operasional bisnis Anda, bukan memberi resep umum.',
  },
  {
    question: 'Apa bedanya dengan event motivasi?',
    answer: 'Motivational event = semangat beberapa hari. Coaching operasional = mengubah cara bisnis berjalan secara permanen — fokus pada sistem, proses, dan angka.',
  },
  {
    question: 'Kenapa fokusnya operasional, bukan marketing/sales?',
    answer: 'Bisnis miliaran sudah jago jualan. Masalahnya di belakang layar: cashflow bocor, proses tidak efisien, margin tipis. Di sinilah coaching operasional berdampak terbesar.',
  },
  {
    question: 'Berapa lama sampai terlihat hasilnya?',
    answer: 'Coaching ini fokus pada perbaikan sistem konkret — banyak klien merasakan perubahan nyata dalam 30-90 hari pertama.',
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
