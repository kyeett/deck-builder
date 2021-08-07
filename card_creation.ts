import {Card} from './card'

interface CardDefinitionList {
    [key: string]: {
        cost: number,
        effects: []
    }
}

export class CardCreator {

    constructor(private definitions: CardDefinitionList) {
    }

    new(name: string): Card {
        if (Object.keys(this.definitions).indexOf(name) == -1) {
            throw new Error(`card with type "${name}" does not exist`)
        }

        const def = this.definitions[name]

        def.cost

        return new Card(name, def.cost)
    }
}
