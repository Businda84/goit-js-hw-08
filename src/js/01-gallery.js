// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryEl = document.querySelector('.gallery')
galleryEl.style.listStyle = 'none';

console.log(galleryEl);
const onCreateMarkup = galleryItems.map(({ preview, original, description })=>

    ` <li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
    
      alt="${description}"
     />
  </a>
// </li>
 `
);

galleryEl.insertAdjacentHTML('beforeend', onCreateMarkup.join(''))


let galleryModal = new SimpleLightbox('.gallery a', {
  doubleTapZoom: '1.5',
  captionsData: 'alt',
  captionDelay: 250});



