var base = require("./base")
effect = new base.bTypes.actions.gainATK(1,new base.bTypes.cardData(0,12,0,5,0,5,0,5),2);
console.log(effect.costCal("blank","blank"));