import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
for (const img of galleryItems) {
  const listEl = `<li>
    <a class="gallery__item" href=${img.original}>
      <img
        class="gallery__image"
        src=${img.preview}
        alt=${img.description}
      />
    </a>
  </li>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);
};
const lightbox = new SimpleLightbox(".gallery li a", {
  captionDelay: 250,
  captionsData: "alt",
  showCounter: true,
  scrollbarWidth: 20
}); 
