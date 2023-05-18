const firstWord = prompt("Enter the first word: ");
const secondWord = prompt("Enter the second word: ");

// Create the <p> elements for user score, computer score, and score comparison
const firstWordParagraph = document.createElement('p');
firstWordParagraph.id = 'first-word';
const secondWordParagraph = document.createElement('p');
secondWordParagraph.id = 'second-word';

// Get the square container div
const square = document.querySelector('.square');

// Append the <p> elements to the container
square.appendChild(firstWordParagraph);
square.appendChild(secondWordParagraph);

if (firstWord.length > secondWord.length) 
{
    console.log('First we print: ' + secondWord);
    console.log('Then we print: ' + firstWord);
    // Set the text content of the <p> elements
    firstWordParagraph.textContent = 'First we print: ' + secondWord;
    secondWordParagraph.textContent = 'Then we print: ' + firstWord;

} 
else if (firstWord.length < secondWord.length) 
{
    console.log('First we print: ' + firstWord);
    console.log('Then we print: ' + secondWord);
    // Set the text content of the <p> elements
    firstWordParagraph.textContent = 'First we print: ' + firstWord;
    secondWordParagraph.textContent = 'Then we print: ' + secondWord;
} 
else if (firstWord.length === secondWord.length) 
{
    console.log(`${firstWord} and ${secondWord} are the same length, so we print them at the same time`);
    // Set the text content of the <p> elements
    firstWordParagraph.textContent = firstWord + ' and ' + secondWord + ' are the same length, so we print them at the same time';
}



