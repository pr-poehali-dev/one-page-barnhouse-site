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
    'ленточный': 7875,
    'свайно-винтовой': 6300,
    'плита': 9450,
  },
  walls: {
    'клееный-брус': 56250,
    'каркас': 40500,
    'sip-панели': 45000,
  },
  roof: {
    'металлочерепица': 3375,
    'гибкая-черепица': 4950,
    'фальцевая': 6300,
  },
  windows: {
    'стандартные': 33750,
    'энергосберегающие': 56250,
    'панорамные': 101250,
  },
  insulation: {
    'базовая': 1800,
    'улучшенная': 2700,
    'премиум': 4050,
  },
  heating: {
    'электрическое': 5625,
    'газовое': 7875,
    'тепловой-насос': 11250,
  },
  finishing: {
    'черновая': 18000,
    'чистовая': 33750,
    'премиум': 56250,
  },
  extras: {
    garage: 1800000,
    sauna: 1012500,
    terrace: 405000,
    smartHome: 787500,
  },
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};