import { _curry2 } from '../src/utils'

describe('test _curry2', () => {
    const ad = (x, y) => {
        return x+y;
    }
    const f1 = _curry2(ad);

    

    it('f1 return 2', function() {
        expect(f1(2, 's')).toBe('2s');
       
        expect(f1(2)('s')).toBe('2s');
    });
    

})