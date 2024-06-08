import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import fetchPictares from "./js/pixabay-api";
import renderImages from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let newLightBox =  new SimpleLightbox('gallery, a',{
    captionsData: 'alt',
    captionDelay: 250
});

const form = document.querySelector(".form");
const imageList = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let inputValue = '';



form.addEventListener("submit", async (event) => {
    event.preventDefault();
     inputValue = event.currentTarget.elements.inputText.value.trim(); 

    if (inputValue === "") {
        iziToast.error({
            title: 'Error',
            message: "Need to fill the out the search bar",
            position: "topRight",
        });
        return;
    }

    showLoader();

    try{
        const data = await fetchPictares(inputValue, page);
        const totalHits = data.totalHits;
        hideLoader()
        
        if (totalHits === 0) {
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
        newLightBox.refresh();

        if(totalHits > 15) {
            loadMoreBtn.style.display = "block";
        }
    
    } catch {
        iziToast.warning({
            title: "Error",
            message: `Something went wrong. ${response.message}`
        })
    }
});

loadMoreBtn.addEventListener("click", async (event) => {
    page += 1;
    try {
        const data = await fetchPictares(inputValue, page);
        const markUp = renderImages(data.hits);
        imageList.insertAdjacentHTML("beforeend", markUp);
        newLightBox.refresh();

        const item = document.querySelector(".gallery-item");
        const itemHeight = item.getBoundingClientRect().height;
        
        window.scrollBy({
            top: itemHeight * 2,
            left: 0,
            behavior: "smooth",
          });

        const totalHits = data.totalHits; 

        if(totalHits <= page * 15) {
        loadMoreBtn.style.display = "none";
        iziToast.info({
            title: 'End of results',
            message: "We're sorry, but you've reached the end of search results.",
        });
       }

        
       
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: `Something went wrong ${error.message}.`
        })
    }
}) 


function showLoader() {
    const loader = document.querySelector('.loader');
    imageList.innerHTML = '';
    loader.style.display = "block";
};

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = "none";
};
