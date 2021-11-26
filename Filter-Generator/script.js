var filterSelect = document.getElementById("filters")
var amountInput = document.getElementById("amount")
var resultDiv = document.getElementById("result")
var codeDiv = document.getElementById("code")
var amountValue = document.getElementById("amountValue")
var code

filterSelect.addEventListener("change", function () {
    amountInput.value = 1 
})
amountInput.addEventListener("input", function () {
    if (this.value.length > 3)
        this.value = this.value.slice(0, 3)
})

filterSelect.addEventListener("change", generate)
amountInput.addEventListener("input", generate)
amountInput.addEventListener("focus", select)

generate()

function generate() {
    var filter = filterSelect.value
    var amount = amountInput.value

    if (filterSelect.value == "blur") {

        amountInput.max = 50
        amountInput.step = 1
        amountValue.innerHTML = amountInput.value + "px"

        code = `filter: ${filter}(${amount}px);`
        resultDiv.style = code
        codeDiv.innerHTML = code
    }
    else if (filterSelect.value == "hue-rotate") {
        
        amountInput.max = 360
        amountInput.step = 1
        amountValue.innerHTML = amountInput.value + "°"

        code = `filter: ${filter}(${amount}deg);`
        resultDiv.style = code
        codeDiv.innerHTML = code
    }
    else if(filterSelect.value == "contrast"){
        amountInput.max = 5
        amountInput.step = 0.1
        amountValue.innerHTML = amountInput.value

        code = `filter: ${filter}(${amount});`
        resultDiv.style = code
        codeDiv.innerHTML = code
    }
    else {
        amountInput.max = 1
        amountInput.step = 0.1
        amountValue.innerHTML = amountInput.value

        code = `filter: ${filter}(${amount});`
        resultDiv.style = code
        codeDiv.innerHTML = code
    }
}

function copy() {
    navigator.clipboard.writeText(codeDiv.textContent);
    var div = document.createElement("div")
    div.innerHTML = "Copied!"
    div.classList = "copyDiv"
    document.body.appendChild(div)
    setTimeout(function () {
        div.style.transform = "translateY(0px)"
    }, 10)

    setTimeout(function () {
        div.style.transform = "translateY(60px)"
        setTimeout(function () {
            document.body.removeChild(div)
        }, 1000)
    }, 1300)
}

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

function select() {
    this.select()
}