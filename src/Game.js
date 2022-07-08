const {blackJackPlayer, blackJackDealer} = require('./Player.js')
const ps = require("prompt-sync")
const prompt = ps()

console.log('\n')
console.log('┌────────────────────────────────────────┐')
console.log('│        Black Jack Terminal Game        │')
console.log('└────────────────────────────────────────┘\n│')


const human = new blackJackPlayer(prompt('│  What is your name: '))
const dealer = new blackJackDealer('Dealer')
console.log(`│\n│  Welcome to Black Jack ${human.name}!`)

//Variable input is also used later on for storing user input from other prompts
let input = 'Yes'

while (input === 'Yes') {
    console.log('|')
    prompt('│  Hit (Enter) when you are ready to begin')
    console.log('│')
    let bet = Number(prompt('│  What is your initial bet: '))
    //Conditional Checks to Make sure that bet is not negative, the player has enough funds, and is not a decimal
    while (bet < 1 || bet > human.funds || !Number.isInteger(bet)) {
        console.log('│')
        console.log(`│  Please input an integer value minimum (1) max (${human.funds})\n│`)
        bet = Number(prompt('│  What is your initial bet: '))
    }
    console.log('│')
    human.removeFunds(bet)
    dealer.shuffleDeck()

    //Deals two cards to each the player and dealer to start of the match
    for (let i = 0; i < 2; i ++) {
        human.addCard(dealer.deal())
        dealer.addCard(dealer.deal())
    }

    human.showOverview()
    human.showHand()
    dealer.showOverview(false)
    dealer.showHandCover()

    let blackJack
    //If initial dealing equals 21, so ace and a facecard, they win 1.5 times their bet
    //setting the variable equal to true allows the computer to differentiate getting Black Jack and having a normal hand of 21 later on
    if (human.handValue === 21) {
        console.log('│')
        console.log(`│  Black Jack! You have have won $${Math.floor(bet * 1.5)}\n│`)
        human.addFunds(bet * 2.5)
        blackJack = true
    }

    let index
    //Allows the user to keep hitting while their hand value is less than 21 or until they choose to stand
    while (human.handValue < 21 && input !== 'Stand') {
        console.log('│')
        input = prompt('│  Would you like to Hit or Stand: ')
        console.log('│')
        while (input !== 'Hit' & input !== 'Stand') {
            console.log('│  Please input either (Hit) or (Stand)\n│')
            input = prompt('│  Would you like to Hit or Stand: ')
            console.log('│')
        }
        if (input === 'Hit') {
            human.addCard(dealer.deal())
            if (human.handValue > 21) {
                if (human.hand.map(card => card.rank).includes('A', index)) {
                    human.handValue -= 10
                    index = human.hand.map(card => card.rank).indexOf('A') + 1
                }
            }
            human.showOverview()
            human.showHand()
            dealer.showOverview(false)
            dealer.showHandCover()
        } 
    }

    index = 0
    if (human.handValue > 21) {
        console.log('│')
        console.log(`│  Your hand value exceeds 21! You have lost $${bet}!\n│`)
    } else if (!blackJack) {
        input = prompt('│  Press (enter) when you would like the dealer to go')
        console.log('│')
        //Dealer must hit when hand value is less than 17 and must stand when it is 17 or over
        while (dealer.handValue < 17) {
            dealer.addCard(dealer.deal())
            if (dealer.handValue > 21) {
                if (dealer.hand.map(card => card.rank).includes('A', index)) {
                    dealer.handValue -= 10
                    index = dealer.hand.map(card => card.rank).indexOf('A') + 1
                }
            }
        }
        human.showOverview()
        human.showHand()
        dealer.showOverview(true)
        dealer.showHand()
        //Decides the outcome of the round and how the players funds need to be altered acordingly
        if (dealer.handValue > 21) {
            console.log(`|\n│  Congragulations ${human.name}! The Dealer has bust and you have won $${bet}!\n│`)
            human.addFunds(bet * 2)
        } else if (dealer.handValue < human.handValue) {
            console.log(`│\n│  Congragulations ${human.name}! Your hand value is closer to 21 than the dealer! You have won $${bet}!\n│`)
            human.addFunds(bet * 2)
        } else if (dealer.handValue > human.handValue) {
            console.log(`│\n│  Sorry ${human.name}! The Dealer's hand value is closer to 21 than you! You have lost $${bet}!\n│`)
        } else {
            console.log(`│\n│  Close ${human.name}! You and the dealer have tied! Your bet of $${bet} has been returned to you!\n│`)
            human.addFunds(bet)
        }
    }

    console.log(`│  Your current balance is $${human.funds}\n│`)

    //Prompt allowing the user whether or not they would like to continue playing Black Jack and start a new round
    //Funds from the previous rounds carry on
    input = prompt('│  Would you like to play again: ')
    while (input !== 'Yes' & input !== 'No') {
        console.log('│\n│  Please input either (Yes) or (No)\n│')
        input = prompt('│  Would you like to play again: ')
    }
    if (input === 'Yes') {
        dealer.resetDeck()
        dealer.reset()
        human.reset()
        dealer.shuffleDeck()
    }
}