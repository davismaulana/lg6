import React from 'react';
import { Card } from '../ui/Card';
import { XCircle } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const exclusions = [
  'Masih tahap rencana, belum ada bisnis yang berjalan',
  'Mencari investor atau pendanaan',
  'Belum ada omset atau baru memulai',
  'Mencari seminar motivasi atau quick fix',
];

const NotForYou: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Konsultasi Ini Bukan Untuk:
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-red-500/20 bg-red-900/10 hover:border-red-500/40 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />

              <ul className="space-y-6">
                {exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-200 text-lg">
                    <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-center text-sm text-gray-500 italic border-t border-red-500/20 pt-6">
                *Kami selektif demi memastikan kualitas diskusi yang relevan.
              </p>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { NotForYou };
