/* Variables */

var types = ["#width", "#height", "#diameter"];
var field = ["#width", "#height", "#diameter", "#width2", "#height2", "#diameter2"];
var position = 0;
var numCompared = 2;

/* Events */

$("input[type=tel]").on("keyup", function(){
  var length = $(this).val().length;
  var max = $(this).attr("maxlength");
  var lastField = field.length-1;
  console.log("lastField " + lastField + " position " + position);
  
  if(length == max && position < lastField) {
    position += 1;
    $(field[position]).trigger('touchstart');
  }
  if (length == max && position == lastField) {
    $(this).blur();
    // $("button#reset").focus();
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

$("button#addTire").click(function(){
  numCompared+=1;

  for(i=0; i< 3; i++) {
    field.push(types[i] + numCompared);
  }

  console.log(field.length);
  $(".form-group:nth-last-of-type(2)").after(generateFields(numCompared));
});

$("form").submit(function(event){
  event.preventDefault();
});


function generateFields(num) {
  return "<div class=\"form-group col-lg-2 col-lg-offset-3 col-xs-4\"><label for=\"width" + num + "\">Width:</label><input type=\"tel\" class=\"form-control\" id=\"width" + num + "\" maxlength=\"3\" /></div><div class=\"form-group col-lg-2 col-xs-4\"><label for=\"height" + num + "\">Ratio:</label><input type=\"tel\" class=\"form-control\" id=\"height" + num + "\" maxlength=\"2\" /></div><div class=\"form-group col-lg-2 col-xs-4\"><label for=\"diameter" + num + "\">Diameter:</label><input type=\"tel\" class=\"form-control\" id=\"diameter" + num + "\" maxlength=\"2\" /></div>";
}




// $(".form-group:nth-last-of-type(2)")












