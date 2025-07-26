let a = [2,4,5,6,7]
let b = a.map( (e) => {
 return e*2
})
console.log(b);


let c = [2,3,4,5]
let d = c.filter((e)=>{
    return e>10
    // return e%2 == 0
})
console.log(c);


a.forEach((e)=>{
    console.log(a*2);
    })


let Aoo = [{
    name: "Ayush",
    age: 20,
    city: "Delhi"
}, {
    name: "Manas",
    age: 22,
    city: "Mumbai"
}, {
    name: "Sita",
    age: 19,
    city: "Kolkata"
}, {
    name: "Anjali",
    age: 21,
    city: "Chennai"
}, {
    name: "Komal",
    age: 23,
    city: "Bangalore"   
}]


// let s = document.getElementById("screen");

Aoo.map( (e)=>{
Show.innerHTML+= `
<h1> </h1>
`

   
//     document.getElementById("screen").innerHTML += e.name;
//     document.getElementById("age").innerHTML += e.age;
//     document.getElementById("city").innerHTML += e.city;
})