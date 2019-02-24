var M = require('../src');

describe('mutiply', function () {
    it('测试两个数字相乘', function () {
        expect(M.multiply(1,2)).toBe(2);
        expect(M.multiply(2,1)).toBe(M.multiply(1,2));
        expect(M.multiply(25)(2)).toBe(M.multiply(2)(25))
    })
})