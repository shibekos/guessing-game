class GuessingGame {
    constructor() {
    	this.game = 0;
    	this.min = 0;
    	this.max = 0;
    	return this;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess()  {
        this.game = Math.ceil((this.min + this.max) / 2);
        return this.game;
    }

    lower() {
    	 this.max = this.game;
    }

    greater() {
    	this.min = this.game;
    }
}

module.exports = GuessingGame;
