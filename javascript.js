$(function() {
  var fields = $( '.field' ), currentPlayer = 0, playersScore = [0, 0], playersSigns = ['X', 'O'], moves = 0;

  $('td').each(function(index) {
    this.value = Math.pow(2, index);
  })

  fields.click(function(event) {
    if($(this).html() !== "")
      return;

    $(this).html(playersSigns[currentPlayer]);

    playersScore[currentPlayer] += this.value;
    if(!checkWinner(playersScore[currentPlayer]))
      nextMove();
    changePlayer();
  })

  var checkWinner = function(score) {
    if(winning(score)){
      var player = playersSigns[currentPlayer];
      alert("Player " + player + " won!");
      reset();
      return true;
    }
  }

  var nextMove = function() {
    if((++moves) == 9){
      alert("Tie!");
      reset();
    }
  }

  var changePlayer = function() {
    currentPlayer = Number(!currentPlayer);
  }

  var reset = function() {
    playersScore = [0, 0];
    fields.html('');
    moves = 0;
  }

  var winning = function(score) {
    var winningValues = [7, 56, 448, 73, 146, 292, 273, 84];
    return winningValues.find(function(value) {
      return (score & value) === value;
    })
  }
})
