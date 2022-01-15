const { block } = require('../types');
const { Director } = require('./director');
const { director: assignmentDirector } = require('./assignment.statement.director')

class BlockDirector extends Director {

    constructor(higherBuilder) {
        super('block', block.statement(), higherBuilder);
        this._directors = [];
        this._statementsKey = ['assignment.statement', 'block'];
    }

    __validate(key) {
        return this._statementsKey.includes(key);
    }

    add(director) {
        if (this.__validate(director.key)) {
            this._directors.push(director);
            return this;
        }
        throw new Error('invalid.director');
        
    }

    assignment() {
        let assignmentDirectorItem = assignmentDirector(this);
        this._directors.push(assignmentDirectorItem);
        return assignmentDirectorItem;
    }

    configBuilder() {
        this._directors.forEach(director => this.mainBuilder.addItem(director.toBuilder()));
    }

}

module.exports.director = (higherBuilder) => { return new BlockDirector(higherBuilder) }