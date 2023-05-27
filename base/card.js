class card{
    constructor(id,noun,adjectives,trib,atk,def,effect){
        this.id = id;
        this.noun = noun;
        this.adjectives = adjectives;
        this.trib = trib;
        this.atk = atk;
        this.def = def;
        this.effect = effect;
    }
    costCal(deck,free,negated){
        let cost=this.atk+this.def+1;
        if (!free){
            cost= cost/this.trib;
        }
        if (!negated){
            cost = cost+this.effect.costCal(this,deck);
        }
        return cost;
    }
}
module.exports = card // 👈 Export class