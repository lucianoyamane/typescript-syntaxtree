const { identifier } = require('../../../../app/types');

const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('identifier:builder', function() {


    it('builder valido', function(){
        let configTeste = identifier().name('teste').build();
        let resultadoSyntaxTree = configTeste.syntaxTree();

        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultadoSyntaxTree]);
        let resultadoSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        expect(resultadoSyntaxTreeString).to.be.eq('teste\n')

    });

});