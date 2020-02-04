import BriannaImage from '../assets/images/Brianna.jpg';
import CamilaImage from '../assets/images/Camila.jpg';
import ChenImage from '../assets/images/Chen.jpg';
import CrystalImage from '../assets/images/Crystal.jpg';
import DeZhanaImage from '../assets/images/DeZhana.jpg';
import HaleyImage from '../assets/images/Haley.jpg';
import KirrileeImage from '../assets/images/Kirrilee.jpg';
import LeslieImage from '../assets/images/Leslie.jpg';
import NkechiImage from '../assets/images/Nkechi.jpg';

export interface Product {
  name: string;
  url: string;
  price: number;
}

export const products: Product[] = [
  {
    name: 'Raw Virgin Straight',
    url: HaleyImage,
    price: 5000,
  },
  {
    name: 'Raw Virgin Body Wave',
    url: DeZhanaImage,
    price: 5000,
  },
  {
    name: 'Raw Virgin Spanish Wave',
    url: CamilaImage,
    price: 5000,
  },
  {
    name: 'Raw Virgin Kinky Curly',
    url: NkechiImage,
    price: 5000,
  },
  {
    name: 'Raw Virgin Kinky Straight',
    url: LeslieImage,
    price: 5000,
  },
  {
    name: '100% Human Indian Straight',
    url: ChenImage,
    price: 5000,
  },
  {
    name: '100% Human Indian Body Wave',
    url: KirrileeImage,
    price: 5000,
  },
  {
    name: '100% Human Indian Curly',
    url: CrystalImage,
    price: 5000,
  },
  {
    name: '100% Human Indian Deep Wave',
    url: BriannaImage,
    price: 5000,
  },
];
