var TicTacToe = function() {
  this.player1 = 'player1';
  this.player2 = 'player2';
  this.board = [['#','#','#'],
                ['#','#','#'],
                ['#','#','#']]
  this.turn = this.player1;
}

TicTacToe.prototype = {
  turns: function(turn) {
    if(this.turn === this.player1) {
      var row = this.board[turn[0]];
      row[turn[1]] = 'X';
      console.log(this.board, 'Your turn Player2');
      this.turn = this.player2;
    } else {
      var row = this.board[turn[0]];
      row[turn[1]] = 'O';
      console.log(this.board, 'Your turn Player1');
      this.turn = this.player1;
    }
  },
  boardChecker: function() {
    var xo = [];
    var winChecker = [];
    var player;
    var char;
    if(this.turn === this.player1) {
      player = this.player1;
      char = 'X';
    } else {
      player = this.player2;
      char = 'O';
    }
    for(var i = 0; i < this.board.length; i++) {
      for(var j = 0; j < this.board[i].length; j++) {
        if(this.board[i][j] === char) {
          xo.push([i,j]);
        }
      }
    }
    console.log('xo ', xo);
    for(var k = 0; k < xo.length; k++) {
      if(xo.length < 3) {
        console.log('No winner yet');
      } else {
        if(winChecker.length === 0) {
          winChecker.push(xo[k][0]);
        } else if(xo[k][0] === winChecker[0]) {
          winChecker.push(xo[k][0]);
          if(winChecker.length === 3) {
            console.log('Winner! ', this.turn);
          }
        } else if(xo[i][0] === (winChecker[0] + 1)) {
          winChecker.push(xo[k][0]);
          if(winChecker.length === 3) {
            console.log('Winner! ', this.turn);
          }
        }
      }
    }
  }
}

var game = new TicTacToe();
game.turns([0,2]);
game.turns([1,2]);
game.turns([0,1]);
game.turns([2,0]);
game.turns([0,0]);
game.turns([1,1]);
game.boardChecker();
