import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import CallbackModal from './CallbackModal';

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ isVisible, scrollToSection }: HeroSectionProps) => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  return (
    <section id="главная" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Строим дома под ключ с 2014 года
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Дома в стиле<br />Barn House
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Создаем современные энергоэффективные дома из натуральных материалов.
              Индивидуальный проект, фиксированная цена и гарантия 10 лет.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">Срок от 4 месяцев</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">Рассрочка 0%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">Гарантия 10 лет</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('проекты')} className="px-8">
                Наши проекты
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsCallbackModalOpen(true)} className="px-8">
                Бесплатная консультация
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/b52f6fab-7fbb-40e4-9e8f-b97f7b1b5f00.jpg"
                alt="Современный дом barn house"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Построенных домов</div>
            </div>
          </div>
        </div>
      </div>
      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </section>
  );
};

export default HeroSection;