var M = require('../src');

describe('F test block', function () {
    it('传入参数返回false', function() {
        expect(M.F(111)).toBeFalsy();
        expect(M.F(true)).toBeFalsy();
    });

    it('无参数返回false', function () {
        expect(M.F()).toBeFalsy();
    })
});