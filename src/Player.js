const {Card, blackJackDeck} = require('./Card.js')


//Parent class Player that has properties that the children classes blackJackPlayer and blackJackDealer will inherit
//Has three properties (name, hand, and handValue)
class Player {
    constructor(name) {
        this._name = name
        this._hand = []
        this._handValue = 0
    }

    get name() {
        return this._name
    }

    get hand() {
        return this._hand
    }

    get handValue() {
        return this._handValue
    }

    set handValue(value) {
        this._handValue = value
    }

    reset() {
        this._hand = []
        this._handValue = 0
    }

    addCard(card) {
        this._hand.push(card)
        this._handValue += card.value
    }

    //Uses loops and the .show() property of the card class to log the cards side by side to the console
    showHand() {
        for (let i = 0; i < 7; i++) {
            let line = ''
            for (let j = 0; j < this._hand.length; j++) {
                line += this._hand[j].show()[i] + ' '
            }
            console.log(line)
        }
    }
}

class blackJackPlayer extends Player {
    constructor(name) {
        super(name)
        this._funds = 500
    }

    get funds() {
        return this._funds
    }

    addFunds(amount) {
        if (amount >= 0) {
            this._funds += amount
        } else {
            throw(new Error('the addFunds method must be passed a number greater than or equal to zero'))
        }
    }

    removeFunds(amount) {
        if (amount >= 0) {
            this._funds -= amount
        } else {
            throw(new Error('the removeFunds method must be passed a number greater than or equal to zero'))
        }
    }

    showOverview() {
        let length = ('' + this._name + this._handValue + this._funds).length
        console.log(`┌────────────────────────────────${'─'.repeat(length)}┐\n│ Name: ${this._name}  Hand-Total: ${this._handValue} Balance: ${this._funds} │\n└────────────────────────────────${'─'.repeat(length)}┘`)
    }
}


class blackJackDealer extends Player {
    constructor(name) {
        super(name)
        this._deck = blackJackDeck.slice(0)
    }

    resetDeck() {
        this._deck = blackJackDeck.slice(0)
    }

    shuffleDeck() {
        let newDeck = []
        for (let i = 0; i < 52; i++) {
            newDeck.push(this._deck.splice(Math.floor(Math.random() * (this._deck.length - i)), 1)[0])
        }
        this._deck = newDeck
    }

    showHandCover() {
        for (let i = 0; i < 7; i++) {
            let line = ''
            line += this._hand[0].hide()[i] + ''
            for (let j = 1; j < this._hand.length; j++) {
                line += this._hand[j].show()[i] + ' '
            }
            console.log(line)
        }
    }

    deal() {
        return this._deck.shift()
    }

    showOverview(showValue) {
        if (showValue) {
            console.log(`┌──────────────────────────────┐\n│ Name: ${this._name}  Hand-Total: ${this._handValue} │\n└──────────────────────────────┘`)
        } else {
            console.log(`┌─────────────────────────────┐\n│ Name: ${this._name}  Hand-Total: ? │\n└─────────────────────────────┘`)
        }
    }
}

module.exports = {blackJackPlayer, blackJackDealer}