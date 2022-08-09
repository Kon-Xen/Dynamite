class Bot {

    rounds = 0;

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
        }
    }


    playClever() {
        let explode = Math.floor(Math.random() * 2);

        if (explode === 0 && this.myBot.dynamites >= 1) {
            console.log("Clever Dynamite");
            return "D";
        }

        if (explode === 1 &&this.opponent.dynamites < 40) {
            console.log("Clever Water");
            return "W";
        } else {
            console.log("RANDOM!!!!!")
            this.playRandom(2);
        }
    }

    countOpponentsDynamites(round) {
        if (round.p2 === 'D') {
            this.opponent.dynamites -= 1;
        }
    }


    countMyDynamites(round) {
        if (round.p1 === 'D') {
            this.myBot.dynamites -= 1;
        }
    }


    makeMove(gamestate) {

        if (gamestate.rounds.length - 1 > 1) {
            this.countOpponentsDynamites(gamestate.rounds[this.rounds - 1]);
            this.countMyDynamites(gamestate.rounds[this.rounds - 1]);
        }


        console.log("round: " + this.rounds);//debugging
        console.log("dynamites: " + this.myBot.dynamites);//debugging
        console.log(gamestate.rounds[this.rounds - 1]);


        this.rounds += 1;

        return (this.rounds <= 50) ? this.playRandom(4) : this.playClever();

    }
}

module.exports = new Bot();
