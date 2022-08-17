import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", itemsMarkup);

galleryEl.addEventListener("click", onModalOpenner);

function onModalOpenner(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  console.log("TARGET: ", evt.target);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
  instance.show();
}
