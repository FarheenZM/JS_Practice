import React, {Component} from 'react';

class ImageSlider extends Component{
  constructor() {
    super()
  }

  function reset(){
    for(i=0; i<sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
  }

  function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
  }

  function slideLeft(){
    reset();
    if(current === 0){
      current = sliderImages.length;
    }
    sliderImages[current - 1].style.display = 'block';
    current--;
  }

  function slideRight(){
    reset();
    if(current === sliderImages.length-1){
      current = -1;
    }
    sliderImages[current + 1].style.display = 'block';
    current++;
  }

  render() {
    return(

    );
  }
}





let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset(){
  for(i=0; i<sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

function slideLeft(){
  reset();
  if(current === 0){
    current = sliderImages.length;
  }
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function slideRight(){
  reset();
  if(current === sliderImages.length-1){
    current = -1;
  }
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', function(){
  slideLeft();
});

arrowRight.addEventListener('click', function(){
  slideRight();
});

startSlide();
