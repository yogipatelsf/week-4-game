 // var randomNumber = numberList[Math.floor(Math.random() * 36)];

 // $(".letter-button").on("click", function() {
 //        var fridgeMagnet = $("<div>");
 //        fridgeMagnet.addClass('letter fridge-color')
 //        fridgeMagnet.text($(this).attr("data-letter"));
 //        $("#display").append(fridgeMagnet);
 //      });



 // // Here we created an on-click event that responds to button clicks of the crystal image.
 //  $(".crystal-image").on("click", function() {

 //    // Clicking the button triggers an alert message.
 //    alert("You clicked a crystal!");

 //  });

  $(document).ready(function(){    

//Global variables
    var totalWins = 1;
    var totalLosses = 1;
    var crystalOne = Math.floor(Math.random()*12) + 1;
    var crystalTwo = Math.floor(Math.random()*12) + 1;
    var crystalThree = Math.floor(Math.random()*12) + 1;
    var crystalFour = Math.floor(Math.random()*12) + 1;
    var total = 0;
    var isClicked = false;
    var userTotal = $('#actual')


//Random number generator
     var randomNumber = Math.floor(Math.random() * 120) + 19;
     $('#target').html(randomNumber);
    
    //Blue
    $('#crystal1').on("click", function(){
        isClicked = true;
          total += crystalOne
          userTotal.html(total);

         console.log('userTotal', userTotal.text());
          checkGame();

    });
        console.log(crystalOne);
    
    //Green
    $('#crystal2').on("click", function(){
        isClicked = true;
        total += crystalTwo
        userTotal.html(total);
        checkGame();
    });    
        console.log(crystalTwo);
    
    //Light blue
    $('#crystal3').on("click", function(){
          isClicked = true;
          total += crystalThree
          userTotal.html(total);
          checkGame();
    });
        console.log(crystalThree);
    
    //Yellow
    $('#crystal4').on("click", function(){
          isClicked = true;
          total += crystalFour
          userTotal.html(total);
        checkGame();
    });
        console.log(crystalFour);

var checkGame = function (){
    if (total == randomNumber) {
        alert("You win!");
        $('#wins').html(numberWins++);
        resetGame();
        $('#actual').empty();

    } else if (total > randomNumber){
        alert("You suck!");
        $('#losses').html(numberLosses++);
        resetGame();
        $('#actual').empty();
    }
}

var resetGame = function (){
    alert("Try Again!");
    //Global variables
    totalWins;
    totalLosses;
    crystalFour = Math.floor(Math.random()*12) + 1;
    crystalTwo = Math.floor(Math.random()*12) + 1;
    crystalThree = Math.floor(Math.random()*12) + 1;
    crystalFour = Math.floor(Math.random()*12) + 1;
    total = 0;
    isClicked = false;
    userTotal = $('#actual')


//Random number generator for new game
     randomNumber = Math.floor(Math.random() * 120) + 19;
     $('#target').html(randomNumber);
}

});

  