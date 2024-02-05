/* reference variavle nav to select element nav */
const nav = document.querySelector("nav");

/* add event listener to window, we are adding scroll event here */
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 60) {
        nav.classList.add("scrolled");  /* it added class scrolled in nav when we scroll the y axis of page above 60px */
    } else{
        nav.classList.remove("scrolled"); /* it remove class scrolled from nav when we scroll the y axis of page below 60px */
    }
});
