class Bot {

    roundCount = 0;
    roundWeight = 1;

    robot = {
        'dynamites': 100,
        'waterBlns': 0,
        'scissors': 0,
        'papers': 0,
        'rocks': 0
    };

    myBot = this.robot;
    opponent = this.robot;


    playRandom(max) {
        let move = Math.floor(Math.random() * max);
        switch (move) {
            case 0:
                // console.log("Rock");
                return 'R';
            case 1:
                // console.log("Paper");
                return 'P';
            case 2:
                // console.log("Scissors");
                return 'S';
            case 3:
                // console.log("Dynamite");
                return 'D';
            case 4:
                // console.log("Watter");
                return 'W';
            default:
                return 'P';
        }
    }


    playClever() {

        if (this.playDynamite()) {
            console.log("Clever Dynamite");
            return "D";
        }
        // if (this.playWatter()) {
        //     console.log("Clever Water");
        //     return "W";
        // } else {
            console.log("RANDOM!!!!!")
            return this.playRandom(2);

    }

    // countOpponentsDynamites(round) {
    //     if (round.p2 === 'D') {
    //         this.opponent.dynamites -= 1;
    //     }
    // }


    // countMyDynamites(round) {
    //     if (round.p1 === 'D') {
    //         this.myBot.dynamites -= 1;
    //     }
    // }

    //---------------------------------
    // Look at previous round (round - 1) and record what
    // each player has played.
    // needs to check if you have rounds first!

    // could be a function.
    updateMyBot(round) {
        switch (round.p1) {
            case 'D':
                player_1.dynamites += 1;
                break;
            case 'W':
                player_1.waterBlns += 1;
                break;
            case 'S':
                player_1.scissors += 1;
                break;
            case 'P':
                player_1.papers += 1;
                break;
            case 'R':
                player_1.rocks += 1;
                break;
        }
    }

    updateOpponent(round) {
        switch (round.p2) {
            case 'D':
                player_2.dynamites += 1;
                break;
            case 'W':
                player_2.waterBlns += 1;
                break;
            case 'S':
                player_2.scissors += 1;
                break;
            case 'P':
                player_2.papers += 1;
                break;
            case 'R':
                player_2.rocks += 1;
                break;
        }
    }

    adjustWeight(round) {
        if (round.p1 === round.p2) {
            this.roundWeight += 1;
        }
    }

// if statements to prevent overuse of dynamite and or waterballoons
// code will have to be nested inside these?
    playDynamite() {

        if (this.myBot.dynamites >= 0) {
            if (this.roundWeight > 1) {
                return true;
            } else {
                return false;
            }
        }
    }

// returns true if the opponent still has dynamite. false if not

    playWatter() {
        return (player_2.dynamites >= 0) ? true : false;
    }


    makeMove(gamestate) {

        if (gamestate.rounds.length !== 0) {
            // this.countOpponentsDynamites(gamestate.rounds[this.roundCount - 1]);
            // this.countMyDynamites(gamestate.rounds[this.roundCount - 1]);
            this.updateMyBot(gamestate.rounds[this.roundCount - 1]);
            this.updateOpponent(gamestate.rounds[this.roundCount - 1]);
            this.adjustWeight(gamestate.rounds[this.roundCount - 1]);
        }


        console.log("round: " + this.roundCount);//debugging
        console.log("dynamites: " + this.myBot.dynamites);//debugging
        console.log(gamestate.rounds[this.rounds - 1]);


        this.roundCount += 1;

        return this.playClever();
        // ternary javascript
    }
}

module.exports = new Bot();
