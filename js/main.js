const leftbtn = document.querySelector(".l-btn, .btn-1b");
const rightbtn = document.querySelector(".r-btn, .btn-1a");
const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

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