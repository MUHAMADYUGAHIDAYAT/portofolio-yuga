alert("Website ini masih dalam pengembangan")

let menuIcon = document.getElementById("pmenu-icon");
let navbar = document.querySelector(".pnavbar");

menuIcon.onclick = function () {
    navbar.classList.toggle("active");
};

let pesan = document.getElementById("raffiayam");
let popupwa = document.getElementById("ke-wa-bae");
let tombolIyo = document.getElementById("btn-iyo");
let tombolIdak = document.getElementById("btn-idak");

pesan.onclick = function () {
    alert("fitur masih belum tersedia");
    popupwa.classList.add("active");
};
tombolIyo.onclick = function () {
    window.location.href = "http://wa.me/6287780313222"
    popupwa.classList.remove("active");
}
tombolIdak.onclick = function () {
    popupwa.classList.remove("active");
}


let pengalaman = document.querySelector(".ppengalaman");
pengalaman.onclick = function () {
    alert("Fitur Masih Belum DItambah")
}
