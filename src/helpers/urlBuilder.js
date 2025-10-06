export const urlBuilder = (filters) => {

  let baseUrl = "";

  // 1️⃣ Slug principal
  const parts = [];

  // Operation
  if (filters.operation) parts.push(filters.operation);

  // Property type
  if (filters.propertyType) parts.push(filters.propertyType);

  // Location (según el tipo)
  if (filters.locationTypeFilter && filters.locationFilter) {
    switch (filters.locationTypeFilter) {
      case "Barrio":
        parts.push(`en-el-barrio-de-${filters.locationFilter}`);
        break;
    
      case "Ciudad":
        parts.push(`en-la-ciudad-de-${filters.locationFilter}`);
        break;
    
      case "Provincia":
        parts.push(`en-la-provincia-de-${filters.locationFilter}`);
        break;
        
      default:
        parts.push(`en-${filters.locationFilter}`);
        break;
    }
  }

  const slug = parts.join("-");

  // 2️⃣ Query params
  const queryParams = [];

  // Precio
  if (filters.priceRange?.[0])
    queryParams.push(`precio-min=${encodeURIComponent(filters.priceRange[0])}`);
  if (filters.priceRange?.[1])
    queryParams.push(`precio-max=${encodeURIComponent(filters.priceRange[1])}`);
  if (filters.priceFIAT)
    queryParams.push(`divisa=${encodeURIComponent(filters.priceFIAT)}`);

  // Expensas
  if (filters.expensesRange?.[0])
    queryParams.push(
      `expensas-min=${encodeURIComponent(filters.expensesRange[0])}`
    );
  if (filters.expensesRange?.[1])
    queryParams.push(
      `expensas-max=${encodeURIComponent(filters.expensesRange[1])}`
    );
  if (filters.expensesFIAT)
    queryParams.push(`expensas=${encodeURIComponent(filters.expensesFIAT)}`);

  // Ambientes
  if (filters.rooms?.[0])
    queryParams.push(`ambientes-min=${encodeURIComponent(filters.rooms[0])}`);
  if (filters.rooms?.[1])
    queryParams.push(`ambientes-max=${encodeURIComponent(filters.rooms[1])}`);

  // Dormitorios
  if (filters.bedrooms?.[0])
    queryParams.push(
      `dormitorios-min=${encodeURIComponent(filters.bedrooms[0])}`
    );
  if (filters.bedrooms?.[1])
    queryParams.push(
      `dormitorios-max=${encodeURIComponent(filters.bedrooms[1])}`
    );

  // Baños y garage
  if (filters.bathrooms)
    queryParams.push(`banos=${encodeURIComponent(filters.bathrooms)}`);
  if (filters.garages)
    queryParams.push(`garage=${encodeURIComponent(filters.garages)}`);

  // Tipos de ambientes
  if (filters.roomTypes?.length) {
    filters.roomTypes.forEach((r) =>
      queryParams.push(`tipos-de-ambientes=${encodeURIComponent(r)}`)
    );
  }

  // Comodities
  if (filters.comodities?.length) {
    filters.comodities.forEach((c) =>
      queryParams.push(`comodities=${encodeURIComponent(c)}`)
    );
  }

  // Características
  if (filters.characteristics?.length) {
    filters.characteristics.forEach((ch) =>
      queryParams.push(`caracteristicas=${encodeURIComponent(ch)}`)
    );
  }

  // Servicios
  if (filters.services?.length) {
    filters.services.forEach((s) =>
      queryParams.push(`servicios=${encodeURIComponent(s)}`)
    );
  }

  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

  // 3️⃣ URL final
  const finalUrl = `${baseUrl}/${slug}${queryString}`;
  console.log("🔗 Final URL:", finalUrl);
  return finalUrl;
};
