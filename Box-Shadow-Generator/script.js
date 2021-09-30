const colorElement = document.getElementById("color")
const offsetElements = document.getElementsByName("offset")
const blurElement = document.getElementById("blur-radius")
const spreadElement = document.getElementById("spread-radius")
const insetElement = document.getElementsByName("inset")
const resultElement = document.getElementById("result")
const codeElement = document.getElementById("code")

const offsetXValue = document.getElementById("offsetXValue")
const offsetYValue = document.getElementById("offsetYValue")
const blurValue = document.getElementById("blurValue")
const spreadValue = document.getElementById("spreadValue")

var color = colorElement.value
var offsetX = offsetElements[0].value
var offsetY = offsetElements[1].value
var blur = blurElement.value
var spread = spreadElement.value
var inset = ""
var codeText

setBoxShadow()

colorElement.addEventListener("input", setBoxShadow)
offsetElements[0].addEventListener("input", setBoxShadow)
offsetElements[1].addEventListener("input", setBoxShadow)
blurElement.addEventListener("input", setBoxShadow)
spreadElement.addEventListener("input", setBoxShadow)

for (var i = 0; i < insetElement.length; i++) {
    insetElement[i].addEventListener("input", function (event) {
        inset = event.target.value
        setBoxShadow()
    })
}


function setBoxShadow() {
    color = colorElement.value
    offsetX = offsetElements[0].value
    offsetY = offsetElements[1].value
    blur = blurElement.value
    spread = spreadElement.value

    offsetXValue.innerHTML = offsetX
    offsetYValue.innerHTML = offsetY
    blurValue.innerHTML = blur
    spreadValue.innerHTML = spread

    switch (inset) {
        case "":
            codeText = `box-shadow: ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color};`
            break
        case "inset":
            codeText = `box-shadow: inset ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color};`
    }

    resultElement.style = codeText
    codeElement.innerHTML = codeText
}

function copy() {
    navigator.clipboard.writeText(codeElement.textContent);
    var popUp = document.createElement("div")
    popUp.className = "copyDiv"
    popUp.innerHTML = "Copied!"
    document.getElementById("main").appendChild(popUp)
    setTimeout(function () {
        document.getElementById("main").removeChild(popUp)
    }, 1000)
}