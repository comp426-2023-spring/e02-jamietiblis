// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver



function gameOptions() {
  document.getElementById("rpsShots").style.display = "none"
  document.getElementById("result").style.display = "none"
  document.getElementById("submission").style.display = "none"
}

function selection() {
  let opponentShot = document.getElementById('opponent');
  let rpslsSelection = document.getElementById("rpsls");
  if (opponentShot.checked == true) {
    document.getElementById("rpsShots").style.display = "block"
    if (rpslsSelection.checked == false) {
      document.getElementById("rpslsShots").style.display = "none"
    } else {
      document.getElementById("rpslsShots").style.display = "inline"
    }
  } else {
    document.getElementById("rpsShots").style.display = "none"
  }
}


function startOver() {
  document.getElementById("input").reset()
  document.getElementById("rpsShots").style.display = "none"
  document.getElementById("result").style.display = "none"
}

async function playGame() {
  let game = "rps"
  for (var x of document.getElementsByName("game")) {
    if (x.checked == true) { game = x.id }
  }

  let shot = "rock"
  for (var x of document.getElementsByName("shot")) {
    if (x.checked == true) { shot = x.id }
  }

  let baseurl = window.location.href.concat('app/')
  let url = baseurl.concat(game.concat('/play/'))
  let opponentShot = document.getElementById('opponent').checked

  if (opponentShot) { url = url.concat(shot) }
  let response = await fetch(url)
  let results = await response.json()
  resultString = 'You selected ' + results.player

  if (opponentShot) {
    resultString = resultString + ' and your opponent selected ' + results.opponent + '. Result: ' + results.results;
  }

  document.getElementById("results").innerText = resultString
  document.getElementById("results").style.display = "block"
}
