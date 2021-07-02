const Stack = require("./stack");

function bracket_analys(line, brackets) {
    const stack = new Stack();

    if(line.length > 0) {
        for(let i = 0; i < line.length; ++i){
            if(line[i] === brackets[0] || line[i] === brackets[1]) {
                stack.push(line[i]);
            }
        }
    }

    let stack_length = stack.array_stack.length;
    count = 0;

    if(stack.array_stack[0] === stack.array_stack[stack_length - 1]) {
        return "invalid line";
    }
        for(let i = 0; i < stack_length; ++i) {
            if(stack.pop() === brackets[0]) {
                count += 1;
            } else {
                count -= 1;
            }
        }

        if(count === 0) {
            return "valid line";
        }

    return "Invalid line";
}

module.exports = {
    bracket_analys
};