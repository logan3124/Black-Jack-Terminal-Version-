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

    hide() {
        return ['┌───────┐','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','│░░░░░░░│','└───────┘']
    }


}

const deck = []


for (let i = 2; i < 11; i++) {
    ['hearts', 'diamonds', 'spades', 'clubs'].forEach(suit => {
        deck.push(new Card(suit, i))
    })
}

['J', 'Q', 'K', 'A'].forEach(rank => {
    ['hearts', 'diamonds', 'spades', 'clubs'].forEach(suit => {
        deck.push(new Card(suit, rank))
    })
})

module.exports = {deck}