export const fetchActiveProperties = async () =>{ 
    const response = await fetch(`${process.env.API_BASE_URL}/properties/active`,{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'X-Tenant-ID' : process.env.TENANT_ID
        }
    })
    const { properties } = await response.json()
    return properties
}