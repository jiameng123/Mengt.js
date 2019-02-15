var M = require('../src');

describe('T test block', function () {
    it('传入参数返回true', function() {
        expect(M.T(111)).toBeTruthy();
        expect(M.T(false)).toBeTruthy();
    });

    it('无参数返回true', function () {
        expect(M.T()).toBeTruthy();
    })
});