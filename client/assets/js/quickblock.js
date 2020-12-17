$('.quizbutton').hide();

$( ".quiz-answer" ).click(function() {
  $( this ).toggleClass( "active" );  
  if ($(".quiz-answer.active").length > 0) {
    $('.quizbutton').show();
  }

  else {
    $('.quizbutton').hide();
  }

});