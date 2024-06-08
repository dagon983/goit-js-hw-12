import{a as h,S as y,i}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function p(e,s=1,o=15){const a="https://pixabay.com",t="/api/",r=new URLSearchParams({key:"44272946-14b75e2a0f7d5637eb83394ff",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o}),n=`${a}${t}?${r}`;try{return(await h.get(n)).data}catch{throw new Error(`HTTP error! status: ${response.status}`)}}function g(e){return`<li class="gallery-item">
            <a class="img-link" href="${e.largeImageURL}">
            <img class="gallery-item-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                width="360px"
                height="200px"
            />
            <div class="info">
                <p class="info-title">likes <spam class="info-value">${e.likes}</spam> </p>
                <p class="info-title">views <spam class="info-value">${e.views}</spam></p>
                <p class="info-title">comments <spam class="info-value">${e.comments}</spam></p>
                <p class="info-title">downloads <spam class="info-value">${e.downloads}</spam></p>
            </div>
            </a>
            </li>`}function d(e){return e.map(g).join("")}let f=new y("gallery, a",{captionsData:"alt",captionDelay:250});const w=document.querySelector(".form"),u=document.querySelector(".gallery"),m=document.querySelector(".load-more");let l=1,c="";w.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.currentTarget.elements.inputText.value.trim(),c===""){i.error({title:"Error",message:"Need to fill the out the search bar",position:"topRight"});return}L();try{const s=await p(c,l),o=s.totalHits;if(b(),o===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="";return}const a=d(s.hits);u.innerHTML=a,f.refresh(),o>15&&(m.style.display="block")}catch{i.warning({title:"Error",message:`Something went wrong. ${response.message}`})}});m.addEventListener("click",async e=>{l+=1;try{const s=await p(c,l),o=d(s.hits);u.insertAdjacentHTML("beforeend",o),f.refresh();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"}),s.totalHits<=l*15&&(m.style.display="none",i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch(s){i.error({title:"Error",message:`Something went wrong ${s.message}.`})}});function L(){const e=document.querySelector(".loader");u.innerHTML="",e.style.display="block"}function b(){const e=document.querySelector(".loader");e.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
