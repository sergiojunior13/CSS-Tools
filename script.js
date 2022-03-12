class Item {
    constructor(name, href, img) {
        this._name = name
        this._href = href
        this._img = img

        var liElement = document.createElement("li")
        liElement.innerHTML = `<a href="${this._href}">
        <p style ="background-image: url('${this._img}');">${this._name}</p>
    </a>`
        return liElement
    }
}

const listElement = document.querySelector("#list")
listElement.append(new Item("Gradient Generator", "gradient-generator", "images/gradient-generator.jpeg"),
    new Item("Box-Shadow Generator", "box-shadow-generator", "images/box-shadow.jpeg"),
    new Item("Filter Generator", "filter-generator", "images/filter-generator.jpeg"),
    new Item("Border-Radius Generator", "border-radius-generator", "images/border-radius.jpeg"))

var menu = document.getElementById("menu")
var nav = document.getElementById("nav")

menu.addEventListener("click", mostrarMenu)

function mostrarMenu() {
    if (nav.style.display == "") {
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