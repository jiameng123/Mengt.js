var M = require('../src');

describe('includes', function () {
    test('如果数组中存在输入元素则返回true', function () {
        expect(M.includes(7, [1, 2, 3, 9, 8, 7, 100, 200, 300])).toBeTruthy();
    });

    test('如果数组中不存在输入元素则返回false', function () {
        expect(M.includes(99, [1, 2, 3, 9, 8, 7, 100, 200, 300])).toBeFalsy();
    });

    test('空数组返回false', function () {
        expect(M.includes(1, [])).toBeFalsy();
    });

    test('调用自身isEquals', function () {
        function Just(x) {
            this.value = x;
        }
        Just.prototype.isEquals = function (x) {
            return x instanceof Just && M.isEquals(x.value, this.value);
        };

        expect(M.includes(0, [-0])).toBeFalsy();
        expect(M.includes(-0, [0])).toBeFalsy();
        expect(M.includes(NaN, [NaN])).toBeTruthy();
        expect(M.includes(new Just([42]), [new Just([42])])).toBeTruthy();
    });

    test('字符串调用includes', function () {
        expect(M.includes('ba', 'banana')).toBeTruthy();
    });
});