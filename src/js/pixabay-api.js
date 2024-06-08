import axios from 'axios';

export default  async function fetchPictares(findPic, page = 1, per_page = 15) {
    const baseUrl = "https://pixabay.com";
    const endPoint = "/api/";
    const params = new URLSearchParams ({
        key: "44272946-14b75e2a0f7d5637eb83394ff",
        q: findPic,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: page, 
        per_page: per_page
    });
    const url = `${baseUrl}${endPoint}?${params}`;

    try{
        const response = await axios.get(url)
        return response.data; 
    } catch {
        throw new Error (`HTTP error! status: ${response.status}`)
    }
}

