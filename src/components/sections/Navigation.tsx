import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';
import { CTA_URL } from '../../lib/constants';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-bold text-black text-xs">
            CF
          </div>
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            COACH FERLY
          </span>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          size="sm"
          className="hidden md:flex gap-2"
          onClick={() => window.open(CTA_URL, '_blank')}
        >
          Mulai Konsultasi <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export { Navigation };
