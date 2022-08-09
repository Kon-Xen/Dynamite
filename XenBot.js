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

        let player_1 = player
        let player_2 = player;
        //move is unique

        let IAm = ""; // needs a function to determine

        // who am I [ ]
        // count rounds [V]
        // keep score of all that is played ? [ ]
        // how do we know who is which player?. []
        // count the dynamites / compare to what was played all ready

        // compare how many pl1/pl2 has left compared to how many dynamites I have.

        console.log(gamestate.rounds[1])//debugging
        // function decide - use the data above to reach decision and paas it ot the play function

        // function play - takes input from decision
        function play(){
            return 'R'
        }
        rounds = +1;
        return play();

    }
}

module.exports = new Bot();
