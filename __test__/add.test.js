var M = require('../src');

describe('add', function () {
    it('测试两个数字相加', function () {
        expect(M.add(1,2)).toBe(3)
    });

    it('强制将参数转换成数字', function () {
        expect(M.add('1', '2')).toBe(3);
        expect(M.add('1', 2)).toBe(3);
        expect(M.add(false, false)).toBe(0);
        expect(M.add(false, true)).toBe(1);
        expect(M.add(null, null)).toBe(0);
        expect(M.add(undefined, undefined)).toBeNaN();
        expect(M.add(new Date(1), 2)).toBe(3)
    });

    it('相等性', function () {
        expect(M.add(1, 2)).toBe(M.add(2, 1));
        expect(M.add(1, M.add(10, 11))).toBe(M.add(M.add(10, 11), 1));
    });
})