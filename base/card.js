effect = require("./bTypes/effect");
class card{
    constructor(id){
        this.id = id;
        this.noun;
        this.adjectives = [];
        this.trib = 0;
        this.atk = 0;
        this.def = 0;
        this.effect = new effect();
    }
    setNoun(noun){
        this.noun = noun;
    }
    addAdj(adj){
        if (this.adjectives <= 3){
            this.adjectives.push(adj);
            return true
        }
        return false
    }
    remAdj(adj){
        let temp = this.adjectives.indexOf(adj);
        if (temp != -1){
            this.adjectives.splice(temp,1);
            return true
        }
        return false
    }
    setTrib(num){
        if (num >= 0 && num <= 5){
            this.trib = num;
        }
    }
    setAtk(num){
        if (num >= 0){
            this.atk = num;
        }
    }
    setDef(num){
        if (num >= 0){
            this.def = num;
        }
    }
    costCal(deck,free,negated){
        let cost=this.atk+this.def+1;
        if (!free){
            cost= cost/(this.trib+1);
        }
        if (!negated){
            cost = cost+this.effect.costCal(this,deck);
        }
        return cost;
    }
}
module.exports = card // 👈 Export class