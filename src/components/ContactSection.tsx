import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactSection = ({ handleSubmit }: ContactSectionProps) => {
  return (
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
                  <Input type="tel" placeholder="+7 905 710 8890" required />
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
                      <a href="tel:+79057108890" className="text-muted-foreground hover:text-primary">
                        +7 905 710 8890
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
  );
};

export default ContactSection;