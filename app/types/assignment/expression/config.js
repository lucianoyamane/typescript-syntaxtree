const { Config } = require('../../../../api/config');

class AssigmentExpressionConfig extends Config{

    constructor(builder) {
        super();
        this._type = this.__toSyntaxKind(builder.typeValue);
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._valueSyntaxTree = builder.valueSyntaxTree;
    }

    //TODO: refactoring
    __toSyntaxKind(typeValue) {
        if (typeValue) {
            if (typeValue === '+=') {
                return this.ast.createToken(this.ts.SyntaxKind.PlusEqualsToken);        
            }
        }
        return this.ast.createToken(this.ts.SyntaxKind.EqualsToken);
    }

    syntaxTree() {
        return this.ast.createBinaryExpression(this._nameSyntaxTree, this._type, this._valueSyntaxTree);
    }

}

module.exports.AssigmentExpressionConfig = AssigmentExpressionConfig;