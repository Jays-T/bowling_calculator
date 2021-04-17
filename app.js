const gameBoard = Vue.createApp({
    data() {
        return {
            board: 'Click number of pins knocked down',
            frames: {},
            score: 0,
            currentFrame: 0,
            roll: 1,
            spare: false,
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
            
            if (this.roll === 1) {
                this.roll = 2
                this.pins = 10 - this.frames[this.currentFrame].first;
            } 
            else {
                this.roll = 1;
                this.pins = 10;

                let rollOne = this.frames[this.currentFrame].first;
                let rollTwo = this.frames[this.currentFrame].second;

                this.frames[this.currentFrame].score = this.frames[this.currentFrame].first + this.frames[this.currentFrame].second;
                this.currentFrame++;
                
                this.updateTotalScore(rollOne, rollTwo);
                
            }
        },
        updatePins(pins) {

        },
        updateTotalScore(rollOne, rollTwo) {
            let total = 0;

            if (this.isStrike(rollOne)) {
                console.log("This is a strike!");
            } else if (this.isSpare(rollOne, rollTwo)) {
                console.log("This is a spare!");
            }

            for (let i in this.frames) {
                if (this.frames[i].score != '') {
                    total += this.frames[i].score;
                }
            }

            this.score = total;
        },
        isStrike(rollOne) {
            return rollOne === 10;
        },
        isSpare(rollOne, rollTwo) {
            return rollOne + rollTwo === 10;
        },
    },
})

gameBoard.mount('#gameBoard')