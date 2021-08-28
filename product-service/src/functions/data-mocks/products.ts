import { Product, HandOrientation } from '@my-types/index';

const products: Product[] = [
  {
    id:'66236ec1-c794-4e2e-a195-dd719b47e55b' ,
    title: 'Archery Dragon X8',
    brand: 'Sanlida',
    color: 'Camo Pro',
    material: 'Aluminum',
    weight: 3.8,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/6198P+HTtEL._AC_SL1500_.jpg',
    price: 120,
  },
  {
    id: 'df2956ce-51a0-4ec9-9424-ec287aec1e33',
    title: 'TD Recurve Bow',
    brand: 'TIDEWE',
    color: 'Wood',
    material: 'Wood',
    weight: 2.9,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71SfOPqh4SL._AC_SL1500_.jpg',
    price: 80,
  },
  {
    id: '3b137615-c16c-4529-bf49-1ddac06f125b',
    title: 'Pro Recurve Bow',
    brand: 'Procener',
    color: 'Black',
    material: 'Steel',
    weight: 5,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71V5NyIOU+L._AC_SL1500_.jpg',
    price: 130,
  },
  {
    id: '2087c468-3c40-46ea-ba91-689cafb2a4a2',
    title: 'STACCU Takedown Recurve',
    brand: 'STACCU',
    color: 'Purple',
    material: 'Bamboo',
    weight: 3.4,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71D8dIWquTL._AC_SL1500_.jpg',
    price: 140,
  },
  {
    id: '1e5c2414-703e-4e17-b9ad-c193efedf527',
    title: 'PANDARUS Compound Bow',
    brand: 'PANDARUS',
    color: 'Black',
    material: 'Plastic',
    weight: 2.5,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71lhDkAEdpL._AC_SL1500_.jpg',
    price: 60,
  },
  {
    id: 'a2179f3b-1e47-4ba0-96f7-6fdfc150cb00',
    title: 'GENESIS Kit RH',
    brand: 'Genesis',
    color: 'Black',
    material: 'Aluminum',
    weight: 2.1,
    handOrientation: HandOrientation.leftHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71vRFVC10LL._AC_SL1500_.jpg',
    price: 90,
  },
  {
    id: 'edb91732-d6b3-4d6a-ad7c-dead6c1f39c3',
    title: 'TOPARCHERY Archery',
    brand: 'TOPARCHERY',
    color: 'Black',
    material: 'Carbon',
    weight: 1.8,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/419+BwoDjcL._AC_SL1024_.jpg',
    price: 200,
  },
  {
    id: '45d2b326-97c8-40b1-8607-0738e1a1f131',
    title: 'SinoArt Compound Bow',
    brand: 'SinoArt',
    color: 'Black',
    material: 'Carbon fiber',
    weight: 1.6,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/61RWFkBVPNL._AC_SL1280_.jpg',
    price: 210,
  },
  {
    id: '38a22695-bb44-4eb3-9f9b-2f258c2b71f1',
    title: 'Adventure Awaits Wooden Bow',
    brand: 'Handmade',
    color: 'Wood',
    material: 'Wood',
    weight: 3.6,
    handOrientation: HandOrientation.leftHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81yGxhXEuIL._AC_SL1500_.jpg',
    price: 50,
  },
  {
    id: '489de1aa-3107-4350-bae9-92ae92c6c9d0',
    title: 'Bear Archery Cruzer G2',
    brand: 'Bear Archery',
    color: 'Moonshine Muddy Girl',
    material: 'Other',
    weight: 3,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71IeU+eyjXL._AC_SL1500_.jpg',
    price: 170,
  },
  {
    id: '346db7a5-c5cf-4427-9c30-b08bdd6d4897',
    title: 'XGeek Compound Bow Kit',
    brand: 'XGeek',
    color: 'M129-Desert Grey',
    material: 'Aluminum',
    weight: 3.3,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81ac4I9SZwL._AC_SL1500_.jpg',
    price: 150,
  },
  {
    id: 'f15eb1e0-2ad9-4c80-aeb0-0a502b0c7775',
    title: 'Predator Mega Bow',
    brand: 'Predator Archery',
    color: 'Camo',
    material: 'Aluminum',
    weight: 3.4,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81Fo5VDucfL._AC_SL1500_.jpg',
    price: 200,
  },
  {
    id: 'f8a34948-c3ef-4937-9c5a-a83dace80772',
    title: 'TOPARCHERY Archery Bow',
    brand: 'TOPARCHERY',
    color: 'Black',
    material: 'Fiberglass',
    weight: 5,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/51303T4LuYL._AC_SL1000_.jpg',
    price: 195,
  },
  {
    id: 'cbc008fc-e6aa-4c04-99e3-b1884fe3db4a',
    title: 'KAINOKAI Dragon Bow',
    brand: 'KAINOKAI',
    color: 'Black Dragon',
    material: 'Wood',
    weight: 1.5,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/619WmrD1oxL._AC_SL1500_.jpg',
    price: 145,
  },
  {
    id: '6b57d352-98e9-4013-a084-2f9301ada741',
    title: 'PANDARUS Compound Bow Draw',
    brand: 'PANDARUS',
    color: 'Black',
    material: 'Aluminum',
    weight: 4.7,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71nFTxPeP3L._AC_SL1500_.jpg',
    price: 240,
  },
  {
    id: 'ad193002-6442-4065-8d69-163c2a36f6eb',
    title: 'XGeek Compound Bow',
    brand: 'XGeek',
    color: 'Camouflage',
    material: 'Plastic',
    weight: 2.2,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81g4T3k0mGL._AC_SL1500_.jpg',
    price: 90,
  },
  {
    id: '5a6087bd-a565-4a6c-8fef-5bd67642c640',
    title: 'ROCHAN Aluminum Alloy Compound Bow',
    brand: 'ROCHAN',
    color: 'Black',
    material: 'Glass',
    weight: 2.6,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81QtsqBg1dL._AC_SL1500_.jpg',
    price: 165,
  },
  {
    id: '4b2eb32f-c4c2-4772-99ad-e59838d2c9b0',
    title: 'AW Pro Compound',
    brand: 'AW',
    color: 'Camo',
    material: 'Stainless Steel',
    weight: 3.3,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81S-FbSDMoS._AC_SL1500_.jpg',
    price: 175,
  },
  {
    id: '8a2f7546-8674-47ee-9e23-df97bea9edb0',
    title: 'Deerseeker Super Bow',
    brand: 'Deerseeker Outdoor',
    color: 'Wood',
    material: 'Wood',
    weight: 1.7,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/61VKgl63wdS._AC_SL1200_.jpg',
    price: 115,
  },
  {
    id: '5d4715ad-40db-4c4f-a677-baea80b6d369',
    title: 'Barnett Vortex Lite Youth Compound Bow',
    brand: 'Barnett Vortex',
    color: 'Black',
    material: 'Steel',
    weight: 5,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71VZBiLKxYL._AC_SL1500_.jpg',
    price: 195,
  },
  {
    id: '17f1265c-1f78-424c-92fb-4a6e0b426473',
    title: 'REAWOW Recurve Bows Archery',
    brand: 'REAWOW',
    color: 'Black',
    material: 'Al-mg alloy',
    weight: 4.3,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/71J7g0wB5NL._AC_SL1500_.jpg',
    price: 225,
  },
  {
    id: '19926ec5-6e53-4e12-90cb-b360f3b3ace5',
    title: 'Southland Archery Supply SAS Scorpii Compound Bowfishing Bow',
    brand: 'Southland Archery Supply',
    color: '	Black Cajun Winch',
    material: 'Fiberglass',
    weight: 4.3,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/715fJfxQPfL._AC_SL1500_.jpg',
    price: 210,
  },
  {
    id: '8b5daf96-706c-4b88-a657-daefd0a9627f',
    title: 'Karnage Dynamic Compound Bow',
    brand: 'Karnage',
    color: 'Camo',
    material: 'Blend',
    weight: 3.8,
    handOrientation: HandOrientation.rightHand,
    imageUrl: 'https://m.media-amazon.com/images/I/81m8cLZ9lAL._AC_SL1500_.jpg',
    price: 235,
  },
];

export default products;
