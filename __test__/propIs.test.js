var M = require('../src');

describe('propIs',  function () {
    test('如果指定的对象属性是给定类型，则返回true', function () {
        expect(M.propIs(Number, 'value', {value: 1})).toBeTruthy();
    });

    test('如果指定的对象属性不是给定类型，则返回false', function () {
        expect(M.propIs(String, 'value', {value: 1})).toBeFalsy();
        expect(M.propIs(String, 'value', {})).toBeFalsy();
    });
});