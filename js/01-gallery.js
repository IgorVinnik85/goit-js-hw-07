import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createGalleryEl(galleryItems));

function createGalleryEl(el) {
  return el
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

const galleryEl = document.querySelector(".gallery__image");
console.log(galleryEl);

gallery.addEventListener("click", showModal);

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox
    .create(
      `
				<img width="1400" height="900" src="${event.target.dataset.source}">
			`
    )
    .show();
}
