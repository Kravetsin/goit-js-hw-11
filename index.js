import{S as d,a as f,i as l}from"./assets/vendor-B4hrrHhy.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=new d(".gallery a",{captionsData:"alt",captionDelay:250}),a=document.querySelector(".loader");function m(s){const n=document.querySelector(".gallery"),o=s.map(t=>`
    <li class="gallery__item">
      <a class="gallery__link" href="${t.largeImageURL}">
        <img class="gallery__image" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="image__info">
        <p><strong>Likes:</strong> ${t.likes}</p>
        <p><strong>Views:</strong> ${t.views}</p>
        <p><strong>Comments:</strong> ${t.comments}</p>
        <p><strong>Downloads:</strong> ${t.downloads}</p>
      </div>
    </li>
  `).join("");n.insertAdjacentHTML("beforeend",o),g.refresh()}function p(){const s=document.querySelector(".gallery");s.innerHTML=""}function y(){a&&a.classList.remove("hidden")}function h(){a&&a.classList.add("hidden")}function L(s){const o="https://pixabay.com/api/?key="+"51218817-9c6b1fab233f845d5e532ac94"+"&q="+encodeURIComponent(s)+"&per_page=9&image_type=photo&orientation=horizontal&safesearch=true";return f.get(o).then(t=>t.data).catch(t=>(console.log(t),[]))}const u=document.querySelector(".form"),c=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const n=c.value.trim();if(!n){l.warning({title:"Warning",message:"Please enter a search term!"});return}y(),p(),L(n).then(o=>{if(o.hits.length===0){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(o.hits),c.value=""}).catch(o=>{l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
