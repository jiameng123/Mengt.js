import { _curryN } from '../src/utils';

describe('_curryN test', function() {
    it('测试多参数函数', function() {
        const a = (x, y, z ) => x+y+z;

        const b = _curryN(a);

        expect(b(1,2,3)).toBe(6);
        expect(b(1,2)(3)).toBe(6);
        expect(b(1)(2)(3)).toBe(6);
    })
})