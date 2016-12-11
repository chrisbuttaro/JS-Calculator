
// Minimum Requirements



// [ ]: The 'C' button clears the running total/entered value (works like a clear button).
// [ ]: = returns the sum of the current operation
// [ ]: All calculator buttons are assigned click events which result in some action being performed (be it updating the displayed value, or performing math)
// Stretch Goals
// [ ]: Handles decimals
// [ ]: Users can enter values/perform math with keyboard input (keypress)

displayString="";
fireEQ=function(){$textArea.val('');
$textArea.val(eval(displayString));
displayString=eval(displayString).toString();
}
fireClear=function(){displayString='';
$textArea.val('');
}

$('body').keydown(function(e){
  console.log(e.which);
  if(e.which<58 && e.which>47 || e.key==='/' || e.key==='+'|| e.key==='*'){
    displayString+=e.key;
    $textArea.val(displayString);
  }else if(e.key==='='){
    fireEQ();
  }else if(e.key==='c'){
    fireClear();
  }
});

var $textArea = $('<input>');
$('body').append($textArea);

makeButtons=function(){ //append button elements to body
textArray=[9,8,7,'%',6,5,4,'*',3,2,1,'/',0,'+','-','.','(',')'];
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
  $equalsButton.text('=');
  $equalsButton.addClass('eqButton');
  $equalsButton.click(function(e){
    fireEQ();
  })
     $('body').append($equalsButton);

 var $clearButton = $('<button>');
   $clearButton.text('C');
   $clearButton.addClass('cButton');
   $clearButton.click(function(e){
     fireClear();
   });
   $('body').append($clearButton);
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
