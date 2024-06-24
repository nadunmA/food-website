const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 0)
});

let menu = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
}
window.onclick = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

