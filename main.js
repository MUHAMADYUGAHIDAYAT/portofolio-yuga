alert("Website ini masih dalam pengembangan")

let menuIcon = document.getElementById("pmenu-icon");
let navbar = document.querySelector(".pnavbar");

menuIcon.onclick = function () {
    navbar.classList.toggle("active");
};
