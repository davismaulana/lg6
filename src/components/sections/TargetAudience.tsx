import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const criteria = [
  'Pemilik bisnis dengan omset miliaran',
  'Omset sudah besar tapi cashflow masih belum sehat',
  'Operasional sudah jalan tapi belum efisien',
  'Ingin bisnis yang benar-benar profitable, bukan hanya besar',
  'Terbuka untuk dicoaching, bukan hanya mencari motivasi',
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Konsultasi Ini Cocok Untuk Anda Jika:
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-green-500/20 bg-green-900/10 hover:border-green-500/40 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />

              <ul className="space-y-6">
                {criteria.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-200 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { TargetAudience };
