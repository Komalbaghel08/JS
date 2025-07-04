// ladder if else
// // WAP 
a = parseFloat(prompt("1st subject marks"))
b = parseFloat(prompt("2nd subject marks"))
c = parseFloat(prompt("3rd subject marks"))

let total = a+b+c
let percentage = (total/300)*100

if (percentage >= 90){
    console.log("A grade");
}
else if (percentage >= 80 && percentage <= 65){
    console.log("B grade");
}
else if (percentage >= 65 && percentage <= 33){
    console.log("C grade");
}
else{
    console.log("Fail");
}
