$(function() {
  var fields = $( '.field' ), currentPlayer = 1, playersScore = [0, 0];

  var reset = function() {
    playersScore = [0, 0];
    fields.html('');
  }

  fields.on("click", function(event) {
    if(currentPlayer == 1)
      $(this).html('X');
    else
      $(this).html('O');

    var value = parseInt($(this).attr('id'));
    playersScore[currentPlayer] += value;
    checkWinner(playersScore[currentPlayer]);
    changePlayer();
  })

  var changePlayer = function() {
    if (currentPlayer == 1)
      currentPlayer = 0;
    else
      currentPlayer = 1;
  }

  var checkWinner = function(score) {
    if(winning(score)){
      alert("Player " + currentPlayer + " won!");
      reset();
    }
  }

  var winning = function(score) {
    var winningValues = [7, 56, 448, 73, 146, 292, 273, 84];
    for (var i in winningValues)
      if ((score & winningValues[i]) === winningValues[i])
        return true;
    return false;
  }
})
