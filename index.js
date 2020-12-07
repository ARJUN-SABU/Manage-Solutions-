document.querySelector(".hamburger").addEventListener("click", function(){


    document.querySelector(".navElements").classList.remove("v-resp");
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".close").style.display = "block";


})

document.querySelector(".close").addEventListener("click", function(){


    document.querySelector(".navElements").classList.add("v-resp");
    document.querySelector(".hamburger").style.display = "block";
    document.querySelector(".close").style.display = "none";


})

// flickity
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
