const { Config } = require('../../../api/config');

class BlockStatementConfig extends Config{

    constructor(builder) {
        super();
        this._arraySyntaxTree = builder.arraySyntaxTree;
    }

    syntaxTree() {
        return this.ast.createBlock(this._arraySyntaxTree, true);
    }

}

module.exports.BlockStatementConfig = BlockStatementConfig;