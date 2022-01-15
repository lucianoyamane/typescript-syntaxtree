const { function_expression, block } = require('../../../app/director');


var chai = require('chai');
var expect = chai.expect;


describe('function.expression:director', function() {

    it('basic', function(){
        let codeResult = function_expression().name('function_name').toString();
        let expected = 'function_name() {\n' +
            '}\n';
        expect(codeResult).to.be.eq(expected)
    })
    
    it('name param', function(){
        let codeResult = function_expression().name('function_name').addParam('param_1').toString();
        let expected = 'function_name(param_1) {\n' +
            '}\n';
        
        expect(codeResult).to.be.eq(expected)
    })

    it('add block', function(){
        let blockTest = block().assignment().name('test_name').value('test_value').end();
        let codeResult = function_expression().name('function_name').block(blockTest).toString();

        let expected = 'function_name() {\n' +
            '    test_name = test_value;\n' +
            '}\n';

        expect(codeResult).to.be.eq(expected)
    })


    it('add block nested', function(){
        let codeResult = function_expression()
                            .name('function_name')
                            .block()
                                .assignment()
                                    .name('test_name')
                                    .value('test_value')
                                .end()
                            .end()
                        .toString();

        let expected = 'function_name() {\n' +
            '    test_name = test_value;\n' +
            '}\n';

        expect(codeResult).to.be.eq(expected)
    })

})