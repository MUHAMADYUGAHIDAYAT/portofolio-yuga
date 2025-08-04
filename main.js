alert("Website ini masih dalam pengembangan")

let menuIcon = document.getElementById("pmenu-icon");
let navbar = document.querySelector(".pnavbar");

menuIcon.onclick = function () {
    navbar.classList.toggle("active");
};

let pesan = document.getElementById("raffiayam");
pesan.onclick = function () {
    alert("Fitur Masih Belum Tersedia");
};

let pengalaman = document.querySelector(".ppengalaman");
pengalaman.onclick = function () {
    alert("Fitur Masih Belum DItambah")
}
