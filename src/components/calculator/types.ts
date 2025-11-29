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
    'ленточный': 5250,
    'свайно-винтовой': 4200,
    'плита': 6300,
  },
  walls: {
    'клееный-брус': 37500,
    'каркас': 27000,
    'sip-панели': 30000,
  },
  roof: {
    'металлочерепица': 2250,
    'гибкая-черепица': 3300,
    'фальцевая': 4200,
  },
  windows: {
    'стандартные': 22500,
    'энергосберегающие': 37500,
    'панорамные': 67500,
  },
  insulation: {
    'базовая': 1200,
    'улучшенная': 1800,
    'премиум': 2700,
  },
  heating: {
    'электрическое': 3750,
    'газовое': 5250,
    'тепловой-насос': 7500,
  },
  finishing: {
    'черновая': 12000,
    'чистовая': 22500,
    'премиум': 37500,
  },
  extras: {
    garage: 1200000,
    sauna: 675000,
    terrace: 270000,
    smartHome: 525000,
  },
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};