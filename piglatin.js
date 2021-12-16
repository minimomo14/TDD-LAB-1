const translate = (wordInput) => {
    wordInput = wordInput.toLowerCase();
    let vowels = ["a","e","i","o","u"]
    let newWord = "";
        //for (let i = 0; i < vowels.length; i++) {
        if (vowels.indexOf(wordInput[0]) > -1) {
        newWord = wordInput + "way";
        //break;
        } else {
            let firstMatch = wordInput.match(/[aeiou]/g) || 0; 
            let vowel = wordInput.indexOf(firstMatch[0]);
            newWord = wordInput.substring(vowel) + wordInput.substring(0, vowel) + "ay";
            
        }
     return newWord ;
}
    //console.log(translate("Apple"));
    //console.log(translate("Easy"));
    //console.log(translate("Hello"));
    //console.log(translate("Fruit"));
  

module.exports = translate;