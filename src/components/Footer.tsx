import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Home" size={24} />
              <h3 className="text-xl font-bold">BarnHouse</h3>
            </div>
            <p className="text-sm opacity-80">
              Строим современные энергоэффективные дома в стиле barn house с 2014 года
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2 text-sm">
              {['Проекты', 'Преимущества', 'Этапы', 'Отзывы'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block hover:text-primary transition-colors opacity-80 hover:opacity-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div>+7 (999) 123-45-67</div>
              <div>info@barnhouse.ru</div>
              <div>г. Москва, ул. Строителей, 15</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 BarnHouse. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
