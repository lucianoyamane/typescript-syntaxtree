const { functionType, identifier } = require('../types');
const { Director } = require('./director');
const { director: blockDirector } = require('./block.director');

class FunctionExpressionDirector extends Director {

    constructor(higherBuilder) {
        super('function_expression', functionType.expression(),higherBuilder);
        this._paramsBuilder = [];
        this.__initBlock();
    }

    __initBlock() {
        this._blockDirector = blockDirector(this);
    }

    name(value) {
        this._nameBuilder = identifier().name(value);
        return this;
    }

    addParam(name) {
        this._paramsBuilder.push(identifier().name(name));
        return this;
    }

    block(blockParam) {
        if (blockParam) {
            this._blockDirector = blockParam;
            return this;
        }
        return this._blockDirector;
    }

    configBuilder() {
        if (this._nameBuilder) {
            this.mainBuilder.name(this._nameBuilder);
        }
        this._paramsBuilder.forEach(builder => this.mainBuilder.addParam(builder));
        this.mainBuilder.block(this._blockDirector.toBuilder());
    }

}

module.exports.director = (higherBuilder) => { return new FunctionExpressionDirector(higherBuilder) }