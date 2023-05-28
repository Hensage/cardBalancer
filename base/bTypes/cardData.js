block = require("../block")
class cardData extends block{
    constructor(){
        super("cardData","action",{"ARCH":"","TRIB":[0,12],"ATK":[0,999],"DEF":[0,999]});
    }
    setData(ARCH,LTRIB,HTRIB,LATK,HATK,LDEF,HDEF){
        if (LTRIB < HTRIB && LATK<HATK && LDEF<HDEF){
            this.slots.ARCH = ARCH;
            this.slots.TRIB = [LTRIB,HTRIB];
            this.slots.ATK = [LATK,HATK];
            this.slots.DEF = [LDEF,HDEF];
            return true;
        }
        return false;
    }
    costCal(card,deck){
        return 1;
    }
}
module.exports = cardData // 👈 Export class