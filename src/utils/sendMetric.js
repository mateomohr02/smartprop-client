export const sendMetric = async (data) => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/metrics/new`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-ID": process.env.NEXT_PUBLIC_TENANT_ID,
      },
      body: JSON.stringify(data),
    }
  );

};
