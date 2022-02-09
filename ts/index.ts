const Gallery: HTMLElement = document.getElementById('gallery');
const btnGoNext: HTMLElement = document.getElementById('btnGoNext');
const btnGoPrev: HTMLElement = document.getElementById('btnGoPrev');
const CardWidth: number = 300;
const CardLenght: number = 7;
const CardsToShow: number = 4;
let index: number = 0;

btnGoNext.addEventListener('click', goNext);
btnGoPrev.addEventListener('click', goPrev);

function goNext() {
  index += 1;
  let translate: number = index * CardWidth;
  Gallery.style.transform = `translateX(-${translate}px)`;
  
  if (index === CardLenght - CardsToShow) {
    btnGoNext.style.display = 'none';
  }

  if (index >= 0) {
    btnGoPrev.style.display = 'inline-block';
  }
}

function goPrev() {
  index -= 1;
  let translate: number = index * CardWidth;
  Gallery.style.transform = `translateX(-${translate}px)`;

  if (index !== CardLenght - CardsToShow) {
    btnGoNext.style.display = 'inline-block';
  }

  if (index === 0) {
    btnGoPrev.style.display = 'none';
  }
}