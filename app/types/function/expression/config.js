const { Config } = require('../../../../api/config');

class FunctionExpressionConfig extends Config{

    constructor(builder) {
        super();
        this._nameSyntaxTree = builder.nameSyntaxTree || '';
        this._paramArraySyntaxtTree = builder.paramArraySyntaxTree;
        this._blockSyntaxTree = builder.blockSyntaxTree;
    }

    syntaxTree() {
        //TODO: check anonymous function
        return this.ast.createMethodDeclaration(undefined, undefined, undefined, this._nameSyntaxTree, undefined, undefined, this._paramArraySyntaxtTree, undefined, this._blockSyntaxTree);
    }

}

module.exports.FunctionExpressionConfig = FunctionExpressionConfig;