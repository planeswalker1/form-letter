$('form#form').submit(function(event) {
  event.preventDefault();
  let yourNameInput = $('input#yourName').val();
  $('span.yourName').text(yourNameInput);
  $('div#letter').fadeIn();
});

$('input').focus(function() {
  $('div#letter').fadeOut();
});
