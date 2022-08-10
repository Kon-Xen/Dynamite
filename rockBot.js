class Bot {

    constructor () {
        this.roundCount = 0;
        this.roundWeight = 1;
    
        this.myBot = {
            'dynamites': 100,
            'waterBlns': 0,
            'scissors': 0,
            'papers': 0,
            'rocks': 0
        };

        this.opponent = {
            'dynamites': 100,
            'waterBlns': 0,
            'scissors': 0,
            'papers': 0,
            'rocks': 0
        };
    
        // this.myBot = this.robot;
        // this.opponent = this.robot;
    }
    

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

    makeMove(gamestate) {
        return 'P';
    }
}

module.exports = new Bot();