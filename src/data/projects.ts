export interface Project {
  id: string;
  title: string;
  area: number;
  price: number;
  rooms: number;
  floors: number;
  bathrooms: number;
  image: string;
  images: string[];
  features: string[];
  description: string;
  fullDescription: string;
  category: 'скандинавский' | 'минимализм' | 'современный' | 'классический';
  hasSauna: boolean;
  hasGarage: boolean;
  hasFireplace: boolean;
  hasTerrace: boolean;
}

export const projects: Project[] = [
  {
    id: 'skandinavia',
    title: 'Скандинавия',
    area: 120,
    price: 6000000,
    rooms: 3,
    floors: 2,
    bathrooms: 2,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/ee20dc25-3b59-41f9-8cd1-7d0bd7298bf7.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/ee20dc25-3b59-41f9-8cd1-7d0bd7298bf7.jpg',
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/3ed303ad-e85f-41b2-b0c1-08c76a0b2592.jpg',
    ],
    features: ['Панорамные окна', 'Камин', 'Терраса', 'Энергоэффективность'],
    description: 'Уютный дом в скандинавском стиле с акцентом на натуральные материалы',
    fullDescription: 'Дом "Скандинавия" воплощает философию северного минимализма и экологичности. Светлые фасады из клееного бруса гармонично сочетаются с панорамным остеклением, наполняя интерьер естественным светом. Открытая планировка первого этажа с высокими потолками создает ощущение простора. На втором этаже расположены три спальни с собственными гардеробными. Дом оснащен системой теплого пола, рекуперацией воздуха и солнечными панелями.',
    category: 'скандинавский',
    hasSauna: false,
    hasGarage: false,
    hasFireplace: true,
    hasTerrace: true,
  },
  {
    id: 'minimalizm',
    title: 'Минимализм',
    area: 150,
    price: 7500000,
    rooms: 4,
    floors: 2,
    bathrooms: 2,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/132cb969-e040-4295-a6cd-3fa853e2d5b1.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/132cb969-e040-4295-a6cd-3fa853e2d5b1.jpg',
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/ecd0815c-1fa8-4486-8a2a-f84f0e79b1c7.jpg',
    ],
    features: ['Гараж на 2 авто', 'Второй свет', 'Smart-home', 'Плоская кровля'],
    description: 'Современный дом с чистыми линиями и функциональными пространствами',
    fullDescription: 'Проект "Минимализм" создан для ценителей лаконичной эстетики и современных технологий. Черный металлический сайдинг контрастирует с деревянными элементами отделки. Дом оборудован системой умного дома, позволяющей управлять освещением, климатом и безопасностью со смартфона. Встроенный гараж на 2 автомобиля имеет прямой доступ в дом. Зона второго света в гостиной высотой 6 метров создает впечатляющее пространство.',
    category: 'минимализм',
    hasSauna: false,
    hasGarage: true,
    hasFireplace: false,
    hasTerrace: true,
  },
  {
    id: 'panorama',
    title: 'Панорама',
    area: 180,
    price: 9000000,
    rooms: 4,
    floors: 2,
    bathrooms: 3,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/afe99c3f-36c9-43f7-9e8c-3ba0841a54a0.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/afe99c3f-36c9-43f7-9e8c-3ba0841a54a0.jpg',
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/e70c1d51-b387-4dba-9040-aecc62888e9a.jpg',
    ],
    features: ['Панорамное остекление', 'Сауна', 'Винный погреб', 'Мастер-спальня'],
    description: 'Премиальный дом с видовым остеклением и роскошными интерьерами',
    fullDescription: 'Премиум-проект "Панорама" предназначен для тех, кто ценит комфорт и роскошь. Панорамное остекление от пола до потолка открывает вид на природу из каждой комнаты. На первом этаже расположена просторная гостиная с камином, кухня-столовая с островом, сауна с комнатой отдыха и винный погреб. Мастер-спальня с гардеробной и ванной комнатой занимает отдельное крыло второго этажа. Терраса площадью 40 м² оборудована системой подогрева.',
    category: 'современный',
    hasSauna: true,
    hasGarage: true,
    hasFireplace: true,
    hasTerrace: true,
  },
  {
    id: 'klasika',
    title: 'Классика',
    area: 140,
    price: 6800000,
    rooms: 3,
    floors: 2,
    bathrooms: 2,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/33d81095-af8c-4e01-a4dc-d3db6f67fa7f.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/33d81095-af8c-4e01-a4dc-d3db6f67fa7f.jpg',
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/8b94cfcc-3131-4f34-a623-5bb6ada5d10b.jpg',
    ],
    features: ['Двускатная кровля', 'Камин', 'Крыльцо', 'Кабинет'],
    description: 'Традиционный barn house с классическими пропорциями',
    fullDescription: 'Дом "Классика" сочетает традиционную архитектуру barn house с современным комфортом. Двускатная кровля и деревянная обшивка фасадов создают узнаваемый образ. Просторное крыльцо приглашает в дом, где на первом этаже расположены гостиная с камином, кухня-столовая и кабинет. Три спальни на втором этаже имеют доступ к общему балкону. Идеальный вариант для семьи, ценящей традиции.',
    category: 'классический',
    hasSauna: false,
    hasGarage: false,
    hasFireplace: true,
    hasTerrace: false,
  },
  {
    id: 'uyut',
    title: 'Уют',
    area: 95,
    price: 4800000,
    rooms: 2,
    floors: 1,
    bathrooms: 1,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/4d33329b-42b8-41c2-9512-72bbce2816f1.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/4d33329b-42b8-41c2-9512-72bbce2816f1.jpg',
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/9fe4a46f-f65e-426d-83ca-879a0e7dd5f2.jpg',
    ],
    features: ['Одноэтажный', 'Компактный', 'Терраса', 'Французские окна'],
    description: 'Компактный одноэтажный дом для небольшой семьи',
    fullDescription: 'Проект "Уют" - это идеальное решение для небольшой семьи или пары. Одноэтажная планировка обеспечивает удобство и отсутствие лестниц. Открытая зона гостиной и кухни визуально расширяет пространство. Две спальни и современная ванная комната обеспечивают комфортное проживание. Французские окна с выходом на террасу стирают границу между домом и садом.',
    category: 'минимализм',
    hasSauna: false,
    hasGarage: false,
    hasFireplace: false,
    hasTerrace: true,
  },
  {
    id: 'lux',
    title: 'Люкс',
    area: 220,
    price: 11000000,
    rooms: 5,
    floors: 2,
    bathrooms: 4,
    image: 'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/dec91a65-61b9-462f-9d6b-cc7a70ee6bd4.jpg',
    images: [
      'https://cdn.poehali.dev/projects/f31a50d7-5b0f-4848-a372-7a558bde3ebe/files/dec91a65-61b9-462f-9d6b-cc7a70ee6bd4.jpg',
    ],
    features: ['Бассейн', 'Сауна', 'Гараж на 3 авто', 'Домашний кинотеатр', 'Тренажерный зал'],
    description: 'Роскошный дом премиум-класса с полным набором удобств',
    fullDescription: 'Проект "Люкс" воплощает максимальный уровень комфорта и престижа. Дом площадью 220 м² включает крытый бассейн, сауну с хамамом, тренажерный зал и домашний кинотеатр. Пять спален с индивидуальными ванными комнатами обеспечивают приватность каждому члену семьи. Гараж на три автомобиля имеет прямой вход в дом. Система умного дома, климат-контроль и видеонаблюдение создают идеальные условия жизни.',
    category: 'современный',
    hasSauna: true,
    hasGarage: true,
    hasFireplace: true,
    hasTerrace: true,
  },
];