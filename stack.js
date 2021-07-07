class Stack {

    #array_stack = [];

    constructor() {}

    get array_stack() {
        return this.#array_stack;
    }

    push(element) {
        this.#array_stack.push(element);
    }

    pop() {
        if(this.array_stack.length) {
            let peek_elem = this.#array_stack[this.#array_stack.length - 1];
            this.#array_stack.length = this.#array_stack.length - 1;

            return peek_elem;
        }

        return "empty stack";
    }
}

module.exports = Stack;