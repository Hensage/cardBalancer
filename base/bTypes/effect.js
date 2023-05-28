block = require("../block")
during = require("./during")
class effect extends block{
    constructor(){
        super("effect","effect",{"DURING":new during(),"TRIGGER":undefined,"COND":undefined,"ACTION":undefined});
    }
    setTrigger(trig){
        this.slots.TRIGGER = trig;
    }
    setAction(act){
        this.slots.ACTION = act;
    }
    costCal(card,deck){
        //ADD IN CONDITIONS
        return this.slots.DURING.costCal(card,deck)*this.slots.TRIGGER.costCal(card,deck)*this.slots.ACTION.costCal(card,deck);
    }
}
module.exports = effect // 👈 Export class