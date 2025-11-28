import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CalculatorState {
  area: number;
  floors: number;
  foundation: 'ленточный' | 'свайно-винтовой' | 'плита';
  walls: 'клееный-брус' | 'каркас' | 'sip-панели';
  roof: 'металлочерепица' | 'гибкая-черепица' | 'фальцевая';
  windows: 'стандартные' | 'энергосберегающие' | 'панорамные';
  insulation: 'базовая' | 'улучшенная' | 'премиум';
  heating: 'электрическое' | 'газовое' | 'тепловой-насос';
  finishing: 'черновая' | 'чистовая' | 'премиум';
  hasGarage: boolean;
  hasSauna: boolean;
  hasTerrace: boolean;
  hasSmartHome: boolean;
}

const Calculator = () => {
  const { toast } = useToast();
  const [state, setState] = useState<CalculatorState>({
    area: 120,
    floors: 2,
    foundation: 'ленточный',
    walls: 'клееный-брус',
    roof: 'металлочерепица',
    windows: 'стандартные',
    insulation: 'базовая',
    heating: 'электрическое',
    finishing: 'черновая',
    hasGarage: false,
    hasSauna: false,
    hasTerrace: false,
    hasSmartHome: false,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const prices = {
    foundation: {
      'ленточный': 3500,
      'свайно-винтовой': 2800,
      'плита': 4200,
    },
    walls: {
      'клееный-брус': 25000,
      'каркас': 18000,
      'sip-панели': 20000,
    },
    roof: {
      'металлочерепица': 1500,
      'гибкая-черепица': 2200,
      'фальцевая': 2800,
    },
    windows: {
      'стандартные': 15000,
      'энергосберегающие': 25000,
      'панорамные': 45000,
    },
    insulation: {
      'базовая': 800,
      'улучшенная': 1200,
      'премиум': 1800,
    },
    heating: {
      'электрическое': 2500,
      'газовое': 3500,
      'тепловой-насос': 5000,
    },
    finishing: {
      'черновая': 8000,
      'чистовая': 15000,
      'премиум': 25000,
    },
    extras: {
      garage: 800000,
      sauna: 450000,
      terrace: 180000,
      smartHome: 350000,
    },
  };

  useEffect(() => {
    const basePrice = state.area * state.walls[state.walls];
    const foundationPrice = state.area * prices.foundation[state.foundation];
    const roofPrice = state.area * prices.roof[state.roof];
    const windowsPrice = Math.ceil(state.area / 10) * prices.windows[state.windows];
    const insulationPrice = state.area * prices.insulation[state.insulation];
    const heatingPrice = state.area * prices.heating[state.heating];
    const finishingPrice = state.area * prices.finishing[state.finishing];

    const extrasPrice =
      (state.hasGarage ? prices.extras.garage : 0) +
      (state.hasSauna ? prices.extras.sauna : 0) +
      (state.hasTerrace ? prices.extras.terrace : 0) +
      (state.hasSmartHome ? prices.extras.smartHome : 0);

    const total =
      basePrice +
      foundationPrice +
      roofPrice +
      windowsPrice +
      insulationPrice +
      heatingPrice +
      finishingPrice +
      extrasPrice;

    setTotalPrice(Math.round(total));
  }, [state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Расчет отправлен!',
      description: 'Мы свяжемся с вами для уточнения деталей.',
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

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
        <div className="mb-8">
          <Badge className="mb-4">Онлайн расчет</Badge>
          <h1 className="text-4xl font-bold mb-2">Калькулятор стоимости строительства</h1>
          <p className="text-muted-foreground text-lg">
            Рассчитайте примерную стоимость вашего дома прямо сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Home" className="text-primary" />
                  Основные параметры
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Площадь дома, м² ({state.area})
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="10"
                      value={state.area}
                      onChange={(e) => setState({ ...state, area: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>50 м²</span>
                      <span>300 м²</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3">Этажность</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setState({ ...state, floors: 1 })}
                        className={`px-4 py-3 rounded-lg border-2 transition-all ${
                          state.floors === 1
                            ? 'border-primary bg-primary/10 font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        1 этаж
                      </button>
                      <button
                        onClick={() => setState({ ...state, floors: 2 })}
                        className={`px-4 py-3 rounded-lg border-2 transition-all ${
                          state.floors === 2
                            ? 'border-primary bg-primary/10 font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        2 этажа
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Layers" className="text-primary" />
                  Материалы и конструкции
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Фундамент</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.foundation).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, foundation: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.foundation === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Стены</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.walls).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, walls: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.walls === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Кровля</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.roof).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, roof: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.roof === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Settings" className="text-primary" />
                  Инженерия и отделка
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Окна</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.windows).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, windows: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.windows === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * Math.ceil(state.area / 10))} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Утепление</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.insulation).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, insulation: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.insulation === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Отопление</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.heating).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, heating: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.heating === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Отделка</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {Object.entries(prices.finishing).map(([key, price]) => (
                        <button
                          key={key}
                          onClick={() => setState({ ...state, finishing: key as any })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            state.finishing === key
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-sm mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatPrice(price * state.area)} ₽
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Plus" className="text-primary" />
                  Дополнительные опции
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={state.hasGarage}
                        onChange={(e) => setState({ ...state, hasGarage: e.target.checked })}
                        className="w-5 h-5"
                      />
                      <div>
                        <div className="font-semibold">Гараж</div>
                        <div className="text-xs text-muted-foreground">
                          +{formatPrice(prices.extras.garage)} ₽
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={state.hasSauna}
                        onChange={(e) => setState({ ...state, hasSauna: e.target.checked })}
                        className="w-5 h-5"
                      />
                      <div>
                        <div className="font-semibold">Сауна</div>
                        <div className="text-xs text-muted-foreground">
                          +{formatPrice(prices.extras.sauna)} ₽
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={state.hasTerrace}
                        onChange={(e) => setState({ ...state, hasTerrace: e.target.checked })}
                        className="w-5 h-5"
                      />
                      <div>
                        <div className="font-semibold">Терраса</div>
                        <div className="text-xs text-muted-foreground">
                          +{formatPrice(prices.extras.terrace)} ₽
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={state.hasSmartHome}
                        onChange={(e) => setState({ ...state, hasSmartHome: e.target.checked })}
                        className="w-5 h-5"
                      />
                      <div>
                        <div className="font-semibold">Умный дом</div>
                        <div className="text-xs text-muted-foreground">
                          +{formatPrice(prices.extras.smartHome)} ₽
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
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
                    <Input placeholder="Ваше имя" required />
                    <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Комментарий" rows={2} />
                    <Button type="submit" className="w-full">
                      Отправить расчет
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
