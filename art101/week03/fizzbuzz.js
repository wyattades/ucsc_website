// Loop over i in range [1, 200]
for (var i = 1; i < 200; i++) {

  // Define empty output string
  var output = '';

  // Append 'Fizz', 'Buzz', and 'Boom' to `output` if 
  // `i` is a multiple of 3, 5, and 7 respectively
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  if (i % 7 === 0) output += 'Boom';

  // If `output` is empty, set it to the loop index
  if (!output) output = i;
  // If `output` is not blank, append a '!'
  else output += '!';

  // Write a paragraph containg `output` to the current position in the document
  document.write('<p>' + output + '</p>');
}
