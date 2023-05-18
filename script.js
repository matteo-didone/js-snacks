const firstWord = prompt("Enter the first word: ");
const secondWord = prompt("Enter the second word: ");


if (firstWord.length > secondWord.length) 
{
    console.log('First we print: ' + secondWord);
    console.log('Then we print: ' + firstWord);
} 
else if (firstWord.length < secondWord.length) 
{
    console.log('First we print: ' + firstWord);
    console.log('Then we print: ' + secondWord);
} 
else if (firstWord.length === secondWord.length) 
{
    console.log(`${firstWord} and ${secondWord} are the same length, so we print them at the same time`);
}



