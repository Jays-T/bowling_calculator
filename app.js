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
            this.rolledPins.push(parseInt(pins));
        },
        getScore() {
            let finalScore = 0;
            let rollIndex = 0;
            for (i=0; i < this.rolledPins.length; i++) {
                this.score += this.rolledPins[i];
            }
            // console.log(this.score);
            // this.rolledPins = [];
            // console.log(this.rolledPins);
        }

    },
})

gameBoard.mount('#gameBoard')