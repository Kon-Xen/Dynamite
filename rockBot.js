class Bot {

    dynamites = 100;

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
                if (this.dynamites>=1){
                    this.dynamites-=1;
                    return "D";
                } else { return "W"}

            case 4:
                return 'W';
        }
    }

    makeMove(gamestate) {
        return this.playRandom(4);
    }
}

module.exports = new Bot();
