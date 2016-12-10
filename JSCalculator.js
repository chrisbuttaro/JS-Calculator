
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



makeButtons=function(){
  for (var i=9; i>-1; i--){
    if(i%3===0){
      var br=$('<br>');
      $('body').append(br);
    }
    var $numButton = $('<button>');
    $numButton.addClass('numButton');
    $numButton.text(i);
    $numButton.attr('id', i);
    $('body').append($numButton);
  }

var $plusButton = $('<button>');
$plusButton.text("+");
$($plusButton).insertAfter('#0');

var $minusButton = $('<button>');
  $minusButton.text("-");
$($minusButton).insertAfter($plusButton);

var $equalsButton = $('<button>');
  $equalsButton.text("=");
 $($equalsButton).insertAfter($minusButton);

var $divideButton = $('<button>');
  $divideButton.text("/");
 $($divideButton).insertAfter('#1');

var $multButton = $('<button>');
  $multButton.text("*");
 $($multButton).insertAfter('#4');

 var $clearButton = $('<button>');
   $clearButton.text("C");
  $($clearButton).insertAfter('#7');

}

var $textArea = $('<input>');
$textArea.val('hello');
$('body').append($textArea);

makeButtons();
