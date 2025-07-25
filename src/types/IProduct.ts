export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: Array<{
    label: string;
    type: 'protection' | 'face' | 'hydration' | 'body' | 'exfoliation' | 'lips' | 'anti-aging';
  }>;
}