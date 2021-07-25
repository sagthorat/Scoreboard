const app = Vue.createApp({
	data() {
		return {
			player1: {
				score: 0,
			},
			player2: {
				score: 0,
			},
			player3: {
				score: 0,
			},
			initName: [],
			names: "",
			id: 3,
			winningScore: 0,
			winner: "",
			classNameHigh: "hide",
			scoreToAdd: "",
			scoreToAdd1: "",
			scoreToAdd2: "",
			classNameLow: "hide",
		};
	},
	methods: {
		scoreUp(player, num) {
			const regex = /[1-9]/;
			if (regex.test(num)) {
				player.score += Number(num);
				if (this.initName.length < 2) {
					alert("Please add at least two players first!");
				}
			} else {
				alert("Only numbers are allowed in the score.");
			}
		},

		addNames(item) {
			const regex = /[a-zA-Z]/;
			if (regex.test(item)) {
				this.initName.push(item);
				if (this.id > 0) {
					this.id -= 1;
				}
			} else {
				alert("Please enter a valid name (no special characters, numbers, or emojis).");
			}
		},
		finishGameLowScore() {
			if (confirm("Are you sure you want to end the game?")) {
				this.winningScore = Math.min(
					this.player1.score,
					this.player2.score,
					this.player3.score
				);
				console.log(this.winningScore);
				this.classNameLow = "show";
				this.classNameHigh = "hide";
				// winner.style.display = "block";

				if (this.player1.score == this.winningScore) {
					this.winner = this.initName[0];
				} else if (this.player2.score == this.winningScore) {
					this.winner = this.initName[1];
				} else {
					this.winner = this.initName[2];
				}
			}
		},
		resetGame() {
			if (alert("are you sure?")) {
				this.player1.score = 0;
				this.player2.score = 0;
				this.player3.score = 0;
			}
		},
		finishGameHighScore() {
			if (confirm("Are you sure you want to end the game?")) {
				this.winningScore = Math.max(
					this.player1.score,
					this.player2.score,
					this.player3.score
				);
				console.log(this.winningScore);
				this.classNameHigh = "show";
				this.classNameLow = "hide";
				// winner.style.display = "block";

				if (this.player1.score == this.winningScore) {
					this.winner = this.initName[0];
				} else if (this.player2.score == this.winningScore) {
					this.winner = this.initName[1];
				} else {
					this.winner = this.initName[2];
				}
			}
		},
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
			return this.id == 0;
		},
	},
});

app.mount("#assignment");
