import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  scrollToSection: (id: string) => void;
  projects: Array<{
    title: string;
    area: string;
    price: string;
    rooms: string;
    floors: string;
    image: string;
    features: string[];
    description: string;
  }>;
  advantages: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  stages: Array<{
    number: string;
    title: string;
    description: string;
    duration: string;
  }>;
  testimonials: Array<{
    name: string;
    project: string;
    text: string;
    rating: number;
    location: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const ContentSections = ({
  scrollToSection,
  projects,
  advantages,
  stages,
  testimonials,
  faqs,
}: ContentSectionsProps) => {
  return (
    <>
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
            <p className="text-muted-foreground mb-4">Смотрите все проекты в каталоге</p>
            <Link to="/catalog">
              <Button variant="outline" size="lg">
                Открыть каталог
              </Button>
            </Link>
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
    </>
  );
};

export default ContentSections;