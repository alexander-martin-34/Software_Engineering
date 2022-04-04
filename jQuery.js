$(function() {
  let gameBoard = initializeNewGameBoard();
  let id = {
    hitButton: $('#hit-button'),
    standButton: $('#stand-button'),
    newButton: $('#new-button'),
    dealerHand: $('#dealer-Hand'),
    playerHand: $('#player-Hand'),
    dealerScore: $('#dealer-score'),
    playerScore: $('#player-score'),
    gamesPlayed: $('#games-played'),
    gamesWon: $('#games-won'),
    gamesLost: $('#games-lost'),
    cardsLeft: $('#cards-left'),
    messageArea: $('#message-area')
  };

  alertNew(id);

  $('#newButton').on('click', function() {
      newRound(gameBoard, id);
  });

  $('#hitButton').on('click', function() {
      hit(gameBoard, id);
  });

  $('#standButton').on('click', function() {
      stand(gameBoard, id);
  });
});