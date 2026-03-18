import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { CTA_URL } from '../../lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 pt-24">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Omset Sudah Miliaran.</span>
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Tapi Kenapa Cashflow Masih Sering Minus?
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Konsultasi bisnis eksklusif untuk pemilik usaha beromset miliaran
            yang ingin memperbaiki operasional dan cashflow agar bisnis benar-benar profitable.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <Button
            variant="primary"
            size="lg"
            className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-gold-600/20 transform hover:-translate-y-1 transition-all"
            onClick={() => window.open(CTA_URL, '_blank')}
          >
            Mulai Konsultasi <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export { Hero };
