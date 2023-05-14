// will need to re-add A03 code after fixing A03, this is current code
export { rps, rpsls };

function rps(shot) {
    const options = ["rock", "paper", "scissors"];
    const opponent_move = options[Math.floor(Math.random() * 3)];

    if (shot === undefined || shot === null) {
        return { "player": opponent_move };
    }

    	shot = shot.toLowerCase();
	
	if (!options.includes(shot)) {
        return new RangeError("Move is out of range.");
    }
	var result;

	if (shot === opponent_move) {
		result = "tie";

	} else {
		if((opponent_move === "scissors" && shot === "rock" ||
		    opponent_move === "paper" && shot === "scissors" ||
		    opponent_move === "rock" && shot === "paper")){
			result === "win";
	} else {
		result === "lose";
	}
	}
	let output = { "player": shot, "opponent": opponent_move, "result": result };

	return output
}

function rpsls(shot) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const opponent_move = options[Math.floor(Math.random() * 5)];

    if (shot === undefined || shot === null) {
        return { "player": opponent_move };
    }

    	shot = shot.toLowerCase();

    	if (!options.includes(shot)) {
        return new RangeError("Move is out of range.");
    }
		
	var result;

	if (shot === opponent_move) {
		result = "tie";
	} else {
		if((opponent_move === "paper" && shot === "scissors" ||
		    opponent_move === "rock" && shot === "spock" ||
		    opponent_move === "spock" && shot === "lizard" ||
		    opponent_move === "scissors" && shot === "spock" ||
		    opponent_move === "lizard" && shot === "scissors" ||
		    opponent_move === "rock" && shot === "paper" ||
		    opponent_move === "spock" && shot === "paper" ||
		    opponent_move === "paper" && shot === "lizard" ||
		    opponent_move === "lizard" && shot === "rock" ||
		    opponent_move === "scissors" && shot === "rock")){
			result = "win";
		} else {
			result = "lose";
		}
		let output = { "player": shot, "opponent": opponent_move, "result": result };

	return output
	}
}
