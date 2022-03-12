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

function select() {
    this.select()
}