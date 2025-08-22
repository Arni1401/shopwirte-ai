import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Apfel", price: 1.99 },
    { id: 2, name: "Banane", price: 0.99 },
    { id: 3, name: "Kaffee", price: 4.49 },
  ];

  return NextResponse.json(products);
}
