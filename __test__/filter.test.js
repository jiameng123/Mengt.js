var M = require('../src');

describe('filter', function  () {
    var even = function(x) {return x % 2 === 0;};
    it('数组中调用', function (params) {
        expect(M.filter(even, [1,2,3,4])).toEqual([2, 4])
    });
    
})