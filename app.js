const app = Vue.createApp({
    template: '<h1>Bowling Calculator</h1>',
});

app.mount('#app')

const gameBoard = Vue.createApp({
    data() {
        return {
            board: 'Click number of pins knocked down'
        }
    },
    methods: {
        bowl(pins) {
            if (pins === 10) {
                console.log("strike")
            }
            if (pins != 10) {
                console.log("not a strike")
            }
            console.log("pins knocked down = " + pins)
        }
    }
})

gameBoard.mount('#gameBoard')