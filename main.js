let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".advantages-card");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#FB565A"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})

$(document).ready(function () {
    $('.karusetulava').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
    breakpoint: 850,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    }
    }]
    });
  });


  

  

