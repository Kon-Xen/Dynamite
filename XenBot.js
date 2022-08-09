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

    playRandom() {
        let move = Math.floor(Math.random() * 5);
        switch (move) {
            case 0:
                return 'R';
            case 1:
                return 'P';
            case 2:
                return 'S';
            case 3:
                return 'D';
            case 4:
                return 'W';
        }
    }


    playClever() {
        let explode = Math.floor(Math.random() * 3);

        if (explode === 1 && this.myBot.dynamites >= 1) {
            return "D";
        } else if (explode === 2) {
            return "W";
        } else if (explode === 3) {
            this.playRandom();
        }
    }

    countOpponentsDynamites(round) {
        if ( round.p2 === 'D') {
            this.opponent.dynamites -= 1;
        }
    }

    countMyDynamites(round) {
        if (round.p1 === 'D') {
            this.myBot.dynamites -= 1;
        }
    }

    makeMove(gamestate) {

        if (gamestate.rounds.length -1 >1) {
            this.countOpponentsDynamites( gamestate.rounds[this.rounds-1] );
            this.countMyDynamites( gamestate.rounds[this.rounds-1] );
        }

        console.log("round: " + this.rounds);//debugging
        console.log("dynamites: " + this.myBot.dynamites);//debugging

        this.rounds += 1;

        return (this.rounds <= 50) ? this.playRandom(): this.playClever();

    }
}

module.exports = new Bot();
