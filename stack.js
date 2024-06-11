class Stack {
    constructor() {
        this.items = [];
    }

    // Añade un elemento al tope de la pila
    push(element) {
        this.items.push(element);
    }

    // Remueve y retorna el elemento en el tope de la pila
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Retorna el elemento en el tope de la pila sin removerlo
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    // Retorna true si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna el número de elementos en la pila
    size() {
        return this.items.length;
    }

    // Vacía la pila
    clear() {
        this.items = [];
    }
}

// Ejemplo de uso de la pila
const stack = new Stack();
console.log(stack.isEmpty());  // true

stack.push(10);
stack.push(20);
stack.push("Victor");
stack.push({ key: "value" });

console.log(stack.peek());  // { key: "value" }
console.log(stack.size());  // 4
console.log(stack.isEmpty());  // false

console.log(stack.pop());  // { key: "value" }
console.log(stack.pop());  // Victor
console.log(stack.size());  // 2

