export const fetchPropertyDetail = async (slug) => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/properties/detail/${slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-ID": process.env.TENANT_ID,
      },
      cache: "force-cache",
      next: { revalidate: 3600 }, // ISR: revalidación cada 1 hora
    }
  );

  const { property } = await response.json();

  return property;
};
