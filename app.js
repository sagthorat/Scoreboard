const app = Vue.createApp({

    data() {
        return {
            player1: {
                score: 0

            },
            player2: {
                score: 0

            },
            player3: {
                score: 0

            },
            initName: [],
            names: '',
            id: 3,
            winningScore:0,
            winner:'',
            className: 'hide'
        }
    },
    methods: {
        scoreUp(player) {
            player.score += 1;
            

        },
        scoreDown(player) {
            if (player.score > 0) {
                player.score -= 1;

            }
        },
        scoreUp5(player) {
            player.score += 5;

        },
        addNames(item) {
            this.initName.push(item)
            
            if (this.id > 0) {
                this.id -= 1
            }
        },
        finishGame() {

            this.winningScore = Math.min(this.player1.score, this.player2.score, this.player3.score)
            console.log(this.winningScore);
            this.className = 'show'
            // winner.style.display = "block";
            
            if (this.player1.score == this.winningScore){
                this.winner = this.initName[0]
            }
            else if (this.player2.score == this.winningScore){
                this.winner = this.initName[1]
            }
            else {
                this.winner = this.initName[2]
            }
        }
    },
    computed: {
        getName() {
            return this.initName[0];
        },
        getName1() {
            return this.initName[1];
        },
        getName2() {
            return this.initName[2];
        },
        disableButton() {
            return (this.id == 0)

        }
    }


})

app.mount('#assignment');