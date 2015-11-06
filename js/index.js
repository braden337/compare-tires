/* Variables */

var field = ["#width", "#height", "#diameter"];
var position = 0;

/* Events */

$("input[type=tel]").on("keyup", function(){
  var length = $(this).val().length;
  var max = $(this).attr("maxlength");
  var lastField = field.length-1;
  
  if(length == max && position < lastField) {
    position += 1;
    $(field[position]).focus();
  }
  else if (length == max && position == lastField) {
    $(this).blur();
    $("button#reset").focus();
  }
});

$('input[type=tel]').on('touchstart', function () {
    $(field[position]).focus();
});


// This clears the input on focus and sets the position variable to the index of the current field that's focused
$("input[type=tel]").on("focus", function(){
  $(this).val('');
  var currentField = field.indexOf("#" + $(this).attr('id'));
  position = currentField;
});

//clears the input when you click
$("input[type=tel]").on("click", function(){
  $(this).val('');
});

$("button#reset").click(function(){
  $("input[type=tel]").val('');
  $(field[0]).focus();
  $("#reset").blur();
});

$("form").submit(function(event){
  event.preventDefault();
});