action = require("../action")
class gainATK extends action{
    // Count : (currently) INT
    // cardData : object
    // num : INT
    constructor(count,cardData,num){
        super("gainATK",{"COUNT":count,"CARDDATA":cardData,"NUM":num});
    }
    costCal(card,deck){
        let cost = this.slots.NUM/10;
        cost *= this.slots.COUNT;
        cost *= this.slots.CARDDATA.costCal(card,deck);
        return cost;
    }
}
module.exports = gainATK // 👈 Export class