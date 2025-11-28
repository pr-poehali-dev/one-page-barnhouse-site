export interface CalculatorState {
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

export const prices = {
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

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};
