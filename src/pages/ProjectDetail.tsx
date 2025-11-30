import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (data: Record<string, string>) => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    const cleanPhone = data.phone.replace(/[\s()-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (data.email && data.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = 'Введите корректный email';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      project: project?.title || 'Не указан',
      comment: formData.get('comment') as string,
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast({
        title: 'Проверьте заполнение формы',
        description: 'Некоторые поля содержат ошибки',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/3a37d2bc-1923-4ec9-894f-88eb4aa4b1f6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setShowSuccess(false), 5000);
        toast({
          title: '✅ Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: 'Попробуйте позже или позвоните нам',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <Icon name="Home" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Проект не найден</h2>
            <p className="text-muted-foreground mb-4">
              К сожалению, запрашиваемый проект не существует
            </p>
            <Link to="/catalog">
              <Button>Вернуться в каталог</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">BarnHouse</h1>
            </Link>
            <div className="flex gap-2">
              <Link to="/catalog">
                <Button variant="outline">Каталог</Button>
              </Link>
              <Link to="/">
                <Button variant="outline">Главная</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
          <Icon name="ArrowLeft" size={20} />
          <span>Назад к каталогу</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Badge className="mb-2">{project.category}</Badge>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <div className="text-3xl font-bold text-primary">
                {(project.price / 1000000).toFixed(1)} млн ₽
              </div>
            </div>

            <div className="mb-8">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl mb-4">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - фото ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    >
                      <Icon name="ChevronRight" size={24} />
                    </button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`Миниатюра ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Характеристики</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Maximize2" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Площадь</div>
                      <div className="font-semibold">{project.area} м²</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Bed" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Спален</div>
                      <div className="font-semibold">{project.rooms}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Layers" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Этажей</div>
                      <div className="font-semibold">{project.floors}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Bath" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Санузлов</div>
                      <div className="font-semibold">{project.bathrooms}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Описание</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Особенности проекта</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 relative overflow-hidden">
              {showSuccess && (
                <div className="absolute inset-0 bg-green-500/95 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in zoom-in duration-300">
                  <div className="text-center text-white">
                    <Icon name="CheckCircle2" size={64} className="mx-auto mb-4 animate-bounce" />
                    <h4 className="text-2xl font-bold mb-2">Отлично!</h4>
                    <p className="text-lg">Ваша заявка успешно отправлена</p>
                    <p className="text-sm mt-2 opacity-90">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Заказать проект</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input name="name" placeholder="Иван Иванов" required className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input name="phone" type="tel" placeholder="+7 905 710 8890" required className={errors.phone ? 'border-red-500' : ''} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input name="email" type="email" placeholder="pruddzen@gmail.com" className={errors.email ? 'border-red-500' : ''} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea name="comment" placeholder="Ваши пожелания..." rows={3} />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Нужна консультация?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Наши специалисты ответят на все вопросы и помогут с выбором проекта
                </p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+79057108890" className="flex items-center gap-2 hover:text-primary">
                    <Icon name="Phone" size={16} />
                    +7 905 710 8890
                  </a>
                  <a href="mailto:pruddzen@gmail.com" className="flex items-center gap-2 hover:text-primary">
                    <Icon name="Mail" size={16} />
                    pruddzen@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Похожие проекты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((similarProject) => (
                <Card
                  key={similarProject.id}
                  className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <Link to={`/catalog/${similarProject.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={similarProject.image}
                        alt={similarProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{similarProject.title}</h3>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{similarProject.area} м²</span>
                        <span className="font-semibold text-primary">
                          {(similarProject.price / 1000000).toFixed(1)} млн ₽
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;