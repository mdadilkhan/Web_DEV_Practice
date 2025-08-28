import React from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  review: string;
  stock: number;
  price: number;
}

const data: Product[] = [
  { id: "1", name: "iPhone", review: "this is best phone but camera is better in samsung s series", stock: 500, price: 69999 },
  { id: "2", name: "Samsung S Series", review: "amazing camera and screen", stock: 300, price: 79999 },
  { id: "3", name: "OnePlus", review: "smooth performance", stock: 200, price: 49999 },
  { id: "4", name: "Pixel", review: "best AI camera", stock: 100, price: 59999 }
];

const Page = () => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Page;