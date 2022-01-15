const { AssigmentStatementConfig } = require("./config");
const { Builder, extractSyntaxTree } = require('../../../../api/builder');

class AssignmentStatementBuilder extends Builder{


    type(value) {
        this._type = value;
        return this;
    }

    nameBuilder(builder) {
        this._nameBuilder = builder;
        return this;
    }

    valueBuilder(builder) {
        this._valueBuilder = builder;
        return this;
    }

    get typeValue() {
        return this._type;
    }

    get nameSyntaxTree() {
        return extractSyntaxTree(this._nameBuilder);
    }

    get valueSyntaxTree() {
        return extractSyntaxTree(this._valueBuilder);
    }

    build() {
        return new AssigmentStatementConfig(this);
    }
}

module.exports.builder = () => {
    return new AssignmentStatementBuilder();
};