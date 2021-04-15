const app = Vue.createApp({
    template: '<h1>Bowling Calculator</h1>',
});

app.mount('#app')

const gameBoard = Vue.createApp({
    data() {
        return {
            board: 'Click number of pins knocked down',
            frames: 0,
            score: 0
        }
    },
    methods: {
        
        bowl(pins) {
            let strike = false;
            let spare = false;
            if (this.frames === 10) {
                console.log("final score: " + this.score)
                console.log("game over")
                this.frames = 0;
                this.score = 0;
                return  
            }
            if (pins === 10) {
                this.score += 10;
                this.frames += 2;
                console.log("strike")
            }
            if (pins != 10) {
                console.log("not a strike")
                this.frames += 1;
                this.score += pins;
            }
            console.log("pins knocked down = " + pins)
            
            console.log("frames played: " + this.frames)
            console.log("score is now: " + this.score)
        }
    }
})

gameBoard.mount('#gameBoard')