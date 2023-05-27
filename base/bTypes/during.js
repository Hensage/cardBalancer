block = require("../block")
class during extends block{
    // All Boolean
    constructor(YDP,YSP,YBP,YPP,ODP,OSP,OBP,OPP){
        super("during","during",{"PHASES":[YDP,YSP,YBP,YPP,ODP,OSP,OBP,OPP]});
    }
    costCal(card,deck){
        let weights = [1.2, 1.5, 1.2, 1.2,
                    2.2, 2.5, 2.2, 2.2];
        let cost = 1;
        this.slots.PHASES.forEach((element,index) => {
            if (element){
                cost *= weights[index];
            }
        });
        return cost;
    }
}
module.exports = during // 👈 Export class