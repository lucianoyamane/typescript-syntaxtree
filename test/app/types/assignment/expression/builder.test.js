const { assignment, identifier } = require('../../../../../app/types');

const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.expression:builder', function() {


    it('builder valid', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultadoConfig = assignment.expression().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultadoConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultSyntaxTreeString).to.be.eq('test_name = test_value\n');

    });

    it('builder configurable', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');

        let resultadoBuilder = assignment.expression().nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder);
        testeNameBuilder.name('test_new_name');

        
        let resultadoConfig = resultadoBuilder.build();
        let resultSyntaxTree = resultadoConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultSyntaxTreeString).to.be.eq('test_new_name = test_value\n');

    });

    it('builder valido type', function(){
        let testeNameBuilder = identifier().name('test_name');
        let testeValueBuilder = identifier().name('test_value');
        let resultadoConfig = assignment.expression().type('+=').nameBuilder(testeNameBuilder).valueBuilder(testeValueBuilder).build();
        let resultSyntaxTree = resultadoConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultSyntaxTreeString).to.be.eq('test_name += test_value\n')

    });

});