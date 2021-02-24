const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=BWYc6UyzbUfSHEwRgksRCUxEgvaUmQQbnsb2LoPh'

async function fetchAPI(count) {

    const res = await fetch(API_URL + `&count=${count}`)

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json
}

export async function getAllAPODForHome(preview) {
    const data = null //await fetchAPI(1)

    return data;
}