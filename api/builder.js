class Builder {

    build() {
    }
}

let extractSyntaxTree = (builder) => {
    if (!builder) {
        return undefined;
    }
    return builder.build().syntaxTree();
}

let extractArraySyntaxTree = (builderArray) => {
    let syntaxTreeArray = [];
    builderArray.forEach(builder => syntaxTreeArray.push(extractSyntaxTree(builder)));
    return syntaxTreeArray;
}

module.exports.Builder = Builder;
module.exports.extractSyntaxTree = extractSyntaxTree;
module.exports.extractArraySyntaxTree = extractArraySyntaxTree;