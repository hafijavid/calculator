//displaying the value
function input(val) {
    document.getElementById("result").value+=val
}

//solve
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//clear display
function clear() {
    document.getElementById("result").value = " "
}
