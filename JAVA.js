var response = " ";

function hash(str)
{ 
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32bit integer
    }
    return new Uint32Array([hash])[0].toString(36);
}

function CheckAnswer(actualAns, questionNum) //questionNum is a string, actualAns is hash
{
let attemptedAns = hash(document.getElementById("Ans"+questionNum).textContent); //gets hash of answer attempted

if (attemptedAns == actualAns){response="CORRECT!!";}
else{response="no...";}

document.getElementById("response"+questionNum).innerHTML=response;  //<- writes response
}




