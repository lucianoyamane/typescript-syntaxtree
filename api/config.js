const ts = require('typescript');
const factory = ts.factory;

class Config {

    constructor() {
        this.ast = factory;
        this.ts = ts;
    }



    syntaxTree() {
    }

}

module.exports.Config = Config;