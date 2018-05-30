
// Tracery story grammar
const storyBook = {
  adv: ['undeniably','indescribably','marginally','unexpectedly','crazily','weirdly',
        'unfortunately','unsurprisingly'],  
  adj: ['large','big','lengthy','prickly','sexy','corrupt','addicting','kickass','horrifying',
        'gorgeous','beautiful','comfortable','miniature','obedient','salty','spicy'],
  subject: ['a gorilla','a zookeeper','a male model','a circus person','my dad\'s lawyer',
            'a mouse','my atheist neighbor','lemonade','vodka','the Church','the molecule',
            'The President','Zack Efron','Tom Cruz','Daffy Duck','The Queen','Earth',
            'your mom','a Badly Burnt Albanian Boy','Albie the Racist Dragon','grilled corn'],
  story: ['Who knew #subject# could be so #adv# #adj#!?',
          'I\'ve heard that #subject# is #adv# #adj#.',
          '#adj.capitalize#, #adj#, and #adj# are 3 words I\'d use to describe #subject#.'],
};

$(() => {
  // Generate grammar once on page load
  const grammer = tracery.createGrammar(storyBook);

  // When the #generate button is clicked, set the text in #output to a randomized
  // output of the grammer
  const $output = $('#output');
  $('#generate').click(() => {
    $output.text(grammer.flatten('#story#'));
  });
});
