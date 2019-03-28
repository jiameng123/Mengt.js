var M = require('../src');

describe('zipWith', () => {
  test('求和', function() {
      var result = M.zipWith(M.add, [1,2], [1,2]);
      expect(result).toEqual([2,4])
  })

});
