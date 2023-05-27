class block{
    constructor(id,type,slots){
        this.id = id;
        this.type = type;
        this.slots = slots;
        this.cost = 1;
        this.complete = false;
    }
    costCal(card,deck){}
}
module.exports = block // 👈 Export class