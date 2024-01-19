const leftbtn = document.querySelector(".l-btn, .btn-1b");
const rightbtn = document.querySelector(".r-btn, .btn-1a");
const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");
const leftbtn2 = document.querySelector(".btn-1d");
const rightbtn2 = document.querySelector(".btn-1c");
const leftbtn3 = document.querySelector(".btn-1f");
const rightbtn3 = document.querySelector(".btn-1e");
const leftbtn4 = document.querySelector(".btn-1h");
const rightbtn4 = document.querySelector(".btn-1g");
const leftbtn5 = document.querySelector(".btn-1j");
const rightbtn5 = document.querySelector(".btn-1i");


rightbtn.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn1.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn1.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn2.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn2.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn3.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-3");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn3.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-3");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn4.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-4");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn4.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-4");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

rightbtn5.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-5");
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn5.addEventListener("click", function(event) {
    const conent = document.querySelector(".product-slide-5");
    conent.scrollLeft -= 1100;
    event.preventDefault();
});