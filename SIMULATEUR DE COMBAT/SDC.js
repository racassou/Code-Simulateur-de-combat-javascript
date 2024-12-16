// Classe pour représenter un personnage
class Combatant {
    constructor(name, health, attack, accuracy) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.accuracy = accuracy;
    }

    attackOpponent(opponent) {
        if (Math.random() < this.accuracy) {
            opponent.health -= this.attack;
            console.log(`${this.name} attaque ${opponent.name} et inflige ${this.attack} degats!`);
        } else {
            console.log(`${this.name} rate son attaque!`);
        }
    }
}

// Initialisation des combattants
const fighter1 = new Combatant('Arthur', 100, 15, 0.7);
const fighter2 = new Combatant('Jarvis', 90, 20, 0.6);

console.log(`Debut du combat entre ${fighter1.name} et ${fighter2.name}!\n`);

// Boucle de combat
while (fighter1.health > 0 && fighter2.health > 0) {
    fighter1.attackOpponent(fighter2);
    if (fighter2.health <= 0) {
        console.log(`${fighter2.name} est vaincu! ${fighter1.name} gagne!`);
        break;
    }

    fighter2.attackOpponent(fighter1);
    if (fighter1.health <= 0) {
        console.log(`${fighter1.name} est vaincu! ${fighter2.name} gagne!`);
        break;
    }

    console.log(`${fighter1.name}: ${fighter1.health} PV, ${fighter2.name}: ${fighter2.health} PV`);
}
