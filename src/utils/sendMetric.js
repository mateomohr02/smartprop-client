export const sendMetric = async (data) => {
    
    const response = await fetch(`${process.env.API_BASE_URL}/metrics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-Tenant-ID': process.env.TENANT_ID 
      },
      body: JSON.stringify(data),
    });
  
}