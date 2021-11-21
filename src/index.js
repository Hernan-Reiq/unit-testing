module.exports = {
    sum: (a, b) => {
        return a + b;
    },
    res: (a, b) => {
        return a - b;
    },
    printName: (name) => {
        return `Hola ${name}`
    },
    arrayPrinter: (array) => {
        return [0, 1, 2, 3, ...array];
    }
}