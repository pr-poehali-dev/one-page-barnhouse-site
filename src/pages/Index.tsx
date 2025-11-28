import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

  const projects = [
    {
      title: 'Скандинавия',
      area: '120 м²',
      price: 'от 6 000 000 ₽',
      rooms: '3 спальни',
      floors: '2 этажа',
      image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/ee20dc25-3b59-41f9-8cd1-7d0bd7298bf7.jpg',
      features: ['Панорамные окна', 'Камин', 'Терраса'],
      description: 'Уютный дом в скандинавском стиле с акцентом на натуральные материалы'
    },
    {
      title: 'Минимализм',
      area: '150 м²',
      price: 'от 7 500 000 ₽',
      rooms: '4 спальни',
      floors: '2 этажа',
      image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/b52f6fab-7fbb-40e4-9e8f-b97f7b1b5f00.jpg',
      features: ['Гараж на 2 авто', 'Второй свет', 'Smart-home'],
      description: 'Современный дом с чистыми линиями и функциональными пространствами'
    },
    {
      title: 'Панорама',
      area: '180 м²',
      price: 'от 9 000 000 ₽',
      rooms: '4 спальни',
      floors: '2 этажа',
      image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/3ed303ad-e85f-41b2-b0c1-08c76a0b2592.jpg',
      features: ['Панорамное остекление', 'Сауна', 'Винный погреб'],
      description: 'Премиальный дом с видовым остеклением и роскошными интерьерами'
    },
  ];

  const advantages = [
    {
      icon: 'Home',
      title: 'Энергоэффективность',
      description: 'Современная изоляция и системы отопления снижают расходы на коммунальные услуги до 40%'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Используем натуральные материалы: клееный брус, камень, керамику без вредных примесей'
    },
    {
      icon: 'Clock',
      title: 'Быстрое строительство',
      description: 'Возведение под ключ за 4-6 месяцев благодаря проверенным технологиям'
    },
    {
      icon: 'Ruler',
      title: 'Индивидуальный проект',
      description: 'Разработаем уникальный дизайн с учетом ваших пожеланий и особенностей участка'
    },
    {
      icon: 'DollarSign',
      title: 'Прозрачная цена',
      description: 'Фиксированная стоимость в договоре без скрытых платежей и доплат'
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Полная гарантия 10 лет на конструкцию и 3 года на отделочные работы'
    },
  ];

  const stages = [
    {
      number: '01',
      title: 'Консультация и выбор проекта',
      description: 'Обсуждаем ваши пожелания, показываем готовые проекты или разрабатываем индивидуальный',
      duration: '1-2 дня'
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Создаем архитектурный и инженерный проекты с 3D-визуализацией',
      duration: '2-4 недели'
    },
    {
      number: '03',
      title: 'Подготовка участка',
      description: 'Геодезия, разметка, подготовка основания и коммуникаций',
      duration: '1-2 недели'
    },
    {
      number: '04',
      title: 'Фундамент',
      description: 'Заливка фундамента по выбранной технологии с учетом типа грунта',
      duration: '3-4 недели'
    },
    {
      number: '05',
      title: 'Возведение каркаса',
      description: 'Монтаж несущих конструкций, стен, перекрытий и кровли',
      duration: '4-6 недель'
    },
    {
      number: '06',
      title: 'Инженерные системы',
      description: 'Прокладка электрики, водоснабжения, канализации, отопления и вентиляции',
      duration: '3-4 недели'
    },
    {
      number: '07',
      title: 'Отделка',
      description: 'Внутренняя и внешняя отделка, установка окон, дверей, сантехники',
      duration: '6-8 недель'
    },
    {
      number: '08',
      title: 'Сдача объекта',
      description: 'Финальная проверка, устранение замечаний и передача ключей',
      duration: '1 неделя'
    },
  ];

  const testimonials = [
    {
      name: 'Александр и Мария',
      project: 'Проект "Скандинавия"',
      text: 'Построили дом мечты! Команда работала четко по графику, все этапы проходили согласование. Особенно порадовало качество материалов и внимание к деталям.',
      rating: 5,
      location: 'Московская область'
    },
    {
      name: 'Дмитрий Соколов',
      project: 'Проект "Минимализм"',
      text: 'Выбрали barn house за энергоэффективность и стиль. Не пожалели ни разу! Дом теплый, светлый, коммунальные платежи в 2 раза меньше соседей.',
      rating: 5,
      location: 'Ленинградская область'
    },
    {
      name: 'Елена Петрова',
      project: 'Индивидуальный проект',
      text: 'Изначально сомневалась, но архитектор предложил гениальное решение для нашего сложного участка. Получился не просто дом, а произведение искусства!',
      rating: 5,
      location: 'Краснодарский край'
    },
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает строительство?',
      answer: 'Полный цикл строительства под ключ занимает 4-6 месяцев в зависимости от сложности проекта и площади дома.'
    },
    {
      question: 'Какие материалы вы используете?',
      answer: 'Мы работаем с клееным брусом, металлокаркасом, SIP-панелями. Все материалы сертифицированы и имеют подтверждение экологичности.'
    },
    {
      question: 'Можно ли изменить готовый проект?',
      answer: 'Да, любой проект можно адаптировать под ваши пожелания: изменить планировку, площадь, материалы отделки или добавить дополнительные помещения.'
    },
    {
      question: 'Предоставляете ли вы рассрочку?',
      answer: 'Да, мы работаем с несколькими банками-партнерами и предлагаем рассрочку до 12 месяцев без процентов.'
    },
    {
      question: 'Какая гарантия на дом?',
      answer: 'Мы даем 10 лет гарантии на несущие конструкции и 3 года на отделочные работы. Все условия прописаны в договоре.'
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
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
              <Button className="w-full" onClick={() => scrollToSection('контакты')}>
                Заказать звонок
              </Button>
            </div>
          )}
        </div>
      </header>

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
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')} className="px-8">
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
      </section>

      <section id="проекты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Готовые проекты домов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите готовый проект или закажите индивидуальную разработку
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="border-none shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div>
                      <Icon name="Maximize2" size={16} className="text-primary inline mr-1" />
                      <span className="text-muted-foreground">{project.area}</span>
                    </div>
                    <div>
                      <Icon name="Bed" size={16} className="text-primary inline mr-1" />
                      <span className="text-muted-foreground">{project.rooms}</span>
                    </div>
                    <div>
                      <Icon name="Layers" size={16} className="text-primary inline mr-1" />
                      <span className="text-muted-foreground">{project.floors}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('контакты')}>
                    Получить расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не нашли подходящий проект?</p>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('контакты')}>
              Заказать индивидуальный проект
            </Button>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Почему мы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Преимущества barn house</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии строительства для комфортной жизни
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="этапы" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Как мы работаем</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Этапы строительства</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от идеи до ключей с контролем на каждом этапе
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative pl-8 pb-12 last:pb-0">
                {idx < stages.length - 1 && (
                  <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-primary/20" />
                )}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {stage.number}
                  </div>
                  <Card className="flex-1 border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{stage.title}</h3>
                        <Badge variant="outline" className="ml-4">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {stage.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{stage.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Общий срок строительства: <span className="font-bold text-primary">4-6 месяцев</span></p>
            <Button size="lg" onClick={() => scrollToSection('контакты')}>
              Рассчитать сроки для моего проекта
            </Button>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Что говорят о нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые уже живут в наших домах
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Icon name="MapPin" size={12} />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Вопросы и ответы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы о строительстве
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Icon name="HelpCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
            <Button variant="outline" onClick={() => scrollToSection('контакты')}>
              Задать вопрос специалисту
            </Button>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Свяжитесь с нами</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Начните строительство сегодня</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите бесплатную консультацию архитектора
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Интересующий проект</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>Скандинавия</option>
                      <option>Минимализм</option>
                      <option>Панорама</option>
                      <option>Индивидуальный проект</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary">
                          +7 (999) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:info@barnhouse.ru" className="text-muted-foreground hover:text-primary">
                          info@barnhouse.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Офис</div>
                        <div className="text-muted-foreground">
                          г. Москва, ул. Строителей, д. 15
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold">Режим работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 19:00<br />
                          Сб-Вс: 10:00 - 17:00
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Бесплатная консультация</h3>
                  <p className="mb-4 opacity-90">
                    Ответим на все вопросы о строительстве и поможем выбрать оптимальное решение
                  </p>
                  <Button variant="secondary" className="w-full">
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
