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
    if(this.turn === this.player1) {

    } else {

    }
  }
}

var game = new TicTacToe();
game.turns([0,2]);
