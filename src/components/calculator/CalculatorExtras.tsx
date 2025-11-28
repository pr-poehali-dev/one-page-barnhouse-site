import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { CalculatorState, prices, formatPrice } from './types';

interface CalculatorExtrasProps {
  state: CalculatorState;
  setState: (state: CalculatorState) => void;
}

const CalculatorExtras = ({ state, setState }: CalculatorExtrasProps) => {
  return (
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
  );
};

export default CalculatorExtras;
