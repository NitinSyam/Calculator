const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""
}

function caluculate(){
    try {
        const expression = display.value.replace(/X/g, '*')
        display.value = eval(expression)
    } catch (error) {
        display.value = "Invalid"
    }
}