import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import fetchPictares from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const imageList = document.querySelector(".gallery")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.inputText.value.trim();

    if (inputValue === "") {
        iziToast.error({
            title: 'Error',
            message: "Need to fill the out the search bar",
            position: "topRight",
        });
        return;
    }

    showLoader();

    fetchPictares(inputValue).then(data => {
        hideLoader()
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            imageList.innerHTML = "";
            return;
        }
        const markUp = renderImages(data.hits);
        imageList.innerHTML = markUp;
        let newLightBox =  new SimpleLightbox('gallery, a',{
            captionsData: 'alt',
            captionDelay: 250
        });
        newLightBox.refresh();
    })
    .catch(error => {
        iziToast.warning({
            title: "Error",
            message: `Something went wrong. ${error.message}`
        })
    });
});


function showLoader() {
    const loader = document.querySelector('.loader');
    imageList.innerHTML = '';
    loader.style.display = "block";
};

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = "none";
};
