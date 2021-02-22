import {PlayableCard} from "@/card-quest/cards/PlayableCard";
import {CardId} from "@/card-quest/cards/CardId";

export class ExampleCard extends PlayableCard {


    constructor() {
        super(CardId.CardExample, 'title', 'Example Card', 'example.png');
    }

    defeated(): void {
        // Empty
    }

    play(): void {
        // Empty
        console.log("I've been played");
    }

    turnHasPassed(): void {
        // Empty
    }


    canPlay(): boolean {
        return true;
    }

    tap(): void {
        // Empty
        console.log("I've been tapped");

    }

}