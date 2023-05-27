block = require("../block")
class cardData extends block{
    constructor(LARCH,HARCH,LTRIB,HTRIB,LATK,HATK,LDEF,HDEF){
        super("cardData","action",{"ARCH":[LARCH,HARCH],"TRIB":[LTRIB,HTRIB],"ATK":[LATK,HATK],"DEF":[LDEF,HDEF]});
    }
    costCal(card,deck){
        return 1;
    }
}
module.exports = cardData // 👈 Export class