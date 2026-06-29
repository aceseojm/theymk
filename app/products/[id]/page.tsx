import { products } from "@/lib/data";
import ProductDetailClient from "@/components/ProductDetailClient";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProductDetailClient id={id} />;
}
