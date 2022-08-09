class Bot {

    makeMove(gamestate) {

        let rounds = 0;

        let player = {
            'dynamites': 0,
            'waterBlns': 0,
            'scissors': 0,
            'papers': 0,
            'rocks': 0
        };

        let me = player
        let opponent = player;

        //todo  keep score of all that is played ? [ ]
        // count the dynamites / compare to what was played all ready

        // todo compare how many pl1/pl2 has left compared to how many dynamites I have.
        //todo random engine.

        //console.log(gamestate.rounds[1])//debugging
        //todo function playClever - use the data above to reach decision and paas it ot the play function

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
            return 'D'; // temporary for testing
        }

        if ( rounds < 50){
            rounds = +1;
            return playRandom();
        } else {
            rounds = +1;
            return playClever();
        }

    }
}

module.exports = new Bot();
