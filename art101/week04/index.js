
var collectionId = '1494900';
var collectionSize = 572;
var catFacts = [
  'If house cats were bigger, they could kill us.',
  'Cats can retract their claws',
  'Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.',
  'When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.',
  'The technical term for a cat’s hairball is a “bezoar.”',
  'A group of cats is called a “clowder.”',
  'A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.',
  'Cats make about 100 different sounds. Dogs make only about 10.',
  'Every year, nearly four million cats are eaten in Asia.',
  'There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.',
  'On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.',
  'The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called “ear furnishings.”',
];

// Return html for an image of a cat
function randomCatImageElement() {
  // Adding a random value to the query parameter `sig` ensures 
  // that we receive a random image from the collection
  var randomId = Math.floor(Math.random() * collectionSize);
  return '<img src="https://source.unsplash.com/collection/' + collectionId + '/800x600?sig=' + randomId + '"/>';
}

// Return a random cat fact
function randomCatFact() {
  var randomIndex = Math.floor(Math.random() * catFacts.length);
  return 'Cat Fact #' + (randomIndex + 1) + ': ' + catFacts[randomIndex];
}

function main() {
  document.getElementById('js-output').innerHTML = randomCatFact() + '<br/><br/>' + randomCatImageElement();
}
