import CrystalImage from '../assets/images/crystal.jpg';
import BriannaImage from '../assets/images/brianna.jpg';

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
    url: CrystalImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
  {
    name: 'Product Name',
    description: 'Product description',
    url: BriannaImage,
    price: 5000,
  },
];
