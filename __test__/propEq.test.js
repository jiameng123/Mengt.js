var M = require('../src');

describe('propEq', function () {
    var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
    var obj2 = {name: 'Fred', age: 12, hair: 'brown'};

    test('确定特定属性与特定对象的值给定值相匹配', function () {
        expect(M.propEq('name', 'Abby', obj1)).toBeTruthy();
        expect(M.propEq('hair', 'brown', obj2)).toBeTruthy();
        expect(M.propEq('hair', 'blond', obj2)).toBeFalsy();
    });

    test('has isEquals',  function () {
        function Just(x) { this.value = x; }
        Just.prototype.equals = function(x) {
        return x instanceof Just && M.isEquals(x.value, this.value);
        };

        expect(M.propEq('value', 0, {value: -0})).toBeFalsy();
        expect(M.propEq('value', -0, {value: 0})).toBeFalsy();
        expect(M.propEq('value', NaN, {value: NaN})).toBeTruthy();
        expect(M.propEq('value', new Just([42]), {value: new Just([42])})).toBeTruthy();
    });

});