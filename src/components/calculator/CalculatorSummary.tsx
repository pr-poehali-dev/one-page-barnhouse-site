import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { CalculatorState, formatPrice } from './types';

interface CalculatorSummaryProps {
  state: CalculatorState;
  totalPrice: number;
}

const CalculatorSummary = ({ state, totalPrice }: CalculatorSummaryProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const calculatorDetails = `Площадь: ${state.area}м², Этажей: ${state.floors}, Фундамент: ${state.foundation}, Стены: ${state.walls}, Кровля: ${state.roof}, Окна: ${state.windows}, Отделка: ${state.finishing}, Итого: ${formatPrice(totalPrice)} ₽`;
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      project: 'Расчет калькулятора',
      comment: `${formData.get('comment') || ''}

${calculatorDetails}`,
    };

    try {
      const response = await fetch('https://functions.poehali.dev/678bf41d-e2ef-4af3-b427-46d0d7a3c206', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Расчет отправлен!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
        e.currentTarget.reset();
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
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Итоговая стоимость</h2>
        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <div className="text-4xl font-bold text-primary mb-2">
            {formatPrice(totalPrice)} ₽
          </div>
          <div className="text-sm text-muted-foreground">
            ~{formatPrice(Math.round(totalPrice / state.area))} ₽/м²
          </div>
        </div>

        <div className="space-y-3 mb-6 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Площадь:</span>
            <span className="font-semibold">{state.area} м²</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Этажей:</span>
            <span className="font-semibold">{state.floors}</span>
          </div>
          <div className="border-t pt-3">
            <div className="text-xs text-muted-foreground mb-2">Выбранные материалы:</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Фундамент:</span>
                <span className="font-medium">{state.foundation}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Стены:</span>
                <span className="font-medium">{state.walls}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Кровля:</span>
                <span className="font-medium">{state.roof}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Отделка:</span>
                <span className="font-medium">{state.finishing}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mb-6">
          <h3 className="font-semibold mb-3">Получить точный расчет</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input name="name" placeholder="Ваше имя" required />
            <Input name="phone" type="tel" placeholder="+7 905 710 8890" required />
            <Input name="email" type="email" placeholder="Email" />
            <Textarea name="comment" placeholder="Комментарий" rows={2} />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить расчет'}
            </Button>
          </form>
        </div>

        <div className="bg-secondary/50 p-4 rounded-lg text-sm">
          <Icon name="Info" size={16} className="inline mr-2 text-primary" />
          <span className="text-muted-foreground">
            Стоимость является предварительной. Точная цена определяется после выезда специалиста
            на участок.
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorSummary;