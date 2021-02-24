import {CardId} from "@/card-quest/cards/CardId";
import {PlayableCard} from "@/card-quest/cards/abstract/PlayableCard";
import {ToolCard} from "@/card-quest/cards/content/action/ToolCard";
import {ToolType} from "@/card-quest/adventure/tools/ToolType";
import {ToolTier} from "@/card-quest/adventure/tools/ToolTier";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Deck} from "@/card-quest/cards/Deck";
import {EnemyCard} from "@/card-quest/cards/content/monster/EnemyCard";
import {MagicTouchCard} from "@/card-quest/cards/content/action/MagicTouchCard";
import {WoodCard} from "@/card-quest/cards/content/resource/WoodCard";
import {EnumHelpers} from "@/ig-template/tools/EnumHelpers";
import {IdDeck} from "@/card-quest/cards/IdDeck";
import {OreCard} from "@/card-quest/cards/content/resource/OreCard";
import {WeaponCard} from "@/card-quest/cards/content/weapon/WeaponCard";
import {Weapon} from "@/card-quest/adventure/Weapon";
import {DrawCardsCard} from "@/card-quest/cards/content/action/DrawCardsCard";
import {GrainCard} from "@/card-quest/cards/content/resource/GrainCard";
import {HealingCard} from "@/card-quest/cards/content/action/HealingCard";

export class CardRepository {

