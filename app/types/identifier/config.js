const { Config } = require('../../../api/config');

class IdentifierConfig extends Config{

    constructor(builder) {
        super();
        this._name = builder.nameBuilder;
    }

    syntaxTree() {
        return this.ast.createIdentifier(this._name);
    }

}

module.exports.IdentifierConfig = IdentifierConfig;