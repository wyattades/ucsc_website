
const storyBook = {
  adv: ['undeniably','indescribably','marginally','unexpectedly','crazily','weirdly','unfortunately','unsurprisingly'],  
  adj: ['large','big','lengthy','purple','sexy','corrupt','addicting','kickass','horrifying','gorgeous','beautiful','comfortable','miniature','obedient','salty','spicy'],
  plural: ['gorillas','zookeepers','male models','circus people','candy wrappers','lawyers','mice','Atheists','mouse traps','lemonade','vodka','churches','molecules'],
  singular: ['The President','Zack Effron','Tom Brady','Daffy Duck','The Queen','Earth','your mom','A Badly Burnt Albanian Boy',],
  _subject: ['#singular#','#plural#'],
  accels: ['sucks at','excels at'],
  action: ['yoga','elephant parades','pull-ups'],
  layout: ['Who knew #subject# could be so #adv# #adj#!?'],
  story: ['#[subject:#_subject#]layout#'],
};

$(() => {
  const grammer = tracery.createGrammar(storyBook);

  const $output = $('#output');
  $('#generate').click(() => {
    $output.text(grammer.flatten('#story#'));
  });
});
