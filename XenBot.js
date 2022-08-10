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
                return 'R';
            case 1:
                return 'P';
            case 2:
                return 'S';
            case 3:
                return 'D';
            case 4:
                return 'W';
            default:
                return 'P';
        }
    }


    playClever() {
        if (this.playDynamite()) {
            return "D";
        }
        return this.playRandom(2);
    }


    updateMyBot(round) {
        switch (round.p1) {
            case 'D':
                this.myBot.dynamites -= 1;
                break;
            case 'W':
                this.myBot.waterBlns += 1;
                break;
            case 'S':
                this.myBot.scissors += 1;
                break;
            case 'P':
                this.myBot.papers += 1;
                break;
            case 'R':
                this.myBot.rocks += 1;
                break;
        }
    }

    updateOpponent(round) {
        switch (round.p2) {
            case 'D':
                this.opponent.dynamites -= 1;
                break;
            case 'W':
                this.opponent.waterBlns += 1;
                break;
            case 'S':
                this.opponent.scissors += 1;
                break;
            case 'P':
                this.opponent.papers += 1;
                break;
            case 'R':
                this.opponent.rocks += 1;
                break;
        }
    }

    adjustWeight(round) {
        if (round.p1 === round.p2) {
            this.roundWeight += 1;
        }
    }
    playDynamite() {
        if (this.myBot.dynamites >= 0) {
            return this.roundWeight > 1;
        }
    }


    playWatter() {
        return (player_2.dynamites >= 0) ? true : false;
    }


    makeMove(gamestate) {

        if (gamestate.rounds.length !== 0) {
            this.updateMyBot(gamestate.rounds[this.roundCount - 1]);
            this.updateOpponent(gamestate.rounds[this.roundCount - 1]);
            this.adjustWeight(gamestate.rounds[this.roundCount - 1]);
        }

        this.roundCount += 1;
        this.roundWeight = 1;

        return this.playClever();
    }
}

module.exports = new Bot();
