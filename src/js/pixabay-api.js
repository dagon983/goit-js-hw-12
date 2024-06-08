export default function fetchPictares(findPic) {
    const baseUrl = "https://pixabay.com";
    const endPoint = "/api/";
    const params = new URLSearchParams ({
        key: "44272946-14b75e2a0f7d5637eb83394ff",
        q: findPic,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    const url = `${baseUrl}${endPoint}?${params}`;

    return fetch(url)
        .then((res) => res.json())
        .catch(error => {
            throw new Error (`HTTP error! status: ${response.status}`)});
}

