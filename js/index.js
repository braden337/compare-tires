// Author: @braden337



  /* --------- */
 /* Variables */
/* --------- */

var idName = ["#width", "#height", "#diameter"];
var originalField = ["#width", "#height", "#diameter", "#width2", "#height2", "#diameter2"];
var field = ["#width", "#height", "#diameter", "#width2", "#height2", "#diameter2"];
var position = 0;
var numCompared = 2;


  /* ------ */
 /* Events */
/* ------ */

/* on keyup in fields, do stuff */
$("form").on("keyup", "input[type=tel]", function(){
  var length = $(this).val().length;
  var max = $(this).attr("maxlength");
  var lastField = field.length-1;
  
  if (length == max && position < lastField) {
    position += 1;
    $(field[position]).focus(); //.trigger('touchstart');
  }

  if (length == max && position == lastField) {
    $(this).blur(); // $("button#reset").focus();
  }

  var lastDiameter = $("#diameter" + numCompared);

  if (lastDiameter.val() != "" && lastDiameter.val().length == lastDiameter.attr("maxlength")) {
    enableAdd();
  }

  if (lastDiameter.val() == "") {
    disableAdd();
  } 
});


/* on touch of fields, focus */
$('form').on('touchstart', "input[type=tel]", function () {
    $(this).focus(); // $(field[position]).focus();
});

/* on focus of fields, clear the field and
   set the the position to the index of  */
$("form").on("focus", "input[type=tel]", function(){
  $(this).val('');
  var currentField = field.indexOf("#" + $(this).attr('id'));
  position = currentField;
});

/* on click of reset button, remove all fields
   except 2, and other stuff */
$("#controls").on("click", "#reset", function(){
  $('form').empty();
  addFields(generateFields(""));
  addFields(generateFields(2));
  field = originalField;//["#width", "#height", "#diameter", "#width2", "#height2", "#diameter2"];
  numCompared = 2;
  $(field[0]).focus();
  disableAdd();
});

/* on click of add tire button, insert a set of
   3 fields in the end of the form tag */
$("#controls").on("click", "#addTire", function(){
  numCompared+=1;

  for(i=0; i< 3; i++) {
    field.push(idName[i] + numCompared);
  }

  //console.log(field.length);
  addFields(generateFields(numCompared));

  disableAdd()

  if ($("#diameter2").val() != "") {
    $("#width" + numCompared).focus();
  }
});


  /* --------- */
 /* Functions */
/* --------- */

function generateFields(num) {
  return "<div class=\"form-group col-lg-2 col-lg-offset-3 col-xs-4\"><label for=\"width" + num + "\">Width:</label><input type=\"tel\" class=\"form-control\" id=\"width" + num + "\" maxlength=\"3\" /></div><div class=\"form-group col-lg-2 col-xs-4\"><label for=\"height" + num + "\">Ratio:</label><input type=\"tel\" class=\"form-control\" id=\"height" + num + "\" maxlength=\"2\" /></div><div class=\"form-group col-lg-2 col-xs-4\"><label for=\"diameter" + num + "\">Diameter:</label><input type=\"tel\" class=\"form-control\" id=\"diameter" + num + "\" maxlength=\"2\" /></div>";
}

function addFields(input) {
  $("form").append(input);
}

function disableAdd() {
  $("#addTire").attr('disabled', true);
}

function enableAdd() {
  $("#addTire").attr('disabled', false);
}