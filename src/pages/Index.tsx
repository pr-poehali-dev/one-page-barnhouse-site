import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <ContentSections
        scrollToSection={scrollToSection}
        projects={projects}
        advantages={advantages}
        stages={stages}
        testimonials={testimonials}
        faqs={faqs}
      />
      <ContactSection handleSubmit={handleSubmit} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
