// Part 1: Stack Overflow

let counter = 0;

function recursiveIncrements() {
    counter += 1;
    recursiveIncrements();
}

try {
    recursiveIncrements();
} catch (err) {
    console.log(counter);
}

// Part 2: Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

function flattenArray(arr){
    let result = arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            acc = acc.concat(flattenArray(cur));
        } else {
            acc.push(cur);
        }
        return acc
    }, []);
    return result;
}

let array = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(array));

// Part 3: Deferred Execution

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.


// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.


// Once complete, use the alert() method to alert the user that the calculation is finished.