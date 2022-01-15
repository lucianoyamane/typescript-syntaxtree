const { assignment, identifier, block } = require('../../../../app/types');

const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('block.statement:builder', function() {


    it('builder valido', function(){
        let identifierOneBuilder = identifier().name('identifier_one');
        let identifierTwoBuilder = identifier().name('identifier_two');
        let assignmentBuilder = assignment.statement().nameBuilder(identifierOneBuilder).valueBuilder(identifierTwoBuilder);
        let blockStatementConfig = block.statement().addItem(assignmentBuilder).build();


        let resultSyntaxTree = blockStatementConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        let expected = '{\n' +
                        '    identifier_one = identifier_two;\n' +
                        '}\n';

        expect(resultSyntaxTreeString).to.be.eq(expected)

    });

});