const accordionBtns = document.querySelectorAll(".questions__accordion-button");

const body = document.querySelector("body")
const modalWindow = document.querySelector(".modal")
const modalOverlay = document.querySelector(".information__modal-closeWrapper")
const modalImage = document.querySelector(".information__modal-image")
const images = document.querySelectorAll(".images");


accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
})

images.forEach((img) => {
  img.onclick = function () {
    modalWindow.classList.add('open')
    modalImage.src = this.src;
    body.style.overflow = 'hidden'
  }
})

modalOverlay.addEventListener("click", () => {
  modalWindow.classList.remove('open')
  body.style.overflow = 'auto'
})
