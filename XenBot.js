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
        let IAm = ""; // needs a function to dermine

        console.log(gamestate.rounds[1]); //debugging
        //function decide
        //function play
        function play(){
            return 'R'
        }
        rounds = +1;
        return play();
        // who am I
        // count rounds
        // keep score of all that is played ?
        // use a file or list?
        // how do we know who is which player?.
        // count the dynamites / compare to what was played all ready

        // compare how many pl1/pl2 has left compared to how many dynamites I have.
    }
}

module.exports = new Bot();
