const ts = require('typescript');
var chai = require('chai');
var expect = chai.expect;


describe('fetures:test', function() {


    it('toCode test', function(){
        const node = ts.createSourceFile(
            'x.ts',`
              import { Component } from '@angular/core';
              @Component({selector: 'my', template: 'hello me.' })
              export class MyComponent {}`,
            ts.ScriptTarget.Latest
          );

          expect(node).to.be.not.null;

    });

    it('change code', function(){
        const node = ts.createSourceFile(
            'x.ts',`
              import { Component } from '@angular/core';
              @Component({selector: 'my', template: 'hello me.' })
              export class MyComponent {}`,
            ts.ScriptTarget.Latest
          );
        var classDecl;
        node.forEachChild(child => {
            if (ts.SyntaxKind[child.kind] === 'ClassDeclaration') {
            classDecl = child;
            }
        });
        classDecl.name.escapedText = 'ClassNameChanged';
        const printer = ts.createPrinter();
        const newContent = printer.printFile(node);

        let expected = 'import { Component } from "@angular/core";\n' +
                        '@Component({ selector: "my", template: "hello me." })\n' +
                        'export class ClassNameChanged {\n' +
                        '}\n';
        expect(newContent).to.be.eql(expected);
    });

});