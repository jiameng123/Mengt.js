var M = require('../src');

describe('mutiply test block', function () {
    it('测试两个数字相除', function () {
        expect(M.divide(12)(6)).toBe(2);
        expect(M.divide(1,10)).toBe(0.1);
        expect(M.divide(25)(2)).toBe(M.divide(25 ,2))
    })
})