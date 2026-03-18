import React from 'react';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';

const AboutCoach: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Tentang Coach Ferly
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-gold-600/30 bg-zinc-900/50 hover:border-gold-500/50">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-48 h-48 rounded-full border-2 border-gold-500/30 mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/coach-ferly.png"
                    alt="Coach Ferly F. Raya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Coach Ferly F. Raya</h3>
                <p className="text-gold-400 font-medium">Senior Head Coach for Trillion-Scale Business Owners</p>
              </div>

              <div className="space-y-4 border-t border-zinc-700 pt-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    Berfokus membantu owner memperbaiki sistem operasional dan cashflow
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    Bukan motivator — fokus pada design & execution
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    Membangun bisnis yang profitable dan scalable
                  </li>
                </ul>

                <p className="text-gold-500/80 italic text-sm mt-6 text-center">
                  "Saya tidak coaching semua orang. Saya hanya bekerja dengan owner yang serius."
                </p>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export { AboutCoach };
