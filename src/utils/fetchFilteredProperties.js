export const fetchFilteredProperties = async (filters, extraFilters) => {

  const queryString = new URLSearchParams(extraFilters).toString();

  const url = `${process.env.API_BASE_URL}/properties/catalogue/${filters}${
    queryString ? `?${queryString}` : ""
  }`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": process.env.TENANT_ID,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const { properties } = await response.json();

  return properties;
};
