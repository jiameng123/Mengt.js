var M = require('../src');

describe('sort test block', function() {
    const list = [3,5,2,1,0];
    it('从小到大排序列表', function() {
        const diff = (a, b) => a - b;
        expect(M.sort(diff, list)).toEqual([0, 1, 2, 3, 5]);
        expect(list).toEqual([3,5,2,1,0]);
    });

    it('排序数组内包含对象', function() {
        const diff = (a, b) => a.age - b.age;
        const list = [ { age:1, name:'a'}, {age:-99, name: 'b'}, { age:0, name:'do' }];
        expect(M.sort(diff)(list)).toEqual([ { age:-99, name:'b'}, {age:0, name: 'do'}, { age:1, name:'a' }]);
    })
})