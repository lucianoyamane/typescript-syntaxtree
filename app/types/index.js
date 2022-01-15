module.exports = {
    assignment :{
        expression: require('./assignment/expression').builder,
        statement: require('./assignment/statement').builder
    },
    block: {
        statement: require('./block.statement').builder
    },
    identifier: require('./identifier').builder
};