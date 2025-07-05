// for(let a=2; a<=3; a++){
//     for(let b =1; b < 11; b++){
//         console.log(a*b);
//     }
// }

for(let r = 1; r <= 5; r++){
    for(let c = 1; c <=5; c++){
        if(r == c || r + c == 6){
            document.write('*')
        }
        else{
            document.write('&nbsp&nbsp')
        }
    }
    document.write('<br>')
}