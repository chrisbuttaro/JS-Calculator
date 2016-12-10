
// Minimum Requirements
// [ ]: The calculator has a screen which displays numbers input by the user, or a summed total based on mathematical operations
// [ ]: The calculator has buttons (0-9, +, -, /, *, ., =, C)
// [ ]: The calculator can perform the following operations (i.e. is a working calculator:
// addition
// subtraction
// division
// multiplication
// [ ]: The 'C' button clears the running total/entered value (works like a clear button).
// [ ]: = returns the sum of the current operation
// [ ]: All calculator buttons are assigned click events which result in some action being performed (be it updating the displayed value, or performing math)
// Stretch Goals
// [ ]: Handles decimals
// [ ]: Users can enter values/perform math with keyboard input (keypress)

var $textArea = $('<input>');
$('body').append($textArea);
displayString="";

makeButtons=function(){ //append button elements to body
textArray=[9,8,'C',7,6,5,4,'*',3,2,1,'/',0,'+','-','.'];
  for (var i=0; i<textArray.length; i++){//lay the buttons out in rows of 4
    if(i%4===0){
      var br=$('<br>');
      $('body').append(br);
    }
    var $numButton=$('<button>');
    $numButton.addClass('displayButton');
    $numButton.text(textArray[i]);
    $numButton.attr('id', i);
    $('body').append($numButton);

  }//end for

var $equalsButton = $('<button>');
  $equalsButton.text("=");
  $equalsButton.addClass('opButton');
 $($equalsButton).insertAfter($equalsButton);

 var $clearButton = $('<button>');
   $clearButton.text("C");
   $clearButton.addClass('opButton');
  //$($clearButton).insertAfter('#7');

  var buttons=$('.displayButton');
  buttons.each(function(){
  $(this).click(function(e){//on click add button html to displayString and display in textArea
      displayString += $(this).html();
      $textArea.val(displayString);
    });//end click()
   });//end each()

}//end makeButtons




makeButtons();
