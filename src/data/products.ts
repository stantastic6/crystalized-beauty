const BriannaImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/brianna_rkw0wk';
const CamilaImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/camila_gjzrtx';
const ChenImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/chen_zja5hz';
const CrystalImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/crystal_gpcrtu';
const DeZhanaImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/dezhana_uvwumd';
const HaleyImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/haley_xa6hww';
const KirrileeImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/kirrilee_wv39gd';
const LeslieImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/leslie_mr9nuk';
const NkechiImage =
  'https://res.cloudinary.com/crystalized-beauty/image/upload/v1581695407/crystalized-beauty/nkechi_grdwzs';

interface ProductPrice {
  length: number;
  amount: number;
}
export interface Product {
  name: string;
  url: string;
  prices: ProductPrice[];
}

export const products: Product[] = [
  {
    name: 'Raw Virgin Straight',
    url: HaleyImage,
    prices: [
      {
        length: 10,
        amount: 8700,
      },
      {
        length: 12,
        amount: 9200,
      },
      {
        length: 14,
        amount: 9600,
      },
      {
        length: 16,
        amount: 10600,
      },
      {
        length: 18,
        amount: 10800,
      },
      {
        length: 20,
        amount: 11400,
      },
      {
        length: 22,
        amount: 12500,
      },
      {
        length: 24,
        amount: 12800,
      },
      {
        length: 26,
        amount: 13300,
      },
      {
        length: 28,
        amount: 13700,
      },
      {
        length: 30,
        amount: 14100,
      },
      {
        length: 32,
        amount: 15100,
      },
      {
        length: 34,
        amount: 15300,
      },
      {
        length: 36,
        amount: 16000,
      },
      {
        length: 38,
        amount: 16200,
      },
      {
        length: 40,
        amount: 16500,
      },
    ],
  },
  {
    name: 'Raw Virgin Body Wave',
    url: DeZhanaImage,
    prices: [
      {
        length: 10,
        amount: 8700,
      },
      {
        length: 12,
        amount: 9200,
      },
      {
        length: 14,
        amount: 9600,
      },
      {
        length: 16,
        amount: 10600,
      },
      {
        length: 18,
        amount: 10800,
      },
      {
        length: 20,
        amount: 11400,
      },
      {
        length: 22,
        amount: 12500,
      },
      {
        length: 24,
        amount: 12800,
      },
      {
        length: 26,
        amount: 13300,
      },
      {
        length: 28,
        amount: 13700,
      },
      {
        length: 30,
        amount: 14100,
      },
      {
        length: 32,
        amount: 15100,
      },
      {
        length: 34,
        amount: 15300,
      },
      {
        length: 36,
        amount: 16000,
      },
      {
        length: 38,
        amount: 16200,
      },
      {
        length: 40,
        amount: 16500,
      },
    ],
  },
  {
    name: 'Raw Virgin Spanish Wave',
    url: CamilaImage,
    prices: [
      {
        length: 12,
        amount: 9500,
      },
      {
        length: 14,
        amount: 9900,
      },
      {
        length: 16,
        amount: 10800,
      },
      {
        length: 18,
        amount: 11300,
      },
      {
        length: 20,
        amount: 11900,
      },
      {
        length: 22,
        amount: 13100,
      },
      {
        length: 24,
        amount: 13500,
      },
      {
        length: 26,
        amount: 13900,
      },
      {
        length: 28,
        amount: 14300,
      },
      {
        length: 30,
        amount: 14700,
      },
    ],
  },
  {
    name: 'Raw Virgin Kinky Curly',
    url: NkechiImage,
    prices: [
      {
        length: 12,
        amount: 9500,
      },
      {
        length: 14,
        amount: 9900,
      },
      {
        length: 16,
        amount: 10800,
      },
      {
        length: 18,
        amount: 11300,
      },
      {
        length: 20,
        amount: 11900,
      },
      {
        length: 22,
        amount: 13100,
      },
      {
        length: 24,
        amount: 13500,
      },
      {
        length: 26,
        amount: 13900,
      },
      {
        length: 28,
        amount: 14300,
      },
      {
        length: 30,
        amount: 14700,
      },
    ],
  },
  {
    name: 'Raw Virgin Kinky Straight',
    url: LeslieImage,
    prices: [
      {
        length: 12,
        amount: 10500,
      },
      {
        length: 14,
        amount: 10900,
      },
      {
        length: 16,
        amount: 11800,
      },
      {
        length: 18,
        amount: 11300,
      },
      {
        length: 20,
        amount: 11900,
      },
      {
        length: 22,
        amount: 13100,
      },
      {
        length: 24,
        amount: 13500,
      },
      {
        length: 26,
        amount: 13900,
      },
      {
        length: 28,
        amount: 14300,
      },
      {
        length: 30,
        amount: 14700,
      },
    ],
  },
  {
    name: '100% Human Indian Straight',
    url: ChenImage,
    prices: [
      {
        length: 10,
        amount: 10900,
      },
      {
        length: 12,
        amount: 11600,
      },
      {
        length: 14,
        amount: 11800,
      },
      {
        length: 16,
        amount: 12300,
      },
      {
        length: 18,
        amount: 13600,
      },
      {
        length: 20,
        amount: 13800,
      },
      {
        length: 22,
        amount: 14200,
      },
      {
        length: 24,
        amount: 14600,
      },
      {
        length: 26,
        amount: 15000,
      },
      {
        length: 28,
        amount: 15400,
      },
      {
        length: 30,
        amount: 15800,
      },
    ],
  },
  {
    name: '100% Human Indian Body Wave',
    url: KirrileeImage,
    prices: [
      {
        length: 10,
        amount: 10600,
      },
      {
        length: 12,
        amount: 11300,
      },
      {
        length: 14,
        amount: 11600,
      },
      {
        length: 16,
        amount: 12000,
      },
      {
        length: 18,
        amount: 13300,
      },
      {
        length: 20,
        amount: 13600,
      },
      {
        length: 22,
        amount: 14000,
      },
      {
        length: 24,
        amount: 14400,
      },
      {
        length: 26,
        amount: 14800,
      },
      {
        length: 28,
        amount: 15300,
      },
      {
        length: 30,
        amount: 15600,
      },
    ],
  },
  {
    name: '100% Human Indian Curly',
    url: CrystalImage,
    prices: [
      {
        length: 10,
        amount: 11600,
      },
      {
        length: 12,
        amount: 12200,
      },
      {
        length: 14,
        amount: 12400,
      },
      {
        length: 16,
        amount: 13000,
      },
      {
        length: 18,
        amount: 14200,
      },
      {
        length: 20,
        amount: 14300,
      },
      {
        length: 22,
        amount: 14800,
      },
      {
        length: 24,
        amount: 15200,
      },
      {
        length: 26,
        amount: 15400,
      },
      {
        length: 28,
        amount: 16000,
      },
      {
        length: 30,
        amount: 16300,
      },
    ],
  },
  {
    name: '100% Human Indian Deep Wave',
    url: BriannaImage,
    prices: [
      {
        length: 10,
        amount: 11100,
      },
      {
        length: 12,
        amount: 11800,
      },
      {
        length: 14,
        amount: 12000,
      },
      {
        length: 16,
        amount: 12600,
      },
      {
        length: 18,
        amount: 13800,
      },
      {
        length: 20,
        amount: 14000,
      },
      {
        length: 22,
        amount: 14400,
      },
      {
        length: 24,
        amount: 14800,
      },
      {
        length: 26,
        amount: 15200,
      },
      {
        length: 28,
        amount: 15600,
      },
      {
        length: 30,
        amount: 16000,
      },
    ],
  },
];
