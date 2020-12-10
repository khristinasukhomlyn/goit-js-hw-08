import galleryList from "./gallery-items.js";
//console.log(galleryList);

const galleryContainer = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
console.dir(modalImage);
// const galleryItem = createGalleryItem(galleryList);

//gallery.Container.addEventListener("click", onContainerGalleryClick)

const imageCard = galleryList.map((elem, index) => {
  return `<li class="gallery__item">
    <a class="gallery_link" href="${elem.original}" >
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" data-source="${elem.original}" data-index="${index}">
  </a>
  </li>`;
});
galleryContainer.insertAdjacentHTML("beforeend", imageCard.join(""));

galleryContainer.addEventListener("click", onClickGalleryContainer);
lightBox.addEventListener("click", toCloseModal);

function onClickGalleryContainer(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightBox.classList.add("is-open");
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;
}
function toCloseModal(event) {
  if (event.target.nodeName === "IMG") {
    return;
  }
  lightBox.classList.remove("is-open");
  modalImage.src = "";
  modalImage.alt = "";
}

// function createGalleryItem(galleryList) {
//   galleryList
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery_item">
//   <a class="gallery_link" href="${original}" >
//   <img class="galleryimage" src="${preview}" alt="${description}" data-source="${original}">
//   </a>
//   </li>`;
//     })
//     .join("");
// }

// galleryContainer.insertAdjacentHTML("beforeend", galleryItem);
