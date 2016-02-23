$(function() {
  var fields = $( '.field' ), currentPlayer = 1, playersScore = [0, 0], played = 0;

  var start = function() {
    var value = 1;
    $('td').each(function() {
      this.value = value;
      value *= 2;
    })
  }
  start();

  fields.on("click", function(event) {
    if($(this).html() !== "")
      return;

    if(currentPlayer == 1)
      $(this).html('X');
    else
      $(this).html('O');

    playersScore[currentPlayer] += this.value;
    checkWinner(playersScore[currentPlayer]);
    changePlayer();
  })

  var checkWinner = function(score) {
    if(winning(score)){
      alert("Player " + currentPlayer + " won!");
      reset();
    }
  }

  var changePlayer = function() {
    currentPlayer = Number(!currentPlayer);
  }

  var reset = function() {
    playersScore = [0, 0];
    fields.html('');
  }

  var winning = function(score) {
    var winningValues = [7, 56, 448, 73, 146, 292, 273, 84];
    for (var i in winningValues)
      if ((score & winningValues[i]) === winningValues[i])
        return true;
    return false;
  }
})
