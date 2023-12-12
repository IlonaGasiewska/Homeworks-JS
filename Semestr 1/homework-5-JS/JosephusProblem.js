class Soldier {
    status = "alive";

    constructor(number) {
        this.number = number;
        this.killedOtherSoldiers = [];
    };

    changeStatus(killerNum) {
        this.status = "died";
        console.log(`Solider ${this.number} Killed by ${killerNum}`);
    };

    addKilledOtherSoldiers(numKilledSolider) {
        this.killedOtherSoldiers.push(`Soldier ${numKilledSolider}}`);
    };
};

const soldiers = [];

function renderSoldiers(soldiersQuantity) {
    for (let i = 1; i <= soldiersQuantity; i++) {
        const soldier = new Soldier(i);
        soldiers.push(soldier);
    }
    return soldiers;
};

function getKilledSoldiers() {
    let aliveSoldiers = [...soldiers];

    while (aliveSoldiers.length !== 1) {
        for (let i = 0; i <= aliveSoldiers.length - 1; i++) {
            aliveSoldiers[i+1] === undefined ? aliveSoldiers[i + 1] = aliveSoldiers[0] : null;

            aliveSoldiers[i].addKilledOtherSoldiers(aliveSoldiers[i + 1].number);
            aliveSoldiers[i + 1].changeStatus(aliveSoldiers[i].number);
            
            aliveSoldiers = aliveSoldiers.filter(soldier => soldier.status === "alive");
        };
    };

    return aliveSoldiers;
}

renderSoldiers(7);
console.log(getKilledSoldiers());
