block = require("../block")
class trigger extends block{
    constructor(id,slots){
        super(id,"trigger",slots);
    }
}
module.exports = trigger // 👈 Export class