const gameBoard = Vue.createApp({
    data() {
        return {
            board: 'Click number of pins knocked down',
            rolls: 0,
            score: 0,
            standingPins: [
                { number: 0 },
                { number: 1 },
                { number: 2 },
                { number: 3 },
                { number: 4 },
                { number: 5 },
                { number: 6 },
                { number: 7 },
                { number: 8 },
                { number: 9 },
                { number: 10 },
            ],
            rolledPins: [],
        }
    },
    methods: {

        bowl(pins) {
            // Push pins for each roll into array of rolledPins
            this.rolledPins.push(parseInt(pins));
            console.log(this.rolledPins);
        },
        getScore() {
            console.log("getScore " + this.rolledPins)
            let finalScore = 0;
            let rollIndex = 0;

            for ( let i=0; i < 10; i++) {
                let frameScore = this.rolledPins[rollIndex] + this.rolledPins[rollIndex + 1];
                console.log("this frameScore = " + frameScore);
                this.score += parseInt(frameScore);
                rollIndex += 2;
            }

            console.log("increment final score = " + this.score)
            return this.score;
        }

    },
})

gameBoard.mount('#gameBoard')