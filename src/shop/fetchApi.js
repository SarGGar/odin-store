

async function fetchJewelry(limit=5) {
    const url = `https://fakestoreapi.com/products/category/jewelery?limit=${limit}`
    const results = await fetch(url);
    const data = await results.json()
    return data
}

async function fetchElectronics(limit=5) {
    const url = `https://fakestoreapi.com/products/category/electronics?limit=${limit}`
    const results = await fetch(url);
    const data = await results.json()
    return data
}

async function fetchClothing(limit=5) {
    const url = `https://fakestoreapi.com/products/category/women's clothing?limit=${limit}`
    const results = await fetch(url);
    const data = await results.json()
    return data
}

export { fetchJewelry, fetchElectronics, fetchClothing };