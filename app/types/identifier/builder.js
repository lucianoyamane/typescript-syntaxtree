const { IdentifierConfig } = require("./config");
const { Builder } = require('../../../api/builder');

class IdentifierBuilder extends Builder{

    name(name) {
        this._name = name;
        return this;
    }

    get nameBuilder() {
        return this._name;
    }

    build() {
        return new IdentifierConfig(this);
    }

}

module.exports.builder = () => {
    return new IdentifierBuilder(); 
}