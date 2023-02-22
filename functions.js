
// Bez Mainīgajiem
let hello = "Hello"
let world = "World"
function helloWorld() {
    let helloWorld = document.getElementById("helloWorld")
        helloWorld.innerHTML = hello + " " + world     
}
helloWorld()

// Ar vienu Mainīgo 
let a = 321
function simpleFunction(a) {
    let f2 = document.getElementById("+=")
    if (a !== 321) {
        return "False"
    } else {
        f2.innerHTML =  a += a
    }
}
simpleFunction(a)

// Ar 2 mainīgajiem
let b = 123
let c = 321
function sum(b, c) {
    let sum = document.getElementById("sum")
    if (b == c) {
        return "True"        
    } else {
        sum.innerHTML = b + c
    }
}
sum(b, c)

