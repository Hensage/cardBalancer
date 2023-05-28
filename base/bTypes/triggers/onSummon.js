const cardData = require("../cardData");
trigger = require("../trigger")
cardData
class onSummon extends trigger{
    // NOR : Boolean
    // FREE : Boolean
    // cardData : object
    constructor(){
        super("onSummon",{"METHOD":[true,true],"CARDDATA":new cardData()});
    }
    setMethod(meths){
        if (meths.length == 2){
            this.slots.METHOD = meths;
            return true;
        }
        return false;
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