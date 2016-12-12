
var displayString=""; //holds the vaules entered by the user i.e. 1+1
fireEQ=function(){$textArea.val('');//called by equals button and equals key
$textArea.val(eval(displayString));//evaulates & dispalys displayString;
displayString=eval(displayString);//overwrites displayString with the evaluated value
}
fireClear=function(){displayString='';//clears running total, called by clear button and C key
$textArea.val('');//clears text area
}

$('body').keydown(function(e){//listens for numeric and operator keystrokes
  if(e.which<58 && e.which>47 || e.key==='/' || e.key==='+'|| e.key==='*'){
    displayString+=e.key;
    $textArea.val(displayString);
  }else if(e.key==='='){
    fireEQ();
  }else if(e.key==='c'){
    fireClear();
  }
});

var $marioLogo=$('<a href="http://fontmeme.com/super-mario-font/"><img src="http://fontmeme.com/permalink/161211/eb8a02faf3f35e2208897dced3a95c3e.png" alt="super-mario-font" border="0"></a>');
$('body').append($marioLogo);
var $textArea = $('<input>');//creates a display area
$('body').append('<br>');
$('body').append('<br>');
$('body').append('<br>');
$('body').append($textArea);

makeButtons=function(){ //creates & appends button elements to body
textArray=[9,8,7,'%',6,5,4,'*',3,2,1,'/',0,'+','-','.','(',')'];
  for (var i=0; i<textArray.length; i++){//lays the buttons out in rows of 4
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
    var audio = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_pipe.wav" ) ;
    audio.play();
    fireEQ();
  })
     $('body').append($equalsButton);

 var $clearButton = $('<button>');
   $clearButton.text('C');
   $clearButton.addClass('cButton');
   $clearButton.click(function(e){
     http://themushroomkingdom.net/sounds/wav/smb/smb_kick.wav
     var audio = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_kick.wav");

     audio.play();
     fireClear();
   });
   $('body').append($clearButton);


  var buttons=$('.displayButton');
  buttons.each(function(){
  $(this).click(function(e){//on click add display button html to displayString and display in textArea

var audio = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_stomp.wav" ) ;
audio.play();
      displayString += $(this).html();
      $textArea.val(displayString);
    });//end click()
   });//end each()

}//end makeButtons

makeButtons();
