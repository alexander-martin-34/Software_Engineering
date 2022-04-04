let numbers = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'
];
let values = [1,2,3,4,5,6];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let rollButton = document.getElementById('roll-button');
let rollSpace1 = document.getElementById('roll_1');
let rollSpace2 = document.getElementById('roll_2');
let win = false;
rollButton.style.display = 'none';

let gameStart = false,
  gameOver = false,
  roll1 = 0,
  roll2 = 0,
  rollTotal = 0;
  rolls = [],
  cash = 100;
  bet = 10;
  playerScore = 0;

  newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    newGameButton.style.display = 'none';
    rollButton.style.display = 'inline';
  });


  rollButton.addEventListener('click', function(){
    if (cash <= 0) {
        if (confirm("You are out of cash.  Would you like to visit an ATM? \nPress ok to withdraw 100 more dollars and roll again!")) {
            alert("Good luck! I'm sure you can beat the house edge this time!");
            cash+=100;
        } else {
            alert("Perhaps you would enjoy a game with higher stakes?");
            location.href = 'http://casinoboko.com/phaser_demo/index.html';
        }
    }
    rollDice();
    showStatus();

  });

  function showStatus() {
    console.log("You rolled a " + roll1 + "and a " + roll2 + "\n");
    let amount_won = 0;
    if(!gameStarted)
    {
      textArea.innerText = 'Welcome to Simplified Craps!';
    }
    else {
        let total = roll1 + roll2;
        let resultMsg = '';
        if (total < 5 || total > 9 ) { 
            win = true; 
            if (total == 2) {
                amount_won = bet*3;
                cash += bet*3;
            }
            else if (total == 3 || total == 4)
            {
                amount_won = bet;
                cash += bet;
            }
            else if (total == 10 || total == 11) {
                amount_won = bet*2;
                cash += bet*2;
            }
            else if (total == 12) {
                amount_won = bet*5;
                cash += bet*5;
            }
            resultMsg = 'You Win ';
        }
        else {
            win = false; 
            resultMsg = 'You lost ';
            cash -= bet;
            amount_won = bet;
        }
  
        if (win === true) {
        textArea.innerText = 'You rolled : ' + roll1 + ' and ' + roll2 + '\n' + 'Total is : ' + (total) + ' ' + resultMsg + ' ' + amount_won + ' dollars!   You have ' + cash + ' dollars remaining.';
        }
        else {
            textArea.innerText = 'You rolled : ' + roll1 + ' and ' + roll2 + '\n' + 'Total is : ' + (total) + ' ' + resultMsg + ' ' + amount_won + ' dollars!   You have ' + cash + ' dollars remaining.';
        }
   }
    return;
  }

  function rollDice() {
       console.log("Rolling\n");
       roll1 = Math.floor(Math.random() * (6 - 1)) + 1;
       roll2 = Math.floor(Math.random() * (6 - 1)) + 1;
       console.log("Roll1: " + roll1);
       console.log("Roll2: " + roll2);
       if (rollTotal == 0) {
       const img = new Image(200, 200); // width, height
       img.src = getDieImage(roll1);
       img.id = "img1";
       document.getElementById("roll_1").appendChild(img);
       const img2 = new Image(200, 200); // width, height
       img2.src = getDieImage(roll2);
       img2.id = "img2";
       document.getElementById("roll_2").appendChild(img2);
       }
       else {
        const img = new Image(200, 200); // width, height
        img.src = getDieImage(roll1);
        img.id = "img1";
        //document.getElementById('roll_1').removeChild()
        rollSpace1.removeChild(rollSpace1.childNodes[0]);
        document.getElementById("roll_1").appendChild(img);
        const img2 = new Image(200, 200); // width, height
        img2.src = getDieImage(roll2);
        img2.id = "img2";
        //document.getElementById("roll_2").appendChild(img2);
        rollSpace2.removeChild(rollSpace2.childNodes[0]);
        document.getElementById("roll_2").appendChild(img2);
       }
       rollTotal++;
  }

  function getDieImage(number) {
      let dieImage = '';

      if (number == 1) {
        dieImage = '../assets/dice/dieWhite1.png';
      }
      if (number == 2) {
        dieImage = '../assets/dice/dieWhite2.png';
      }
      if (number == 3) {
        dieImage = '../assets/dice/dieWhite3.png';
      }
      if (number == 4) {
        dieImage = '../assets/dice/dieWhite4.png';
      }
      if (number == 5) {
        dieImage = '../assets/dice/dieWhite5.png';
      }
      if (number == 6) {
        dieImage = '../assets/dice/dieWhite6.png';
      }
      return dieImage;
  }