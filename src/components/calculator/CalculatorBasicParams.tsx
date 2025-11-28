import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { CalculatorState } from './types';

interface CalculatorBasicParamsProps {
  state: CalculatorState;
  setState: (state: CalculatorState) => void;
}

const CalculatorBasicParams = ({ state, setState }: CalculatorBasicParamsProps) => {
  return (
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
  );
};

export default CalculatorBasicParams;
