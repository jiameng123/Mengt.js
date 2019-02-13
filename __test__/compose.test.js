import compose from '../src/compose';

describe('测试 compose', function() {

    it('compose test', function() {
        const a = x => x+2;
        const b = y => y+5;
        const c = compose(a, b);
        expect(c(1)).toBe(8)
        
    })

    it('compose test2', function() {
        const a = x => x-2;
        const b = y => y - 10;
        const c = (x, y) => x - y;

        const result = compose(a, b, c);
        expect(result(1, -9)).toBe(-2)
        
    })

    it('compose test3', function() {
        const a = x => x-2;
        const b = y => y + 10;
        const c = (x, y) => x - y;
        const d = x => x -1;
        const result = compose(a, b, compose(d, c));
        expect(result(1, -9)).toBe(17)
        
    })
})