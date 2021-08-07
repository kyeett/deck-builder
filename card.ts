import * as _ from 'lodash';
import {MAX_CARDS_IN_HAND} from './const'

export class Card {
    cost
    name
    temporary

    constructor(name: string, cost: number, temporary = false) {
        this.name = name
        this.cost = cost
        this.temporary = temporary
    }

    toString() {
        return `${this.name}`
    }
}


// class CardConstructor {
//     private effects: effect[] = []
//
//     cost(cost: number) {
//         return this
//     }
//
//     effectDamage(amount: number) {
//         this.effects.push({type: 'damage', amount: amount})
//         return this
//     }
//
//     effectDefense(number: number) {
//         this.effects.push({type: 'defense', amount: number})
//         return this
//     }
//
//     build() {
//         return undefined;
//     }
// }

// Deal 7 damage. Increase defense by 4.

// let c: Card = new CardConstructor()
//     .cost(1)
//     .effectDamage(7)
//     .effectDefense(3)
//     .build()


//
//
//
// let creator = new CardConstructor()
// deck.add(creator.new('strike'))
//
//
// let a = new Attack()
// deck.add(new Attack())
// deck.add(new Attack())
// deck.add(new Attack())
// deck.add(new Attack())
//

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

