const ts = require('typescript');
const factory = ts.factory;

class Config {

    constructor() {
        //TODO: refactoring
        this.ast = factory;
        this.ts = ts;
    }



    syntaxTree() {
    }

}

module.exports.Config = Config;