const inputColor = document.getElementById("inputColor")
const btnAddColor = document.getElementById("btnAddColor")
const btnCopy = document.getElementById("btnCopy")
const gradientTypeRadioInput = document.getElementsByName("gradientType")
const divResult = document.getElementById("divResult")
const ulColors = document.getElementsByClassName("colors")[0]
const codeElement = document.getElementById("code")
const inputAngle = document.getElementById("inputAngle")
const angleRangeResult = document.getElementById("angle-range")
const divAngle = document.getElementById("divAngle")
const divShape = document.getElementById("divShape")
const divPosition = document.getElementById("divPosition")
const inputShape = document.getElementsByName("inputShape")
const inputsPosition = document.getElementsByName("position")
const inputPositionX = document.getElementById("inputPositionX")
const inputPositionY = document.getElementById("inputPositionY")
const positionXValue = document.getElementById("positionXValue")
const positionYValue = document.getElementById("positionYValue")

var gradient = ""
var gradientType = "linear"
var shapeType = "circle"
var colors = []
var index = 0
var angle = 90
var positionX = inputPositionX.value
var positionY = inputPositionY.value

setColors()

inputAngle.addEventListener("input", changeAngle)
inputPositionX.addEventListener("input", changePosition)
inputPositionY.addEventListener("input", changePosition)
btnAddColor.addEventListener("click", addColor)
btnCopy.addEventListener("click", copy)

for (var i = 0; i < gradientTypeRadioInput.length; i++) {
    gradientTypeRadioInput[i].addEventListener("change", function (event) {
        gradientType = event.target.value
        setColors()
    })
}

for (var i = 0; i < inputShape.length; i++) {
    inputShape[i].addEventListener("change", function (event) {
        shapeType = event.target.value
        setColors()
    })
}

function addColor() {
    var li = document.createElement("li")
    li.innerHTML = inputColor.value
    li.style.backgroundColor = inputColor.value
    ulColors.appendChild(li)
    li.id = index
    index++

    var btnRemove = document.createElement("button")
    btnRemove.setAttribute("onclick", "removeColor(event)")
    btnRemove.innerHTML = `<img class="img-trash" src="trash.png">`
    btnRemove.classList = "btnRemove"
    li.appendChild(btnRemove)

    colors.push(inputColor.value)
    setColors()
}


function setColors() {
    var text = ""
    for (var i = 0; i < colors.length; i++) {
        if (i == colors.length - 1) {
            text += `${colors[i]}`
        }
        else {
            text += `${colors[i]}, `
        }
    }
    if (colors.length < 2 && colors.length > 0) {
        text = `${colors[0]}, #0539f5`
    }
    if (colors.length == 0) {
        text = `#0539f5, #5095f5`
    }
    if (gradientType == "linear") {
        divAngle.style.display = "flex"
        divShape.style.display = "none"
        divPosition.style.display = "none"
        gradient = `${gradientType}-gradient(${angle}deg, ${text})`
    }
    else if (gradientType == "radial") {
        divAngle.style.display = "none"
        divShape.style.display = "flex"
        divPosition.style.display = "flex"
        gradient = `${gradientType}-gradient(${shapeType} at ${positionX}% ${positionY}%, ${text})`
    }
    else if (gradientType == "conic") {
        divAngle.style.display = "flex"
        divShape.style.display = "none"
        divPosition.style.display = "flex"
        gradient = `${gradientType}-gradient(from ${angle}deg at ${inputPositionX.value}% ${inputPositionY.value}%, ${text})`
    }
    divResult.style.backgroundImage = gradient
    codeElement.innerHTML = "background-image: " + gradient + ";"
}

function removeColor(event) {
    var li = event.target.parentElement.parentElement
    ulColors.removeChild(li)
    for (var i = 0; i < ulColors.children.length; i++) {
        ulColors.children[i].id = i
    }
    index = ulColors.children.length
    colors.splice(li.id, 1)
    setColors()
}

function changeAngle() {
    angle = inputAngle.value
    angleRangeResult.innerHTML = `${angle}°`
    setColors()
}

function changePosition() {
    positionX = inputPositionX.value
    positionY = inputPositionY.value
    positionXValue.innerHTML = positionX
    positionYValue.innerHTML = positionY
    setColors()
}

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