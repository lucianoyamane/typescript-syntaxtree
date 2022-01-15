const { assignment, identifier, block, functionType } = require('../../../../../app/types');
const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('assignment.statement:builder', function() {

    it('basic test', function(){
        let blockBuilder = block.statement();
        let testNameFunctionBuilder = identifier().name('test_name_function');
        let resultadoConfig = functionType.expression().name(testNameFunctionBuilder).block(blockBuilder).build();
        

        let resultSyntaxTree = resultadoConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        let expected = 'test_name_function() {\n' +
                        '}\n';

        expect(resultSyntaxTreeString).to.be.eq(expected)

    });
    
    
    it('complete test', function(){
        let testNameFunctionBuilder = identifier().name('test_name_function');
        let testParamBuilder = identifier().name('test_param');
        let testNameBuilder = identifier().name('test_name');
        let testValueBuilder = identifier().name('test_value');
        let assignmentBuilder = assignment.statement().nameBuilder(testNameBuilder).valueBuilder(testValueBuilder);
        let blockBuilder = block.statement().addItem(assignmentBuilder);
        
        let resultadoConfig = functionType.expression().name(testNameFunctionBuilder).addParam(testParamBuilder).block(blockBuilder).build();


        let resultSyntaxTree = resultadoConfig.syntaxTree();
        let tempSourceFile = ts.createSourceFile('./temp.ts', '', ts.ScriptTarget.ES3, true, ts.ScriptKind);
        let sourceFile = ts.factory.updateSourceFile(tempSourceFile, [resultSyntaxTree]);
        let resultSyntaxTreeString = ts.createPrinter().printFile(sourceFile);

        let expected = 'test_name_function(test_param) {\n' +
                        '    test_name = test_value;\n' +
                        '}\n';

        expect(resultSyntaxTreeString).to.be.eq(expected)

    });

});