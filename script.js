const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}








/*
const numn1=parseInt(prompt("Enter first number:  "))

const op=prompt("enter operator (anyone +,-,*,/");

const numn2=parseInt(prompt("Enter second number:  "))
let result=0;
switch(op){
    case '+':
        result= numn1+numn2;
        console.log(`${numn1} + ${numn2}  = ${result}`)
        break;
    case '-':
        result= numn1-numn2;
        console.log(`${numn1} - ${numn2}  = ${result}`)
        break;
    case '*':
        result= numn1*numn2;
        console.log(`${numn1} * ${numn2}  = ${result}`)
        break;
    case '/':
        result= numn1/numn2;
        console.log(`${numn1} / ${numn2}  = ${result}`)
        break;
    default:
        console.log("invalid operator+")
    

}

*/


// let str1="This is nova "
// let str2="from/far/beyond/the/reach"

// console.log(str1 + " who is " + str2)
// console.log(str1.concat( str2))
// console.log(str1.concat(" who is ", str2))
// console.log(str1.concat(" who is fearless"))

// console.log("length of the given string is " + str1.length)
// console.log("upper case of str1 is : " + str1.toUpperCase())
// console.log("Lower case of str1 is : " + str1.toLowerCase())

// console.log(str2.indexOf("E", 12))
// console.log(str2.lastIndexOf("e",))
// console.log(str1.charAt(9))


// console.log(str1.substring(1,7))

// console.log(str1.slice(3,9))

// console.log(str1.split(" "))
// console.log(str2.split("/"))

// console.log(str1.replace("is ", "iz "))
// console.log(str1.replaceAll("is ", "iz "))


// console.log(str2.search("reach"))

// console.log(str1.startsWith("This"))
// console.log(str1.endsWith("nova "))
// console.log(str1.includes("nova"))








