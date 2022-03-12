const body = document.body
const bodyElements = [...body.children]
const header = document.createElement("header")
header.translate = false
header.innerHTML = `<h1><a href="../">CSS Tools</a></h1>
<nav id="nav">
    <a href="../gradient-generator">Gradient</a>
    <a href="../box-shadow-generator">Box-Shadow</a>
    <a href="../filter-generator">Filter</a>
    <a href="../border-radius-generator">Border-Radius</a>
</nav>
<img src="../images/menu-icon.svg" class="menu" id="menu">`

body.innerHTML = ""
body.appendChild(header)
bodyElements.map(item => body.appendChild(item))

function copy() {
    navigator.clipboard.writeText(codeElement.textContent);
    var div = document.createElement("div")
    div.innerHTML = "Copied!"
    div.classList = "copyDiv"
    document.body.appendChild(div)
    setTimeout(function(){
        div.style.transform = "translateY(0px)"
    }, 10)

    setTimeout(function(){
        div.style.transform = "translateY(60px)"
       setTimeout(function(){
        document.body.removeChild(div)
       },1000)
    }, 1300)
}

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
