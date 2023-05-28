action = require("../action")
const cardData = require("../cardData");
class gainATK extends action{
    // Slots
    // Count : (currently) INT
    // cardData : object
    // num : INT
    constructor(){
        super("gainATK",{"COUNT":1,"CARDDATA":new cardData(),"NUM":0});
    }
    setCount(num){
        if (num >= 1){
            this.slots.COUNT=num;
            return true;
        }
        return false;
    }
    setNum(num){
        if (num >= 0){
            this.slots.NUM=num;
            return true;
        }
        return false;
    }
    costCal(card,deck){
        let cost = this.slots.NUM/10;
        cost *= this.slots.COUNT;
        cost *= this.slots.CARDDATA.costCal(card,deck);
        return cost;
    }

}
module.exports = gainATK // 👈 Export class