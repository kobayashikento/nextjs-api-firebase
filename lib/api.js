const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=BWYc6UyzbUfSHEwRgksRCUxEgvaUmQQbnsb2LoPh'

async function fetchAPI(args) {

    const res = await fetch(API_URL + args)

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json
}

export async function getAllAPODForHome() {
    const data = await fetchAPI(`&count=4`)

    return data;
}

export async function getAllAPODForFeed(value) {
    const data = await fetchAPI(`&count=${value}`)

    return data;
}


export async function getAPODAndMoreAPODs(slug) {
    const apod = await fetchAPI(`&date=${slug}`);
    const moreAPODs = await fetchAPI(`&count=2`);
    return { apod, moreAPODs };
}
