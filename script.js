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

//