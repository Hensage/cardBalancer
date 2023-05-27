block = require("../block")
class action extends block{
    constructor(id,slots){
        super(id,"action",slots);
    }
}
module.exports = action // 👈 Export class