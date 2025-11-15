import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-montserrat font-bold text-primary">BarnHouse</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О компании', 'Проекты', 'Преимущества', 'Этапы', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('контакты')}>Заказать проект</Button>
          </nav>
        </div>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-5xl font-montserrat font-bold text-foreground mb-6">
                Строим дома вашей мечты
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Современные дома в стиле barn house. Экологичные материалы, индивидуальный подход и гарантия качества.
              </p>
              <Button size="lg" onClick={() => scrollToSection('проекты')} className="mr-4">
                Наши проекты
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                Консультация
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/4dade106-fd83-46d8-976c-4057c58756f6.jpg"
                alt="Современный дом barn house"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">О компании</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Award" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-center mb-3">10+ лет опыта</h3>
                <p className="text-muted-foreground text-center">
                  Реализовали более 200 проектов по всей России
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Users" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-center mb-3">Команда профи</h3>
                <p className="text-muted-foreground text-center">
                  Архитекторы, инженеры и строители высшей квалификации
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Shield" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-center mb-3">Гарантия 10 лет</h3>
                <p className="text-muted-foreground text-center">
                  Полная гарантия на все виды работ и материалы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Скандинавия',
                area: '120 м²',
                price: 'от 6 000 000 ₽',
                image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/4dade106-fd83-46d8-976c-4057c58756f6.jpg',
              },
              {
                title: 'Минимализм',
                area: '150 м²',
                price: 'от 7 500 000 ₽',
                image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/17d014c6-051f-4ee0-bb15-32bd15f4a14e.jpg',
              },
              {
                title: 'Панорама',
                area: '180 м²',
                price: 'от 9 000 000 ₽',
                image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/f22e732d-fed8-48b0-914d-b9193e71ca80.jpg',
              },
            ].map((project, idx) => (
              <Card key={idx} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-montserrat font-semibold mb-3">{project.title}</h3>
                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Площадь: {project.area}</span>
                    <span className="font-semibold text-primary">{project.price}</span>
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('контакты')}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'TreePine', title: 'Экологичность', desc: 'Натуральные материалы' },
              { icon: 'Zap', title: 'Энергоэффективность', desc: 'Экономия на отоплении до 40%' },
              { icon: 'Clock', title: 'Быстрое строительство', desc: 'Срок возведения от 3 месяцев' },
              { icon: 'Wallet', title: 'Прозрачная цена', desc: 'Фиксированная смета' },
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-md text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <Icon name={item.icon as any} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="этапы" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Этапы работы</h2>
          <div className="space-y-6">
            {[
              { num: '01', title: 'Консультация', desc: 'Обсуждаем ваши пожелания, бюджет и сроки' },
              { num: '02', title: 'Проектирование', desc: 'Разрабатываем индивидуальный проект с учетом всех требований' },
              { num: '03', title: 'Смета и договор', desc: 'Составляем подробную смету и заключаем договор' },
              { num: '04', title: 'Строительство', desc: 'Возводим дом с контролем качества на каждом этапе' },
              { num: '05', title: 'Сдача объекта', desc: 'Передаем готовый дом с полным пакетом документов' },
            ].map((step, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-montserrat font-bold text-primary">{step.num}</span>
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Петров',
                text: 'Построили дом за 4 месяца. Качество на высоте, все работы выполнены точно в срок. Рекомендую!',
                rating: 5,
              },
              {
                name: 'Марина Сидорова',
                text: 'Очень довольны результатом! Дом получился теплым, уютным и красивым. Спасибо команде!',
                rating: 5,
              },
              {
                name: 'Дмитрий Козлов',
                text: 'Профессиональный подход на всех этапах. Особенно понравилась работа архитектора - воплотил все наши идеи.',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-montserrat font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12">Свяжитесь с нами</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Email</label>
                  <Input type="email" placeholder="example@mail.ru" required />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@barnhouse.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Строителей, д. 10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="font-montserrat">&copy; 2024 BarnHouse. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
