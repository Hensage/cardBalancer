var base = require("./base");
/*
var action = new base.bTypes.actions.gainATK(1,new base.bTypes.cardData(0,12,0,5,0,5,0,5),2);
var trigger = new base.bTypes.triggers.onSummon(true,true,new base.bTypes.cardData(0,12,0,5,0,5,0,5))
var during = new base.bTypes.during(false,true,false,false,false,false,false,false)
var effect = new base.bTypes.effect(1,during,trigger,[],action)
var card = new base.card(0,"cat",["scary"],0,2,1,effect)
*/
var deck = [new base.card(0),new base.card(1)]
deck[0].setNoun("cat");
deck[0].addAdj("scary");
deck[0].setTrib(0);
deck[0].setAtk(2)
deck[0].setAtk(1);
deck[0].effect.setTrigger(new base.bTypes.triggers.onSummon())
deck[0].effect.setAction(new base.bTypes.actions.gainATK())
deck[0].effect.slots.ACTION.setNum(2);
console.log(JSON.stringify(deck[0]));