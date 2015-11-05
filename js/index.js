var field = [$("#width"), $("#height"), $("#diameter")];
var focused = field[0]; //this is just to have a starting point
var position = 0;

//$(".output").html("");

$("input").on("keyup", function(){
  var length = $(this).val().length;
  //$(".output").html(length);
  if(length == 3) {
    position += 1;
    field[position].trigger('touchstart');
    
  }
});

$('input').on('touchstart', function () {
    field[position].focus();
    field[position].select();
});

field[0].on("focus", function(){
  position = 0;
});

$("input").on("focus", function(){
  // $(this).select();
  $(this).val('');
});

$("button").click(function(){
  $('input').val('');
  field[0].focus();
});