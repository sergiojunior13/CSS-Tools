var menu = document.getElementById("menu")
var nav = document.getElementById("nav")

menu.addEventListener("click", mostrarMenu)

function mostrarMenu() {
    if(nav.style.display == ""){
        nav.style.display = "flex"
        setTimeout(() => {
            nav.style.opacity = 1
        }, 10);
    }
    else {
        nav.style.opacity = 0
        setTimeout(() => {
            nav.style.display = ""
        }, 500);
    }
}