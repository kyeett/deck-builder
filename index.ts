import {Deck, GameDeck} from './deck'
import {CardCreator} from "./card_creation";
import {cardDefinitionsV1} from "./base_definitions";

let creator = new CardCreator(cardDefinitionsV1)
let deck = new Deck()

deck.add(creator.new('strike'))
deck.add(creator.new('strike'))
deck.add(creator.new('armor'))

let gameDeck = new GameDeck(deck.copy())
gameDeck.shuffle()
gameDeck.draw(2)
gameDeck.play(1)
gameDeck.print()
