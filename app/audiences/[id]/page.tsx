import { audiences } from "@/lib/data";
import AudienceDetailClient from "@/components/AudienceDetailClient";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return audiences.map((a) => ({ id: a.id }));
}

export default async function AudienceDetailPage({ params }: Props) {
  const { id } = await params;
  return <AudienceDetailClient id={id} />;
}
