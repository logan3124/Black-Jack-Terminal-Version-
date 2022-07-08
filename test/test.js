const assert = require('assert');
const {blackJackPlayer, blackJackDealer} = require('../src/Player.js');
const {Card, blackJackDeck} = require('../src/Card.js');

describe('Card', () => {
    let example;

    before(() => {
        example = new Card('hearts', 'J')
    })

    describe('suit', () => {
        it('returns the correct suit of the card', () => {
            let correctSuit = 'hearts';

            assert.ok(correctSuit == example.suit)
        })
    })

    describe('rank', () => {
        it('returns the correct rank of the card', () => {
            let correctRank = 'J';

            assert.ok(correctRank = example.rank);
        })
    })

    describe('value', () => {
        it('returns the correct value of the card based on its rank', () => {
            let correctValue = 10;

            assert.ok(correctValue == example.value)
        })
    })
})

describe('blackJackDeck', () => {
    let deck = blackJackDeck.slice(0);

    it('has the correct length (amount of cards)', () => {
        numCards = 52;

        assert.ok(numCards = deck.length);
    })
})

describe('blackJackPlayer', () => {
    let example;
    let exampleAmount;

    before(() => {
        example = new blackJackPlayer('example');
        exampleAmount = example.funds;
    })

    describe('addFunds', () => {
        it('increases a blackJackPlayers _funds property by x amount', () => {
            let addAmount = 10;

            exampleAmount += addAmount;
            example.addFunds(addAmount);

            assert.ok(exampleAmount == example.funds)
        })

        it('if negative value is passed in an error should be thrown', () => {
            assert.throws(() => {
                example.addFunds(-10);
            })
        })

        it('if no paremeter is passed in an error should be thrown', () => {
            assert.throws(() => {
                example.addFunds();
            })
        })
    })

    describe('removeFunds', () => {
        it('decreases a blackJackPlayers _funds property by x amount', () => {
            let subAmount = 10;

            exampleAmount -= subAmount;
            example.removeFunds(subAmount);

            assert.ok(exampleAmount == example.funds);
        })

        it('if a negative value is passed in an error should be thrown', () => {
            assert.throws(() => {
                example.removeFunds(-10);
            })
        })

        it('if no parameter is passed in an error should be thrown', () => {
            assert.throws(() => {
                example.removeFunds();
            })
        })
    })
})