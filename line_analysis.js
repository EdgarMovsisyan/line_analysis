const Stack = require("./stack");

class Validator {

    constructor() {}

    static bracket_analys(line, brackets) {
        const stack = new Stack();

        if(line.length > 0) {
            for(let i = 0; i < line.length; ++i){
                if(line[i] === brackets[0] || line[i] === brackets[1]) {
                    stack.push(line[i]);
                }
            }
        }

        let stack_length = stack.array_stack.length;
        let count = 0;

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

        throw new Error("Invalid line");
    }


    
}

// function bracket_analys(line, brackets) {
//     const stack = new Stack();

//     if(line.length > 0) {
//         for(let i = 0; i < line.length; ++i){
//             if(line[i] === brackets[0] || line[i] === brackets[1]) {
//                 stack.push(line[i]);
//             }
//         }
//     }

    
//     let stack_length = stack.array_stack.length;
//     count = 0;

//         for(let i = 0; i < stack_length; ++i) {
//             if(stack.pop() === brackets[0]) {
//                 count += 1;
//             } else {
//                 count -= 1;
//             }
//         }

//         if(count === 0) {
//             return "valid line";
//         }

//     return "Invalid line";
// }

module.exports = Validator;