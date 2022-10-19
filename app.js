const phraseList = ["Happiness","Indulgence","Gravity","Genius","Discover","Memorable","Extraordinary","Beautiful","Undeniable","Hack","Breathtaking","Unforgettable","Latest","Dazzling"];

let phrase = "";
let lives = "";
let key = "";
let phraseSplit = "";

$( document ).ready(function() {
$('#overlay.lose, #overlay.win').hide();
});


$('#start-btn, #restart-btn-win, #restart-btn-lose').click((event) => { // Listens for click functionon start button and calls getPhrase and displays the phrase
  lives = 5;
  // console.log('click');
  $('ul').empty();
  $('button.chosen').removeClass('chosen');
  $('#overlay.lose, #overlay.win, #overlay.start').hide();
  $('#banner, #phrase, #qwerty, #scoreboard').css('display','initial');
  $('li.tries img').attr('src', 'images/liveHeart.png');

  let phraseSplit = getPhrase();
  key = phrase.replace(/ /g,'');
  string = phraseSplit;
  stringArray = new Array();
    for(var i =0; i < string.length; i++){
        stringArray.push(string[i]);
    if(string[i] == " "){
      $('#phrase ul').append('<li class="space"></li>');
    } else {
      // stringArray.push(" ");
      $('#phrase ul').append('<li class="letter ' + [i] + '">*</li>');
      // $("'letter '" + [i] + "'").val("'" + string[i] + "'")

    }
  }
  console.log(phraseSplit);
});








let getPhrase = () => { //Gets a randomphrase from phrase list
  phrase = phraseList[Math.floor((Math.random() * 9) + 1)];
  // console.log(Math.floor((Math.random() * 9) + 1));
  let phraseSplit = phrase.split('');
  return phraseSplit;
  phraseSplit == phraseSplit;
}

$('#qwerty button').click(function(event) {
  checkLetter($(this).text());
  $(this).addClass('chosen');
  // console.log(stringArray);
   if (lives == 0){
    $('.lose').show();
    $('ul').empty();
    $('button').removeClass('chosen');
  }
  if ($('li.correct').length == stringArray.length) {
    // console.log("you win");
    $('.win').show();
    $('ul').empty();
  }

});

    // compare letter to phrase



let checkLetter = (letter) => { //Check if letter is in phrase and show on board
  const correct = [];
  let idx = stringArray.map(stringArray => stringArray.toLowerCase());
    idx = idx.indexOf(letter);
    if (idx === -1) {
      // console.log('wrong');
      let tries = $('li.tries img');
      let arrayNum = lives -1;
  // console.log(tries[lives - 1]);
      $(tries[arrayNum]).attr('src', 'images/lostHeart.png');
      lives = lives - 1;
    }
    while (idx !== -1) {
      correct.push(idx);
      for(var i =0; i < correct.length; i++){
        let selector = "." + correct[i];
        $(selector).addClass('show correct animate__animated animate__tada').html(letter);


      }idx = stringArray.indexOf(letter, idx + 1);

    }

}
