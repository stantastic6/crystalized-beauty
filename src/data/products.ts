import BriannaImage from '../assets/images/brianna.jpg';
import CamilaImage from '../assets/images/camila.jpg';
import ChenImage from '../assets/images/chen.jpg';
import CrystalImage from '../assets/images/crystal.jpg';
import DeZhanaImage from '../assets/images/dezhana.jpg';
import HaleyImage from '../assets/images/haley.jpg';
import KirrileeImage from '../assets/images/kirrilee.jpg';
import LeslieImage from '../assets/images/leslie.jpg';
import NkechiImage from '../assets/images/nkechi.jpg';

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
        amount: 7700,
      },
      {
        length: 12,
        amount: 8200,
      },
      {
        length: 14,
        amount: 8600,
      },
      {
        length: 16,
        amount: 9600,
      },
      {
        length: 18,
        amount: 9800,
      },
      {
        length: 20,
        amount: 10400,
      },
      {
        length: 22,
        amount: 11500,
      },
      {
        length: 24,
        amount: 11800,
      },
      {
        length: 26,
        amount: 12300,
      },
      {
        length: 28,
        amount: 12700,
      },
      {
        length: 30,
        amount: 13100,
      },
      {
        length: 32,
        amount: 14100,
      },
      {
        length: 34,
        amount: 14300,
      },
      {
        length: 36,
        amount: 15000,
      },
      {
        length: 38,
        amount: 15200,
      },
      {
        length: 40,
        amount: 15500,
      },
    ],
  },
  {
    name: 'Raw Virgin Body Wave',
    url: DeZhanaImage,
    prices: [
      {
        length: 10,
        amount: 7700,
      },
      {
        length: 12,
        amount: 8200,
      },
      {
        length: 14,
        amount: 8600,
      },
      {
        length: 16,
        amount: 9600,
      },
      {
        length: 18,
        amount: 9800,
      },
      {
        length: 20,
        amount: 10400,
      },
      {
        length: 22,
        amount: 11500,
      },
      {
        length: 24,
        amount: 11800,
      },
      {
        length: 26,
        amount: 12300,
      },
      {
        length: 28,
        amount: 12700,
      },
      {
        length: 30,
        amount: 13100,
      },
      {
        length: 32,
        amount: 14100,
      },
      {
        length: 34,
        amount: 14300,
      },
      {
        length: 36,
        amount: 15000,
      },
      {
        length: 38,
        amount: 15200,
      },
      {
        length: 40,
        amount: 15500,
      },
    ],
  },
  {
    name: 'Raw Virgin Spanish Wave',
    url: CamilaImage,
    prices: [
      {
        length: 12,
        amount: 8500,
      },
      {
        length: 14,
        amount: 8900,
      },
      {
        length: 16,
        amount: 9800,
      },
      {
        length: 18,
        amount: 10300,
      },
      {
        length: 20,
        amount: 10900,
      },
      {
        length: 22,
        amount: 12100,
      },
      {
        length: 24,
        amount: 12500,
      },
      {
        length: 26,
        amount: 12900,
      },
      {
        length: 28,
        amount: 13300,
      },
      {
        length: 30,
        amount: 13700,
      },
    ],
  },
  {
    name: 'Raw Virgin Kinky Curly',
    url: NkechiImage,
    prices: [
      {
        length: 12,
        amount: 8500,
      },
      {
        length: 14,
        amount: 8900,
      },
      {
        length: 16,
        amount: 9800,
      },
      {
        length: 18,
        amount: 10300,
      },
      {
        length: 20,
        amount: 10900,
      },
      {
        length: 22,
        amount: 12100,
      },
      {
        length: 24,
        amount: 12500,
      },
      {
        length: 26,
        amount: 12900,
      },
      {
        length: 28,
        amount: 13300,
      },
      {
        length: 30,
        amount: 13700,
      },
    ],
  },
  {
    name: 'Raw Virgin Kinky Straight',
    url: LeslieImage,
    prices: [
      {
        length: 12,
        amount: 8500,
      },
      {
        length: 14,
        amount: 8900,
      },
      {
        length: 16,
        amount: 9800,
      },
      {
        length: 18,
        amount: 10300,
      },
      {
        length: 20,
        amount: 10900,
      },
      {
        length: 22,
        amount: 12100,
      },
      {
        length: 24,
        amount: 12500,
      },
      {
        length: 26,
        amount: 12900,
      },
      {
        length: 28,
        amount: 13300,
      },
      {
        length: 30,
        amount: 13700,
      },
    ],
  },
  {
    name: '100% Human Indian Straight',
    url: ChenImage,
    prices: [
      {
        length: 10,
        amount: 9900,
      },
      {
        length: 12,
        amount: 10600,
      },
      {
        length: 14,
        amount: 10800,
      },
      {
        length: 16,
        amount: 11300,
      },
      {
        length: 18,
        amount: 12600,
      },
      {
        length: 20,
        amount: 12800,
      },
      {
        length: 22,
        amount: 13200,
      },
      {
        length: 24,
        amount: 13600,
      },
      {
        length: 26,
        amount: 14000,
      },
      {
        length: 28,
        amount: 14400,
      },
      {
        length: 30,
        amount: 14800,
      },
    ],
  },
  {
    name: '100% Human Indian Body Wave',
    url: KirrileeImage,
    prices: [
      {
        length: 10,
        amount: 9600,
      },
      {
        length: 12,
        amount: 10300,
      },
      {
        length: 14,
        amount: 10600,
      },
      {
        length: 16,
        amount: 11000,
      },
      {
        length: 18,
        amount: 12300,
      },
      {
        length: 20,
        amount: 12600,
      },
      {
        length: 22,
        amount: 13000,
      },
      {
        length: 24,
        amount: 13400,
      },
      {
        length: 26,
        amount: 13800,
      },
      {
        length: 28,
        amount: 14300,
      },
      {
        length: 30,
        amount: 14600,
      },
    ],
  },
  {
    name: '100% Human Indian Curly',
    url: CrystalImage,
    prices: [
      {
        length: 10,
        amount: 10600,
      },
      {
        length: 12,
        amount: 11200,
      },
      {
        length: 14,
        amount: 11400,
      },
      {
        length: 16,
        amount: 12000,
      },
      {
        length: 18,
        amount: 13200,
      },
      {
        length: 20,
        amount: 13300,
      },
      {
        length: 22,
        amount: 13800,
      },
      {
        length: 24,
        amount: 14200,
      },
      {
        length: 26,
        amount: 14400,
      },
      {
        length: 28,
        amount: 15000,
      },
      {
        length: 30,
        amount: 15300,
      },
    ],
  },
  {
    name: '100% Human Indian Deep Wave',
    url: BriannaImage,
    prices: [
      {
        length: 10,
        amount: 10100,
      },
      {
        length: 12,
        amount: 10800,
      },
      {
        length: 14,
        amount: 11000,
      },
      {
        length: 16,
        amount: 11600,
      },
      {
        length: 18,
        amount: 12800,
      },
      {
        length: 20,
        amount: 13000,
      },
      {
        length: 22,
        amount: 13400,
      },
      {
        length: 24,
        amount: 13800,
      },
      {
        length: 26,
        amount: 14200,
      },
      {
        length: 28,
        amount: 14600,
      },
      {
        length: 30,
        amount: 15000,
      },
    ],
  },
];
