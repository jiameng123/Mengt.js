import pipe from "../src/pipe";

describe('pipe test', function() {
    const f1 = x => x;
    const f2 = y => 2 + y;
    const f3 = z => z + 100;
    const f5 = (x,y) => x+y;

    it('test', function() {
        const result = pipe(f1, f2, f3)(9);
        expect(result).toBe(111);
    });

    it('pipe test2', function() {
        const rs1 = pipe(f5,f2,f1);
       
        expect(rs1(1,2,4)).toBe(5);
    })

    it('First argument to _arity must be a non-negative integer no greater than ten', function() {
        const f0 = jest.fn();
        const f1 = jest.fn();
        const f2 = jest.fn();
        const f3 = jest.fn();
        const f4 = jest.fn();
        const f5 = jest.fn();
        const f6 = jest.fn();
        const f7 = jest.fn();
        const f8 = jest.fn();
        const f9 = jest.fn();
        const f10 = jest.fn();
        const rs1 = pipe(f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10);
        expect(rs1).toThrow('First argument to _arity must be a non-negative integer no greater than ten');
    })
    
    it('pipe return true', function() {
        const callBack = jest.fn();
        callBack.mockReturnValueOnce(false).mockReturnValueOnce(true);
        expect(pipe(callBack, callBack)()).toBeTruthy()
    })
})