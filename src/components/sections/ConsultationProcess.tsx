import React from 'react';
import { Card } from '../ui/Card';
import { MessageCircle, Target, ClipboardCheck, Calendar } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

const steps = [
  {
    num: 1,
    icon: MessageCircle,
    title: 'Kenalan',
    desc: 'Anda akan chat dengan tim kami. Kami ingin tahu tentang bisnis Anda secara singkat.',
  },
  {
    num: 2,
    icon: Target,
    title: 'Diskusi Bisnis',
    desc: 'Tim kami akan menanyakan tantangan utama yang sedang Anda hadapi.',
  },
  {
    num: 3,
    icon: ClipboardCheck,
    title: 'Evaluasi',
    desc: 'Coach Ferly akan mengevaluasi apakah konsultasi ini tepat untuk situasi Anda.',
  },
  {
    num: 4,
    icon: Calendar,
    title: 'Rekomendasi',
    desc: 'Jika cocok, Anda akan mendapat jadwal konsultasi langsung dengan Coach Ferly.',
  },
];

const ConsultationProcess: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Apa yang Terjadi Setelah Anda Chat?
            </h2>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} direction="left" delay={idx * 0.15}>
                <div className="flex gap-6 items-start">
                  {/* Number badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-lg shadow-gold-500/20">
                      {step.num}
                    </div>
                  </div>

                  {/* Card */}
                  <Card className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-gold-400" />
                      <h3 className="text-xl font-bold text-gold-400">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ConsultationProcess };
