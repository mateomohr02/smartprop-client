import { fetchPropertyDetail } from "@/utils/fetchPropertyDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.API_BASE_URL}/properties/slugs`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-ID": process.env.TENANT_ID,
      },
      next: { revalidate: 3600 }, // ISR: revalidación cada 1 hora
    }
  );

  const data = await response.json();

  return data.map((prop) => ({
    propertySlug: prop.slug,
  }));
}

const PropertyDetailPage = async ({ params }) => {

  const { propertySlug } = await params

  const property = await fetchPropertyDetail(propertySlug);
 
  if (!property) {
    notFound()
  }
  return <div>{property?.title}</div>;
};

export default PropertyDetailPage;
