block = require("../block")
class during extends block{
    // All Boolean
    //YDP,YSP,YBP,YPP,ODP,OSP,OBP,OPP
    constructor(){
        super("during","during",{"PHASES":[false,true,false,false,false,false,false,false]});
    }
    setPhases(phases){
        if (phases.length!=8){
            return false;
        }
        for (i=0;i<8;i++){
            this.slots.PHASES[i] =phases[i]
        }
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