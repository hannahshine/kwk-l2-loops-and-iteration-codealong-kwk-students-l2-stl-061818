// Code your solutions in this file
// let countdown = 10;
//     while (countdown>0){
//       console.log(--countdown)
//     }
    

function tailsNeverFails(){
  let tails=0;
  
  while (Math.random()>=0.5){
    tails++
  }
  console.log( `You got ${tails} tails in a row!`);
}

tailsNeverFails()