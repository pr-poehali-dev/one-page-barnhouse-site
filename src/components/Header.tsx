import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">BarnHouse</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Проекты', 'Преимущества', 'Этапы', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors font-medium">
              Каталог
            </Link>
            <Link to="/calculator" className="text-foreground hover:text-primary transition-colors font-medium">
              Калькулятор
            </Link>
          </div>
          <Button className="hidden md:inline-flex" onClick={() => scrollToSection('контакты')}>
            Заказать звонок
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-foreground" />
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {['Главная', 'Проекты', 'Преимущества', 'Этапы', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded transition-colors"
              >
                {item}
              </button>
            ))}
            <Link to="/catalog" className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded transition-colors">
              Каталог
            </Link>
            <Link to="/calculator" className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded transition-colors">
              Калькулятор
            </Link>
            <Button className="w-full" onClick={() => scrollToSection('контакты')}>
              Заказать звонок
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;