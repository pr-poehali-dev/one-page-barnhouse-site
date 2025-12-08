import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { CalculatorState, prices, formatPrice } from './types';

interface CalculatorMaterialsProps {
  state: CalculatorState;
  setState: (state: CalculatorState) => void;
}

const CalculatorMaterials = ({ state, setState }: CalculatorMaterialsProps) => {
  return (
    <>
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

            <div>
              <label className="block text-sm font-semibold mb-3">Внешняя отделка стен</label>
              <div className="grid md:grid-cols-4 gap-3">
                {Object.entries(prices.exteriorFinish).map(([key, price]) => (
                  <button
                    key={key}
                    onClick={() => setState({ ...state, exteriorFinish: key as any })}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      state.exteriorFinish === key
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {price === 0 ? 'Без отделки' : `${formatPrice(price)} ₽`}
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

            <div>
              <label className="block text-sm font-semibold mb-3">Умный дом</label>
              <div className="grid md:grid-cols-4 gap-3">
                {Object.entries(prices.smartHome).map(([key, price]) => (
                  <button
                    key={key}
                    onClick={() => setState({ ...state, smartHome: key as any })}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      state.smartHome === key
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {price === 0 ? 'Без системы' : `${formatPrice(price)} ₽`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CalculatorMaterials;