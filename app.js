const gameBoard = Vue.createApp({
    data() {
        return {
            presetOptions: 'Bowl a preset game',
            manualOptions: 'Manually bowl each roll',
            board: 'Click number of pins knocked down',
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
        newGame() {
            // Reset score and rolledPins on new game
            this.score = 0;
            this.rolledPins = [];
        },
        bowl(pins) {
            // Push pins for each roll into array of rolledPins
            this.rolledPins.push(parseInt(pins));
            console.log(this.rolledPins);
        },
        getScore() {
            console.log("getScore " + this.rolledPins)
            let rollIndex = 0;

            for (let i=0; i < 10; i++) {
                // parseInt and store the value of each amount of rolled pins at rollIndex
                let frameScore = parseInt(this.rolledPins[rollIndex] + this.rolledPins[rollIndex + 1]);

                console.log("this frameScore = " + frameScore);

                // Check if frameScore is a Spare
                if (this.isSpare(frameScore)) {
                    this.score += this.getSpareBonus(rollIndex);
                } else {
                    this.score += frameScore;
                }
                rollIndex += 2;
            }

            console.log("increment final score = " + this.score)
            // Reset rolled pins
            this.rolledPins = []
            return this.score;
        },
        // FrameScore checks for Spare and Strike
        isSpare(frameScore) {
            return frameScore === 10;
        },
        // Calculate score logic for Spare and Strike
        getSpareBonus(rollIndex) {
            return 10 + parseInt(this.rolledPins[rollIndex + 2])
        },
        // Preset full game rolls
        bowlGutterGame() {
            this.newGame()
            // Bowl zero, twenty times
            this.bowlMany(0, 20);
            this.getScore();
        },
        bowlAllOnes() {
            this.newGame()
            // Bowl one, twenty times
            this.bowlMany(1, 20);
            
            this.getScore();
        },
        bowlASpare() {
            this.newGame()

        },
        // Roll multiple times
        bowlMany(pins, bowls) {
            for (let i=0; i < bowls; i++) {
                this.bowl(pins)
            }
        },

    },
})

gameBoard.mount('#gameBoard')