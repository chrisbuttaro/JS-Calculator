console.log("in JS");
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

var $button = $('<button>');
$('body').append($button);
