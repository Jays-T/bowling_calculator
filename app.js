const gameBoard = Vue.createApp({
    data() {
        return {
            board: 'Click number of pins knocked down',
            frames: {},
            score: 0,
            currentFrame: 0,
            roll: 1,
            strike: false,
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.frames[i] = {
                index: i + 1,
                first: '',
                seconds: '',
                score: ''
            };
 
            this.pins = 10;
        }
    },
    methods: {
        bowl(pin_number) {
            const rollNumber = this.roll === 1 ? "first" : "second";

            this.frames[this.currentFrame][rollNumber] = parseInt(pin_number);

            let rollOne = this.frames[this.currentFrame].first;
            let rollTwo = this.frames[this.currentFrame].second;

            if(rollOne === 10) {
                this.strike = true;
            }

            if (this.roll === 1) {
                this.roll = 2
                this.pins = 10 - this.frames[this.currentFrame].first;
            } 
            else {
                this.roll = 1;
                this.pins = 10;


                this.frames[this.currentFrame].score = this.frames[this.currentFrame].first + this.frames[this.currentFrame].second;
                this.currentFrame++;
                
                this.updateTotalScore(rollOne, rollTwo);
            }
        },
        updatePins(pins) {

        },
        updateTotalScore(rollOne, rollTwo) {
            let total = 0;

            for (let i = 0; i < this.currentFrame; i++){
                if (i !== 0) {
                    if (this.strike) {
                        this.frames[i - 1].score += this.frames[i].first + this.frames[i].second; 
                        this.strike = false;
                    } else {
                        this.strike = false;
                    }
                }
            }

            for (let j = 0; j < this.currentFrame; j++) {
                    // check for previous spare
                    // in order to update previous frame score with sparebonus
                    if (j !== 0) {
                    if (this.frames[j - 1].score == 10 && this.frames[j - 1].second != 0) {
                        this.frames[j - 1].score += this.frames[j].first;     
                    }
                }
            }

            for (let i in this.frames) {
                if (this.frames[i].score != '') {
                    total += this.frames[i].score;
                }
            }

            this.score = total;
        },
    },
})

gameBoard.mount('#gameBoard')