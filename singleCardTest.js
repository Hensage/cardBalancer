var base = require("./base");
var action = new base.bTypes.actions.gainATK(1,new base.bTypes.cardData(0,12,0,5,0,5,0,5),2);
var trigger = new base.bTypes.triggers.onSummon(true,true,new base.bTypes.cardData(0,12,0,5,0,5,0,5))
var during = new base.bTypes.during(false,true,false,false,false,false,false,false)
var effect = new base.bTypes.effect(1,during,trigger,[],action)
var card = new base.card(0,"cat",["scary"],0,2,1,effect)
console.log(card.costCal("blank",false,false));