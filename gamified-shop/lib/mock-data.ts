export interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
  points: number;
  stock?: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    productName: "هدست گیمینگ پیشرفته",
    price: 2500000,
    imageUrl: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Headset",
    points: 120,
    stock: 8,
  },
  {
    id: 2,
    productName: "موس گیمینگ اپتیکال",
    price: 850000,
    imageUrl: "https://placehold.co/400x300/16A34A/FFFFFF?text=Mouse",
    points: 45,
    stock: 25,
  },
  {
    id: 3,
    productName: "کیبورد مکانیکی RGB",
    price: 3200000,
    imageUrl: "https://placehold.co/400x300/DC2626/FFFFFF?text=Keyboard",
    points: 150,
  },
  {
    id: 4,
    productName: "مانیتور گیمینگ ۲۷ اینچ",
    price: 12000000,
    imageUrl: "https://placehold.co/400x300/6B7280/FFFFFF?text=Monitor",
    points: 500,
    stock: 5,
  },
  {
    id: 5,
    productName: "صندلی گیمینگ ارگونومیک",
    price: 8500000,
    imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Chair",
    points: 400,
    stock: 12,
  },
  {
    id: 6,
    productName: "وب‌کم 4K استریم",
    price: 4100000,
    imageUrl: "https://placehold.co/400x300/3B82F6/FFFFFF?text=Webcam",
    points: 200,
    stock: 30,
  },
];
