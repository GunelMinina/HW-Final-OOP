class Calculation {
    first;
    second;
    operator;

    constructor(expression) {
        console.log('call constr');
        console.log('expression', expression);
        this.parse(expression)
    }

    parse(expression) {
        var operators = expression.split(/[0-9]+/);
        var operands = expression.split(/[*\/+-]/);

        this.operator = operators[1];
        this.first = Number(operands[0]);
        this.second = Number(operands[1]);
    }
    calculate() {
        switch (this.operator) {
            case '+': return this.first + this.second;
            case '-': return this.first - this.second;
            case '*': return this.first * this.second;
            case '/': return this.first / this.second;
        }
    }

    validate() {
        return this.operator && !isNaN(this.first) && !isNaN(this.second);
    }

    toString() {
        if (this.validate()) {
            return `${this.first} ${this.operator} ${this.second} = ${this.calculate()}`;
        } else {
            return 'Задано неверное выражение';
        }

    }
}

module.exports = {Calculation};
