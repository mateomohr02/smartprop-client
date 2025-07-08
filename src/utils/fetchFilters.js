export const fetchFilters = async () => {

    const response = await fetch(`${process.env.API_BASE_URL}/properties/filters`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Tenant-ID': process.env.TENANT_ID
        },
        cache: 'force-cache',
        next: { revalidate: 3600 }
    })

    const { filters }= await response.json(); 

    return filters;    

}