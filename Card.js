
//Card class that will represent each individual card in the deck
//Three properties (suit, rank, and value)
//Values of cards follow Black Jack rules where number cards are thier corresponding number, face cards are ten, and ace can be either eleven or 1 but starts with a value of 11
class Card {
    constructor(suit, rank) {
        this._suit = suit
        this._rank = rank
        if (rank === 'J' | rank === 'Q' | rank === 'K') {
            this._value = 10
        } else if (rank === 'A') {
            this._value = 11
        } else {
            this._value = parseInt(this._rank)
        }
    }

    get suit() {
        return this._suit
    }

    get rank() {
        return this._rank
    }

    get value() {
        return this._value
    }

    //Returns a visual representation of the card in the form of an array
    //Returns array instead of string so that mulitple cards can be displayed beside each other later on
    show() {
        switch (this._suit) {
            case 'hearts':
                if (this._rank === 10) {
                    return ['┌───────┐',`│${this._rank}     │`,'│       │','│   ♥   │','│       │',`│     ${this._rank}│`,'└───────┘']
                }
                return ['┌───────┐',`│${this._rank}      │`,'│       │','│   ♥   │','│       │',`│      ${this._rank}│`,'└───────┘']
                break
            case 'diamonds':
                if (this._rank === 10) {
                    return ['┌───────┐',`│${this._rank}     │`,'│       │','│   ♦   │','│       │',`│     ${this._rank}│`,'└───────┘']
                }
                return ['┌───────┐',`│${this._rank}      │`,'│       │','│   ♦   │','│       │',`│      ${this._rank}│`,'└───────┘']
                break
            case 'spades':
                if (this._rank === 10) {
                    return ['┌───────┐',`│${this._rank}     │`,'│       │','│   ♠   │','│       │',`│     ${this._rank}│`,'└───────┘']
                }
                return ['┌───────┐',`│${this._rank}      │`,'│       │','│   ♠   │','│       │',`│      ${this._rank}│`,'└───────┘']
                break
            case 'clubs':
                if (this._rank === 10) {
                    return ['┌───────┐',`│${this._rank}     │`,'│       │','│   ♣   │','│       │',`│     ${this._rank}│`,'└───────┘']
                }
                return ['┌───────┐',`│${this._rank}      │`,'│       │','│   ♣   │','│       │',`│      ${this._rank}│`,'└───────┘']
                break
            default:
                return '*error displaying card*'
                break
        }
        
    }

    //Returns a visual representation of a card that is facedown as an array
    hide() {
        return ['┌───────┐','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','└───────┘']
    }


}

const blackJackDeck = []

//Loops below creates a deck 52 cards for a game of Black Jack

for (let i = 2; i < 11; i++) {
    ['hearts', 'diamonds', 'spades', 'clubs'].forEach(suit => {
        blackJackDeck.push(new Card(suit, i))
    })
}

['J', 'Q', 'K', 'A'].forEach(rank => {
    ['hearts', 'diamonds', 'spades', 'clubs'].forEach(suit => {
        blackJackDeck.push(new Card(suit, rank))
    })
})

module.exports = {Card, blackJackDeck}