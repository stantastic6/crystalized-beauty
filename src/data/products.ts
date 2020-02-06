import BriannaImage from '../assets/images/Brianna.jpg';
import CamilaImage from '../assets/images/Camila.jpg';
import ChenImage from '../assets/images/Chen.jpg';
import CrystalImage from '../assets/images/Crystal.jpg';
import DeZhanaImage from '../assets/images/DeZhana.jpg';
import HaleyImage from '../assets/images/Haley.jpg';
import KirrileeImage from '../assets/images/Kirrilee.jpg';
import LeslieImage from '../assets/images/Leslie.jpg';
import NkechiImage from '../assets/images/Nkechi.jpg';

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
  // {
  //   name: 'Raw Virgin Body Wave',
  //   url: DeZhanaImage,
  //   amount: 5000,
  // },
  // {
  //   name: 'Raw Virgin Spanish Wave',
  //   url: CamilaImage,
  //   amount: 5000,
  // },
  // {
  //   name: 'Raw Virgin Kinky Curly',
  //   url: NkechiImage,
  //   amount: 5000,
  // },
  // {
  //   name: 'Raw Virgin Kinky Straight',
  //   url: LeslieImage,
  //   amount: 5000,
  // },
  // {
  //   name: '100% Human Indian Straight',
  //   url: ChenImage,
  //   amount: 5000,
  // },
  // {
  //   name: '100% Human Indian Body Wave',
  //   url: KirrileeImage,
  //   amount: 5000,
  // },
  // {
  //   name: '100% Human Indian Curly',
  //   url: CrystalImage,
  //   amount: 5000,
  // },
  // {
  //   name: '100% Human Indian Deep Wave',
  //   url: BriannaImage,
  //   amount: 5000,
  // },
];
