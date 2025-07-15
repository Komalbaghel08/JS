//Given array find the sum of all element 
let arr = [2,4,6,8,10]

sum = 0 

for(i of arr){
    sum = sum + i
}

console.log(sum)

// find max number of an array
let arr1 = [3,7,2,9,5]
max_value = arr[0]

for(let i = 0; i<= 5; i++){
    if(max_value < arr1[i]){
        max_value = arr1[i]
    }
}

console.log(max_value)

// count even and odd num
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let eCount = 0;
let oCount = 0;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        eCount++;
    } else {
        oCount++;
    }
}

console.log("Even numbers:", eCount);
console.log("Odd numbers:", oCount);


//reverse the array
function sortReverse(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i ; j++){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

let numbers = [10,20,30,40,50]
let reverse = sortReverse(numbers)
console.log(reverse)