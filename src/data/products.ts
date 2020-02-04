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
  description: string;
  url: string;
  price: number;
}

export const products: Product[] = [
  {
    name: 'Product Name',
    description: 'Product description',
    url: HaleyImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: DeZhanaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: CamilaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: NkechiImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: LeslieImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: ChenImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: KirrileeImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: CrystalImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
];
