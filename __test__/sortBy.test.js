var M = require('../src');

describe('sortBy test block', function() {
    it('根据对象属性排序', function() {
        var list = [ {age: 3}, {age: 8}, {age: 1}];
        var diff = x => x.age;
        var result = M.sortBy(diff)(list);
        expect(result).toEqual([{age:1}, {age:3}, {age:8}]);
        expect(result.length).toBe(list.length);
    });

    it('排序数组', function() {
        var list = [0, 3, 6, 1];
        expect(M.sortBy(M.identity, list)).toEqual([0, 1, 3, 6])
    })

})