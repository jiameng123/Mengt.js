import compose from '../src/compose';

describe('测试 compose', function() {

    it('compose test', function() {
        const a = x => Number(x)+2;
        const b = y => Number(y)+5;

        const c = compose(a, b);
        
        expect(c(1)).toBe(8)
        
    })
})