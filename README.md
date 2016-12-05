# tic-tac-toe


#How to Play:

var game = new TicTacToe();

Player1 goes first by default

Enter your coordinates that you would like your move to go to, board is 3x3 Array

game.turns([x,x]);

Player2 is after Player1, the console will tell you whos turn is next

The game will show you the board on each turn and automatically detect a winner

#Example Board:

[#,#,#],
[#,#,#],
[#,#,#]

game.turns([0,1]);

[#,X,#],
[#,#,#],
[#,#,#]

game.turns([2,1]);

[#,X,#],
[#,#,#],
[#,O,#]
