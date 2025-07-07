// Array--oderred hota h array
// let ar = ["komal",12,3.7,true]
// console.log(ar);
// console.log(ar[3]);

// indexing = position/address of element


// let arr1 = []

// for(let a=0; a<10; a++){
//     arr1[a] = parseInt(prompt("enter elements"))
// }
// console.log(arr1);

// ar = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0;
// for(let i = 0; i < 10; i++) {
//     if(ar[i]%2 != 0) {
//         sum = sum + ar[i];
//     }
// }

// console.log("Sum of odd numbers b/w 1 to 10 is:"+ sum);


// For of loop--> fetch the value without indexing
// let sum = 0;
// let c = [11,12,13,14,15,16,17,18,19,20]
// for(let i of c)  {
//     sum = sum+i;
// } 
// console.log(sum);

// For in loop
// let k = ["komal",21,'bhopal']
// for(let x in k){
//     console.log(x);
// }

// Array Method
// --->Push- add element to the end off array add multiple element
// let k = ["komal",21,'bhopal',9,'kk']
// k.push('mahak')
// console.log(k);

//  let s1 = k.slice(1,4)
// console.log(s1);


let ar = [1,2,3,4,5,6,7,8,9,10]
let sl1 = ar.slice(3,9)

for(i of sl1){
    if(i % 2 == 0){
        console.log(i)
    }
}