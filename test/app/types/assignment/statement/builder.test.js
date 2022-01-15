const { assignment, identifier } = require('../../../../../app/types');

const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.statement().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultSyntaxTreeString).to.be.eq('test_name = test_value;\n')

    });

    it('builder valid type', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultConfig = assignment.statement().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultSyntaxTreeString).to.be.eq('test_name += test_value;\n')

    });

});