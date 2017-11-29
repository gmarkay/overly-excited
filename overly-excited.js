// Create an array that contains the words in the sentence
let sentence = [
  'The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'
];
let sent =' ';
let bang =''
function addExcitement(array) {
  for (let i = 0; i < array.length; i++) {

    // console.log(i)
    if ((i+1) % 3 === 0 ){
      array[i] += bang;
      let exp = parseInt(i/3);
      bang+='!'
    }
    
    // console.log(i % (array.length));
    sent +=' '+ array[i]
    console.log(sent);
  
  }

}

addExcitement(sentence)