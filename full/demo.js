
// NAVBAR MOBILE
var overlay = document.querySelector('.overlay');
var navbar_moblie = document.querySelector('.navbar-mobile');
var reduceNode = document.querySelector('.reduce-navbar');
var closeNode = document.querySelector('.navbar-mobile-close-icon');

reduceNode.addEventListener('click', showNavbar);
function showNavbar() {
    overlay.classList.add('show');
    overlay.classList.remove('hide');
    navbar_moblie.classList.add('navbar-mobile-show');
    navbar_moblie.classList.remove('navbar-mobile-hide');
}

closeNode.addEventListener('click', closeFunc);
function closeFunc() {
    navbar_moblie.classList.add('navbar-mobile-hide');
    navbar_moblie.classList.remove('navbar-mobile-show');
    overlay.classList.remove('show');
}

overlay.addEventListener('click',closeFunc);
navbar_moblie.addEventListener('click', function(event) {
    event.stopPropagation();
})

// HEADER
const header = document.querySelector('.header');
const header_content_container = document.querySelector('.header-content-container');
const header_contents = document.querySelectorAll('.header-content');
const header_content_width = header_contents[0].offsetWidth;

const arrown_left = document.querySelector('.arrow-icon-left');
const arrown_right = document.querySelector('.arrow-icon-right');
const slider_dots_item = document.querySelectorAll('.slider-dots li');

arrown_left.addEventListener('click', function() {
    handleChange(-1);
})

arrown_right.addEventListener('click', function() {
    handleChange(1);
})

let positionX = 0; // hướng X
let index = 0;

[...slider_dots_item].forEach((item) =>
    item.addEventListener('click', function(event) {
        [...slider_dots_item].forEach((el) => el.classList.remove('active-position'))
        const slide_index = Number(event.target.dataset.index);
        index = slide_index;
        positionX = -1 * slide_index * header_content_width;
        header_content_container.style = `transform: translateX(${positionX}px)`;
        event.target.classList.add('active-position');
    })
)

function handleChange(direction) {
    if(direction == 1) {
        if(index >= header_contents.length - 1) {
            index = header_contents.length - 1;
            return;
        }
        positionX = positionX - header_content_width;
        header_content_container.style = `transform: translateX(${positionX}px)`;
        index++;
        console.log(index)
        
    } else if(direction == -1) {
        if(index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + header_content_width;
        header_content_container.style = `transform: translateX(${positionX}px)`;
        index--;
        console.log(index)
    }
    [...slider_dots_item].forEach((e) => e.classList.remove('active-position'))
    slider_dots_item[index].classList.add('active-position');
}


$('.header-content-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.header-content-container-nav'
  });
  $('.header-content-container-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.header-content-container',
    dots: true,
    focusOnSelect: true
  });





// ITEM
var item = document.querySelectorAll('.item');
var item_share = document.querySelectorAll('.item-share');

for(let i=0;i<item.length;++i) {
    item[i].onmouseover = function() {
        item_share[i].classList.add('show-flex');
    }
    
    item[i].onmouseout = function() {
        item_share[i].classList.remove('show-flex');
    }
}

// COURSEs