    public static getCard(id: CardId): PlayableCard {
        switch (id) {
            case CardId.LogCard:
                return new WoodCard(CardId.LogCard, 'Log', 'Gain 2 wood when cut down', 'log.svg', 3, new Currency(2, CurrencyType.Wood));
            case CardId.TreeCard:
                return new WoodCard(CardId.TreeCard, 'Tree', 'Gain 5 wood when cut down', 'tree.svg', 6, new Currency(5, CurrencyType.Wood));
            case CardId.ForestCard:
                return new WoodCard(CardId.ForestCard, 'Forest', 'Gain 10 wood when cut down', 'forest.svg', 15, new Currency(10, CurrencyType.Wood));

            case CardId.BronzeOre:
                return new OreCard(CardId.BronzeOre, 'Bronze ore', 'Gain 1 bronze ore when mined', 'ore-bronze.svg', 3, new Currency(1, CurrencyType.Bronze));
            case CardId.SilverOre:
                return new OreCard(CardId.BronzeOre, 'Silver ore', 'Gain 1 silver ore when mined', 'ore-silver.svg', 6, new Currency(1, CurrencyType.Silver));
            case CardId.GoldOre:
                return new OreCard(CardId.BronzeOre, 'Gold ore', 'Gain 1 gold ore when mined', 'ore-gold.svg', 15, new Currency(1, CurrencyType.Gold));

            case CardId.SmallGrain:
                return new GrainCard(CardId.SmallGrain, 'Grain', 'Gain 2 grain when cut down', 'grain.svg', 3, new Currency(2, CurrencyType.Grain));
            case CardId.MediumGrain:
                return new GrainCard(CardId.MediumGrain, 'Straw', 'Gain 5 grain when cut down', 'straw.svg', 6, new Currency(5, CurrencyType.Grain));


            case CardId.Bread:
                return new HealingCard(CardId.Bread, 'Bread', 'Heal 5 hitpoints', 'bread.svg', 5).setCosts([new Currency(3, CurrencyType.Grain)]);

            // Actions
            case CardId.MagicTouch:
                return new MagicTouchCard().setCosts([new Currency(2, CurrencyType.Souls)]);
            case CardId.Draw3Card:
                return new DrawCardsCard(CardId.Draw3Card, 'draw-card.svg', 3).setCosts([new Currency(1, CurrencyType.Souls)]);
            // Weapons
            case CardId.BasicSword:
                return new WeaponCard(CardId.BasicSword, 'Basic Sword', "A bit stronger", 'sword.svg', new Weapon('Basic Sword', 2, 0)).setCosts([new Currency(2, CurrencyType.Wood), new Currency(1, CurrencyType.Bronze)])

            // Enemies
            case CardId.Chicken:
                return new EnemyCard(CardId.Chicken, 'Chicken', 'Cluck cluck.\nGain 1 soul on defeat', 'chicken.svg', 2, 1, 1, 0, 3);
            case CardId.Cow:
                return new EnemyCard(CardId.Cow, 'Cow', 'Moo?\nGain 2 souls on defeat', 'cow.svg', 5, 2, 2, 0, 3);
            case CardId.Pig:
                return new EnemyCard(CardId.Pig, 'Pig', 'Oink oink\nGain 1 soul on defeat', 'pig.svg', 3, 1, 2, 0, 2);


            // Tools
            case CardId.BronzeAxe:
                return new ToolCard(CardId.BronzeAxe, 'Bronze axe', '+1 woodcutting damage', 'hatchet-bronze.svg', ToolType.Axe, ToolTier.Bronze).setCosts([new Currency(4, CurrencyType.Wood), new Currency(2, CurrencyType.Bronze)]);
            case CardId.SilverAxe:
                return new ToolCard(CardId.SilverAxe, 'Silver axe', '+2 woodcutting damage', 'hatchet-silver.svg', ToolType.Axe, ToolTier.Silver).setCosts([new Currency(10, CurrencyType.Wood), new Currency(3, CurrencyType.Silver)]);
            case CardId.GoldAxe:
                return new ToolCard(CardId.GoldAxe, 'Gold axe', '+3 woodcutting damage', 'hatchet-gold.svg', ToolType.Axe, ToolTier.Gold).setCosts([new Currency(20, CurrencyType.Wood), new Currency(5, CurrencyType.Gold)]);

            case CardId.BronzePickaxe:
                return new ToolCard(CardId.BronzePickaxe, 'Bronze Pickaxe', '+1 mining damage', 'pickaxe-bronze.svg', ToolType.Pickaxe, ToolTier.Bronze).setCosts([new Currency(4, CurrencyType.Wood), new Currency(2, CurrencyType.Bronze)]);
            case CardId.SilverPickaxe:
                return new ToolCard(CardId.SilverPickaxe, 'Silver Pickaxe', '+2 mining damage', 'pickaxe-silver.svg', ToolType.Pickaxe, ToolTier.Silver).setCosts([new Currency(4, CurrencyType.Wood), new Currency(3, CurrencyType.Silver)]);
            case CardId.GoldPickaxe:
                return new ToolCard(CardId.GoldPickaxe, 'Gold Pickaxe', '+3 mining damage', 'pickaxe-gold.svg', ToolType.Pickaxe, ToolTier.Gold).setCosts([new Currency(4, CurrencyType.Wood), new Currency(5, CurrencyType.Gold)]);

            case CardId.BronzeScythe:
                return new ToolCard(CardId.BronzeScythe, 'Bronze Scythe', '+1 foraging damage', 'scythe-bronze.svg', ToolType.Scythe, ToolTier.Bronze).setCosts([new Currency(4, CurrencyType.Wood), new Currency(2, CurrencyType.Bronze)]);
            case CardId.SilverScythe:
                return new ToolCard(CardId.SilverScythe, 'Silver Scythe', '+2 foraging damage', 'scythe-silver.svg', ToolType.Scythe, ToolTier.Silver).setCosts([new Currency(4, CurrencyType.Wood), new Currency(3, CurrencyType.Silver)]);
            case CardId.GoldScythe:
                return new ToolCard(CardId.GoldScythe, 'Gold Scythe', '+3 foraging damage', 'scythe-gold.svg', ToolType.Scythe, ToolTier.Gold).setCosts([new Currency(4, CurrencyType.Wood), new Currency(5, CurrencyType.Gold)]);


            default:
                throw new Error(`Card with id ${id} not found.`)
        }
    }

    public static getAllCardsIds(): CardId[] {
        return EnumHelpers.getValues(CardId);
    }

    public static getDeckFromString(deckString: string): Deck | null {
        try {
            const ids = deckString.split('.').map(string => {
                return parseInt(string);
            });
            return this.getDeckFromCardIds(ids);
        } catch (e) {
            return null;
        }
    }

    public static getDeckFromIdDeck(idDeck: IdDeck): Deck {
        // TODO Ugly but it works
        return this.getDeckFromString(idDeck.toDeckString()) ?? new Deck();
    }

    public static getIdDeckFromString(deckString: string): IdDeck | null {
        try {
            const ids = deckString.split('.').map(string => {
                return parseInt(string);
            });
            const idDeck = new IdDeck();
            for (const id of ids) {
                idDeck.addCard(id);
            }
            return idDeck;
        } catch (e) {
            return null;
        }
    }

    public static getDeckFromCardIds(ids: CardId[]): Deck {
        const cards = ids.map(id => {
            return this.getCard(id);
        })
        return new Deck(cards);
    }
}