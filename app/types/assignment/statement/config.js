const { Config } = require('../../../../api/config');

class AssigmentStatementConfig extends Config{

    constructor(builder) {
        super();
        this._type = this.__toSyntaxKind(builder.typeValue);
        this._nameSyntaxTree = builder.nameSyntaxTree;
        this._valueSyntaxTree = builder.valueSyntaxTree;
    }

    __toSyntaxKind(typeValue) {
        if (typeValue) {
            if (typeValue === '+=') {
                return this.ast.createToken(this.ts.SyntaxKind.PlusEqualsToken);        
            }
        }
        return this.ast.createToken(this.ts.SyntaxKind.EqualsToken);
    }

    syntaxTree() {
        let expression = this.ast.createBinaryExpression(this._nameSyntaxTree, this._type, this._valueSyntaxTree);
        return this.ast.createExpressionStatement(expression);
    }

}

module.exports.AssigmentStatementConfig = AssigmentStatementConfig;