trigger = require("../trigger")
class onSummon extends trigger{
    // NOR : Boolean
    // FREE : Boolean
    // cardData : object
    constructor(NOR,FREE,cardData){
        super("onSummon",{"METHOD":[NOR,FREE],"CARDDATA":cardData});
    }
    costCal(card,deck){
        let cost= 1;
        if (this.slots.METHOD[0]){
            cost *= 1.2
        }
        if (this.slots.METHOD[1]){
            cost *= 1.2
        }
        cost *= this.slots.CARDDATA.costCal(card,deck);
        return cost;
    }
}
module.exports = onSummon // 👈 Export class