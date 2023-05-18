function showHideShots() {
  let check = document.getElementById('opponent');
if (check.checked == true) {
  $('.shots').show()
} else {
  $('.shots').hide()
}
}

function startOver () {
document.getElementById('userinput').reset();
showHideShots();
}

async function playGame () {
let game = $('input[type=radio][name=game]:checked').val();
let shot = $('input[type=radio][name=shot]:checked').val();
let baseurl = window.location.href + 'app/'
console.log(baseurl)

let url = baseurl + game + '/play/' + shot
console.log(url)	

let response = await fetch(url)
let result = await response.json()
console.log(result)
}