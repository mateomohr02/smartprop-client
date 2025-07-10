export const fetchAvailableLocations = async () => {
    const response = await fetch(`${process.env.API_BASE_URL}/locations`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Tenant-ID': process.env.TENANT_ID
        },
        cache: 'force-cache',
        next: { revalidate: 3600 }
    })
    

    return response.json()
}