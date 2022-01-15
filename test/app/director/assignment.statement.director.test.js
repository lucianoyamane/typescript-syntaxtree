const { assignment } = require('../../../app/director');


var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:director', function() {

    it('fill name value', function(){
        let codeResult = assignment().name('test_name').value('test_value').toString();
        expect(codeResult).to.be.eq('test_name = test_value;\n')
    })

    it('fill value null', function(){
        let codeResult = assignment().name('test_name').toString();
        expect(codeResult).to.be.eq('test_name = null;\n')
    })

})