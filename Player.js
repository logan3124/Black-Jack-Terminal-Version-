const {deck} = require('./Card.js')

class Player {
    constructor(name) {
        this._name = name
        this._hand = []
        this._handValue = 0
    }

    get name() {
        return this._name
    }

    get handValue() {
        return this._handValue
    }

    addCard(card) {
        this._hand.push(card)
        this._handValue += card.value
    }

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

class Human extends Player {
    constructor(name) {
        super(name)
        this._funds = 500
    }

    get funds() {
        return this._funds
    }

    addFunds(amount) {
        this._funds += amount
    }
}


class Dealer extends Player {
    constructor(name) {
        super(name)
        this._deck = deck
    }

    resetDeck() {
        this._deck = deck
    }

    shuffleDeck() {
        let newDeck = []
        for (let i = 0; i < 52; i++) {
            newDeck.push(this._deck.splice(Math.floor(Math.random() * (this._deck.length - i)), 1)[0])
        }
        this._deck = newDeck
    }

    deal() {
        return this._deck.shift()
    }
}

export {Human, Dealer}