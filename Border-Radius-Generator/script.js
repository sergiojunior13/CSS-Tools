const radiusValueInputs = document.querySelectorAll(".radiusValue")
const resultDiv = document.querySelector(".result")
const codeElement = document.querySelector("#code")
radiusValueInputs.forEach(item => {
    item.addEventListener("input", validateNumber)
    item.addEventListener("keypress", fillInputs)
})

var radiusValue

function validateNumber(event) {
    var inputValue = event.target.value
    var number = Number(inputValue)
    if (!isNaN(number)) {
        radiusValue = Number(event.target.value)
        changeBorderRadius()
    }
    else {
        event.target.value = inputValue.replace(inputValue.slice(-1), "")
    }
}

function changeBorderRadius(event) {
    var code
    var radiusTopLeft = Number(radiusValueInputs[0].value || 0)
    var radiusTopRight = Number(radiusValueInputs[1].value || 0)
    var radiusBottomLeft = Number(radiusValueInputs[2].value || 0)
    var radiusBottomRight = Number(radiusValueInputs[3].value || 0)
    var sumValues = radiusValue + radiusTopLeft + radiusTopRight + radiusBottomLeft + radiusBottomRight

    //If all the values are the same
    if (radiusValue * 4 === sumValues - radiusValue) {
        code = `border-radius: ${radiusValue}px;`
        radiusValueInputs.forEach(item => item.value = radiusValue)
    }
    else
        var code = `border-radius: ${radiusTopLeft}px ${radiusTopRight}px ${radiusBottomRight}px ${radiusBottomLeft}px;`
    resultDiv.style = code
    codeElement.innerText = code
}

function fillInputs(event) {
    if (event.key === "Enter") {
        radiusValueInputs.forEach(item => item.value = event.target.value)
        changeBorderRadius(event)
    }
}