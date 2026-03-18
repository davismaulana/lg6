import React from 'react';
import { Card } from '../ui/Card';
import { TrendingDown, Cog, Calculator, BarChart3 } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { StaggerContainer } from '../animations/StaggerContainer';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: TrendingDown,
    title: 'Cashflow Bocor',
    desc: 'Omset besar, tapi uang di rekening tidak mencerminkan. Cashflow bocor di sana-sini tanpa terdeteksi.',
  },
  {
    icon: Cog,
    title: 'Operasional Chaos',
    desc: 'Tim sudah banyak, tapi operasional masih berantakan. Banyak proses yang tidak efisien dan makan biaya.',
  },
  {
    icon: Calculator,
    title: 'Profit Tipis',
    desc: 'Revenue naik tapi margin makin tipis. Biaya operasional terus membengkak tanpa kontrol yang jelas.',
  },
  {
    icon: BarChart3,
    title: 'Scaling = Bleeding',
    desc: 'Setiap kali mau scale up, cashflow makin ketat. Pertumbuhan justru bikin bisnis makin rentan.',
  },
];

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Apakah Anda Mengalami Ini?
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="p-8 border-l-4 border-l-gold-500 bg-gold-500/5 hover:bg-gold-500/10 transition-colors duration-300 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/20 text-gold-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gold-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.4}>
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-20" />
            <div className="relative border border-gold-500/30 bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-semibold text-white leading-normal">
                Kalau salah satu dari ini terasa familiar — <span className="text-gold-500">ini bukan soal omset kurang, tapi soal sistem yang belum tepat.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { ProblemStatement };
