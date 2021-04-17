const gameBoard = Vue.createApp({
    data() {
        return {
            presetOptions: 'Bowl a preset game',
            manualOptions: 'Manually bowl each roll',
            board: 'Click number of pins knocked down',
            score: 0,
            rolledPins: [],
            frames: {},
            currentFrame: 0,
            roll: 1,
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
        newGame() {
            this.score = 0;
            this.rolledPins = [];
        },
        bowl(pins) {
            // Push pins for each roll into array of rolledPins
            // To iterate over and calculate total score
            this.rolledPins.push(parseInt(pins));
            console.log(this.rolledPins);
        },
        getScore() {
            console.log("getScore " + this.rolledPins)
            let rollIndex = 0;

            for (let i=0; i < 10; i++) {

                if(this.rolledPins[rollIndex] === 10) {
                    this.score += 10 + parseInt(this.rolledPins[rollIndex + 1]) + parseInt(this.rolledPins[rollIndex + 2]);
                    rollIndex++;
                    continue;
                }

                // ParseInt and store the value of each amount of rolled pins at rollIndex
                // In order to add each frameScore to total game score
                let frameScore = parseInt(this.rolledPins[rollIndex] + this.rolledPins[rollIndex + 1]);

                console.log("this frameScore = " + frameScore);

                // Check if frameScore is a Spare
                // In order to add spare Bonus to Score
                if (this.isSpare(frameScore)) {
                    this.score += this.getSpareBonus(rollIndex);
                } else {
                    this.score += frameScore;
                }
                rollIndex += 2;
            }

            console.log("increment final score = " + this.score)

            return this.score;
        },
        isSpare(frameScore) {
            return frameScore === 10;
        },
        getSpareBonus(rollIndex) {
            return 10 + parseInt(this.rolledPins[rollIndex + 2]);
        },
        // isStrike() {
            
        // },
        // getStrikeBonus() {

        // },
        // Preset full game rolls
        bowlGutterGame() {
            this.newGame()
            this.bowlMany(0, 20);
            this.getScore();
        },
        bowlAllOnes() {
            this.newGame()
            this.bowlMany(1, 20);
            this.getScore();
        },
        bowlSpare() {
            this.newGame();
            this.bowl(5);
            this.bowl(5);
            this.bowl(3);
            this.bowlMany(0,17);
            this.getScore();
        },
        bowlStrike() {
            this.newGame();
            this.bowl(10);
            this.bowl(1);
            this.bowl(1);
            this.bowlMany(0, 17);
            this.getScore();
        },
        bowlAllStrikes() {
            this.newGame();
            this.bowlMany(10,20);
            this.getScore();
        },
        bowlStrikeSpare() {
            this.newGame();
            this.bowl(10);
            this.bowlMany(5, 2);
            this.bowl(4);
            this.bowl(0);
            this.bowlMany(0, 14);
            this.getScore();
        },
        bowlMany(pins, bowls) {
            for (let i=0; i < bowls; i++) {
                this.bowl(pins)
            }
        },

    },
})

gameBoard.mount('#gameBoard')