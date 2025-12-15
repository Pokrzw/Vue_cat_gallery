export async function getImages(searchLimit = 1, page=0){
    const API_KEY = process.env.VUE_APP_CAT_API_KEY;
    console.log(page)
    const url = `https://api.thecatapi.com/v1/images/search?limit=${searchLimit}&api_key=${API_KEY}&page=${page}`
    
    return fetch(url)
    .then(res => res.json())
}