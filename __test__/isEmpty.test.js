var M = require('../src');

describe('isEmpty test block', function() {
    it('传入null 返回false', function() {
        expect(M.isEmpty(null)).toBeFalsy();
       
    });

    it('传入undefined返回false', function() {
        expect(M.isEmpty(undefined)).toBeFalsy();
    });

    it('传入数组', function() {
        expect(M.isEmpty([])).toBeTruthy();
        expect(M.isEmpty([[]])).toBeFalsy();
    });

    it('传入对象', function() {
        expect(M.isEmpty({})).toBeTruthy();
        expect(M.isEmpty({x: 0})).toBeFalsy();
        expect(M.isEmpty({length: 0})).toBeFalsy();
    });

    it('对于空参数对象返回true', function() {
        expect(M.isEmpty((function() { return arguments; })())).toBeTruthy();
        expect(M.isEmpty((function() { return arguments; })(0))).toBeFalsy();
    });

    it('传入其他任何值均返回false', function() {
        expect(M.isEmpty([''])).toBeFalsy();
        expect(M.isEmpty(0)).toBeFalsy();
        expect(M.isEmpty(false)).toBeFalsy();
        expect(M.isEmpty(Symbol(2))).toBeFalsy();
        expect(M.isEmpty(new String(1111))).toBeFalsy();
        expect(M.isEmpty(new Boolean(true))).toBeFalsy();
        expect(M.isEmpty(NaN)).toBeFalsy();
    })
})