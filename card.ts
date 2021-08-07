import * as _ from "lodash";

class Card {
    name
    temporary

    constructor(name: 'attack', temporary = false) {
        this.name = name
        this.temporary = temporary
    }

    toString() {
        return `${this.name}`
    }
}

class Deck {
    cards: Card[] = []

    add(c: Card) {
        this.cards.push(c)
    }

    copy() {
        return _.cloneDeep(this.cards)
    }
}


const MAX_CARDS_IN_HAND = 5

class GameDeck {
    private discardPile: Card[] = []
    private hand: Card[] = []

    constructor(private drawPile: Card[]) {
    }

    draw(count: number) {

        for (let i = 0; i < count; i++) {
            if (this.hand.length >= MAX_CARDS_IN_HAND) {
                console.log('hand is full')
                return
            }

            if (this.drawPile.length == 0) {
                // Attempt to reshuffle deck
                if (this.discardPile.length == 0) {
                    console.error('no cards to draw')
                    return
                }

                this.drawPile = this.discardPile
                this.discardPile = []
                return
            }

            // Move card from draw pile to hand
            let c = this.drawPile.pop()
            if (!c) {
                throw new Error("unexpected state of draw pile")
            }
            this.hand.push(c)
        }
    }

    print() {
        console.log('STATE')
        console.log(`drawPile    [${this.drawPile}]`)
        console.log(`hand        [${this.hand}]`)
        console.log(`discardPile [${this.discardPile}]`)
    }

    play(i: number) {
        if(i >= this.hand.length) {
            console.log('invalid index', i)
            return
        }
        let c = this.hand[i]
        this.hand.splice(i, 1);

        this.discardPile.push(c)
    }
}


class Attack extends Card {
    constructor() {
        super('attack');
    }
}

let deck = new Deck()
let a = new Attack()
deck.add(new Attack())
deck.add(new Attack())
deck.add(new Attack())
deck.add(new Attack())

let gameDeck = new GameDeck(deck.copy())
gameDeck.draw(3)
gameDeck.play(1)
gameDeck.print()

// Card
/*
Types? Attack, Defense

Effects
* Add defense
* Deal damage
 * Single enemy
 * Multiple enemy
 * Random enemy
 * Single/Multiple times

Modifiers
* Strength
* Stability
* Weak

* Heal
* Take damage

 */

