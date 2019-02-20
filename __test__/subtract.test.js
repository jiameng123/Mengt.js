var M = require('../src');

describe('subtract', function () {
    it('测试两个数字相减', function () {
        expect(M.subtract(1,2)).toBe(-1)
    });

    it('强制将参数转换成数字', function () {
        expect(M.subtract('1', '2')).toBe(-1);
        expect(M.subtract('1', 2)).toBe(-1);
        expect(M.subtract(false, false)).toBe(0);
        expect(M.subtract(false, true)).toBe(-1);
        expect(M.subtract(null, null)).toBe(0);
        expect(M.subtract(undefined, undefined)).toBeNaN();
        expect(M.subtract(new Date(1), 2)).toBe(-1)
    });

   
})