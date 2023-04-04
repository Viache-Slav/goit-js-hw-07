import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line

const galleryEl = document.querySelector(`.gallery`);
for (const img of galleryItems) {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href=${img.original}>
      <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
      />
    </a>
  </div>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);

}
galleryEl.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="900" height="700">`);
    instance.show();
  });
  
  




