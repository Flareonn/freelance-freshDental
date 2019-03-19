$(document).on('keydown', function(e) {
  if (e.which === 27) {
    $('.popup').hide();
  }
})

$('.popupOpen').on("click", function(){
  $('.popup').show();
})