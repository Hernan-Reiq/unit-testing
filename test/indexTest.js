const assert = require('chai').assert;
const index = require('../src/index.js');

//results
const sumTest = index.sum(10, 10);
const resTest = index.res(20, 10);
const printName = index.printName('Hernan');
const arrayTest = index.arrayPrinter([5, 6, 7]);

describe('Index Suite', () => {
    describe('Operaciones matemáticas - sum Method', () => {
        it(`Se espera obtener un ${sumTest}`, () => {
            assert.equal(sumTest, 20)
        })
        it(`Tipo de dato es un número`, () => {
            assert.typeOf(sumTest, 'number', 'No es un número')
        })
        it(`Es menor a 50`, () => {
            assert.isBelow(sumTest, 50)
        })
    })
    describe('Operaciones matemáticas - res Method', () => {
        it(`Se espera obtener un ${resTest}`, () => {
            assert.equal(resTest, 10)
        })
        it(`Tipo de dato es un número`, () => {
            assert.typeOf(resTest, 'number', 'No es un número')
        })
    })
    describe('Cadena de texto - printName Method', () => {
        it(`Se espera obtener un texto`, () => {
            assert.equal(printName, 'Hola Hernan')
        })
        it(`Tipo de dato es una cadena de texto`, () => {
            assert.typeOf(printName, 'string', 'No es una cadena de texto')
        })
    })
    describe('Array de números - arrayPrinter Method', () => {
        it(`Se espera una longitud de 7`, () => {
            assert.lengthOf(arrayTest, 7)
        })
        it(`Tipo de dato es una matríz`, () => {
            assert.typeOf(arrayTest, 'array', 'No es una matríz')
        })
        it(`La matríz tiene incluida el número 7`, () => {
            assert.include(arrayTest, 7)
        })
    })
})