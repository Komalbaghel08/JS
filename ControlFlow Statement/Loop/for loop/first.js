for(let b = 20; b>1;b--){
    console.log(b);
}

// WAP to pint sq. of even number 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) { 
    console.log(i**2)
  }
}

// #####
for(let a=1; a<=5; a++){
  document.write("#")
}


// *****
// *****
// *****
// *****
// *****
for(let a=1; a<=6; a++){
  for(let b = 1; b<=5; b++){
    document.write( "*")
  }
  document.write("<br>")
}


// *****
// *   *
// *   *
// *   *
// *****
for(let r=1; r<=5; r++){
  for(let c = 1; c<=5; c++){
      if(r==1||r==5||c==1||c==5){
        document.write("*")
      }
      else{
        document.write('&nbsp&nbsp')
      }
  }
  document.write("<br>")
}