export const metricBuilder = (name = null, metadata = null, ids = []) => {
  const metric = {
    name,
    propertyId: [],
    postId: [],
    metadata: null,
  };

  // Mapeo de casos que afectan propertyId o postId
  const propertyEvents = ["interaction_prop", "visualization_prop", "share_prop"];
  const postEvents = ["post_detail_blog", "post_share_blog"];

  // Asignar metadatos según el tipo
  if (name === "filter") {
    metric.metadata = metadata;
  } else if (name === "form_send") {
    metric.metadata = metadata;
  }

  // Asignar arrays de IDs
  if (propertyEvents.includes(name)) {
    metric.propertyId = Array.from(new Set(ids)); // elimina duplicados
  } else if (postEvents.includes(name)) {
    metric.postId = Array.from(new Set(ids));
  }

  // Para nombres no reconocidos
  const validNames = [
    "filter", "visit_site", "visit_blog", "visit_contact",
    "interaction_prop", "visualization_prop", "post_detail_blog",
    "whatsapp", "instagram", "form_send", "share_prop", "post_share_blog"
  ];

  if (!validNames.includes(name)) {
    metric.metadata = { metadata, ids };
  }

  return metric;
};
