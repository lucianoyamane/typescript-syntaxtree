const { assignment, identifier } = require('../types');
const { Director } = require('./director')

class AssignmentStatementDirector extends Director {

    constructor(higherBuilder) {
        super('assignment.statement', assignment.statement(), higherBuilder);
    }

    name(value) {
        this._name = value;
        return this;
    }

    value(value) {
        this._value = value;
        return this;
    }

    __builderName() {
        if (!this._name) {
            throw new Error('name null');
        }
        return identifier().name(this._name);
    }

    __builderValue() {
        return identifier().name(this._value || 'null');
    }

    configBuilder() {
        this.mainBuilder
                .nameBuilder(this.__builderName())
                .valueBuilder(this.__builderValue());
    }

}

module.exports.director = (higherBuilder) => { return new AssignmentStatementDirector(higherBuilder) }