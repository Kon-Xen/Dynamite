class Bot {

    rounds = 0;

    bot = {
        'dynamites': 0,
        'waterBlns': 0,
        'scissors': 0,
        'papers': 0,
        'rocks': 0
    };

    me = this.bot
    opponent = this.bot;

    makeMove(gamestate) {

        function countOpponentsDynamites() {
            if (gamestate.rounds[this.rounds].p2 === 'D') {
                this.opponent.dynamites += 1;
            }
        }

        function countMyDynamites() {
            if (gamestate.rounds[this.rounds].p1 === 'D') {
                this.me.dynamites += 1;
            }
        }

        // function play random - plays randomly
        function playRandom() {
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

        // function play - plays based on data
        function playClever() {
            let explode = Math.floor(Math.random() * 3);
            if (explode === 1 && this.me.dynamites >= 1) {
                return "D";
            } else if (explode === 2) {
                return "W";
            } else {
                playRandom();
            }

        }


        if (gamestate.rounds) {
            countOpponentsDynamites();
            countMyDynamites();
        }

        this.rounds += 1;

         console.log(gamestate.rounds)//debugging
        // console.log(me.dynamites);//debugging
        console.log("round: " + this.rounds);//debugging

        return (this.rounds < 50) ? playRandom() : playClever();
    }
}

module.exports = new Bot();
