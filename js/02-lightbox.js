import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.insertAdjacentHTML("beforeend", galleryEl(galleryItems));

function galleryEl(el) {
  return el
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

gallery.addEventListener("click", createModal);

function createModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
// console.log(e.target.src)
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
 
  });

    gallery.open(e.target.src)
   
}
