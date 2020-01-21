class Fighter {

    constructor(properties) {
        const REQUIRED_FIELDS = ['name', 'damage', 'hp', 'strength', 'agility'];
        for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
            if (properties[REQUIRED_FIELDS[i]] === undefined) {
                throw `no ${REQUIRED_FIELDS[i]} property`;
            }
        }

        let _properties = JSON.parse(JSON.stringify(properties));
        let _wins = 0;
        let _loses = 0;
        const PRIMARY_HP = _properties.hp;

        this.getName = function () {
            return _properties.name;
        }
        this.getDamage = function () {
            return _properties.damage;
        }
        this.getHealth = function () {
            return _properties.hp;
        }
        this.getStrength = function () {
            return _properties.strength;
        }
        this.getAgility = function () {
            return _properties.agility;
        }
        this.addWin = function () {
            return _wins++;
        }
        this.addLoss = function () {
            return _loses++;
        }

        this.dealDamage = function (reduceAmount) {
            _properties.hp = _properties.hp - reduceAmount;
            if (_properties.hp < 0) {
                _properties.hp = 0;
            }
        }

        this.heal = function (hp) {
            if ((_properties.hp += hp) > PRIMARY_HP) {
                _properties.hp = PRIMARY_HP;
            } else {
                _properties.hp += hp;
            }
        }

        this.logCombatHistory = function () {
            return `Name: ${this.getName()}, Wins: ${_wins}, Losses: ${_loses}`;
        }
    }

    attack(otherFighter) {
        const maxPercents = 100;
        let attackFailProbability = otherFighter.getStrength() + otherFighter.getAgility();
        if (Math.floor(Math.random() * (maxPercents + 1)) >= attackFailProbability) {
            otherFighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${otherFighter.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        return `${firstFighter.getName()} is dead and cannot fight!`;
    } else if (secondFighter.getHealth() === 0) {
        return `${secondFighter.getName()} is dead and cannot fight!`;
    } else {
        while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter);
            if (secondFighter.getHealth() > 0) {
                secondFighter.attack(firstFighter);
            }
        }

        if (firstFighter.getHealth() === 0 && secondFighter.getHealth() > 0) {
            firstFighter.addLoss();
            secondFighter.addWin();
            return `${secondFighter.getName()} has won!`;
        } else {
            secondFighter.addLoss();
            firstFighter.addWin();
            return `${firstFighter.getName()} has won!`;
        }
    }
}

// let myParams1 = {name: 'Cathy', hp: 50, damage: 10, strength: 50, agility: 45}; 
// let myParams2 = {name: 'Maximus', hp: 10, damage: 10, strength: 50, agility: 10}; 

// let fighter1 = new Fighter(myParams1);
// let fighter2 = new Fighter(myParams2);

// battle(fighter1, fighter2);

// fighter1.getHealth();
// fighter2.getHealth();
// fighter1.logCombatHistory();
// fighter2.logCombatHistory();