import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import CalculatorBasicParams from '@/components/calculator/CalculatorBasicParams';
import CalculatorMaterials from '@/components/calculator/CalculatorMaterials';
import CalculatorExtras from '@/components/calculator/CalculatorExtras';
import CalculatorSummary from '@/components/calculator/CalculatorSummary';
import { CalculatorState, prices } from '@/components/calculator/types';

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

  useEffect(() => {
    const basePrice = state.area * prices.walls[state.walls];
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
            <CalculatorBasicParams state={state} setState={setState} />
            <CalculatorMaterials state={state} setState={setState} />
            <CalculatorExtras state={state} setState={setState} />
          </div>

          <div className="lg:col-span-1">
            <CalculatorSummary state={state} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;