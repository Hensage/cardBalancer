block = require("../block")
class effect extends block{
    constructor(id,during,trigger,conditions,action){
        super(id,"effect",{"DURING":during,"TRIGGER":trigger,"COND":conditions,"ACTION":action});
    }
    costCal(card,deck){
        //ADD IN CONDITIONS
        return this.slots.DURING.costCal(card,deck)*this.slots.TRIGGER.costCal(card,deck)*this.slots.ACTION.costCal(card,deck);
    }
}
module.exports = effect // 👈 Export class