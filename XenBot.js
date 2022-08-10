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

        let player_1 = player;
        let player_2 = player;
        //move is unique

        // Look at previous round (round - 1) and record what
        // each player has played.

        switch (gamestate.rounds[(rounds - 1)].p1) {
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

        switch (gamestate.rounds[(rounds - 1)].p2) {
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

        // if statements to prevent overuse of dynamite and or waterballoons
        // code will have to be nested inside these?
        if (player_1.dynamites >= 100) {
            //don't play 'D'
        }

        if (player_2.dynamites >= 100) {
            // don't play 'W'
        }



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
