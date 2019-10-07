class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.mid = Math.round((this.right + this.left)/2);
        return this.mid;
        
    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}
module.exports = GuessingGame;
