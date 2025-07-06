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

ar = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(let i = 0; i < 10; i++) {
    if(ar[i]%2 != 0) {
        sum = sum + ar[i];
    }
}

console.log("Sum of odd numbers b/w 1 to 10 is:"+ sum);