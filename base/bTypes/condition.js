block = require("../block")
class condition extends block{
    constructor(id,slots){
        super(id,"condition",slots);
    }
}
module.exports = condition // 👈 Export class