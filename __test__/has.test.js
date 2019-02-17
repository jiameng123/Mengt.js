var M = require('../src');

describe('has test block', function() {
    var fred = {name: 'Fred', age: 23};
    var anon = {age: 99};

    it('如果属性存在则返回true', function() {
        expect(M.has('name')(fred)).toBeTruthy();
    });

    it('如果属性不存在则返回false', function() {
        expect(M.has('name')(anon)).toBeFalsy();
    });

    it('不会检查原型链中的属性', function() {
        var Person = function() {};
        Person.prototype.age = function() {};

        var bob = new Person();
        expect(M.has('age', bob)).toBeFalsy();
    });

    it('对于非对象返回false', function() {
        expect(M.has('a', undefined)).toBeFalsy();
        expect(M.has('a', null)).toBeFalsy();
        expect(M.has('a', true)).toBeFalsy();
        expect(M.has('a', '')).toBeFalsy();
        expect(M.has('a', /a/)).toBeFalsy();
    })
})