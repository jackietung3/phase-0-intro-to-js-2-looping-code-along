function writeCards(names, event) {
    let i = 0;
    const arrOfMessages = []
    while (i < names.length){
     arrOfMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
     i++;
   }
  return arrOfMessages
}

function countDown(number) {
    let i = number; 
    while (i>=0) {
        console.log (i--)
    }
}