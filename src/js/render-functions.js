function imageTamplate(img) {
    return `<li class="gallery-item">
            <a class="img-link" href="${img.largeImageURL}">
            <img class="gallery-item-image"
                src="${img.webformatURL}"
                alt="${img.tags}"
                width="360px"
                height="200px"
            />
            <div class="info">
                <p class="info-title">likes <spam class="info-value">${img.likes}</spam> </p>
                <p class="info-title">views <spam class="info-value">${img.views}</spam></p>
                <p class="info-title">comments <spam class="info-value">${img.comments}</spam></p>
                <p class="info-title">downloads <spam class="info-value">${img.downloads}</spam></p>
            </div>
            </a>
            </li>`
}

export default function renderImages(arr) {
    return arr.map(imageTamplate).join("");
}