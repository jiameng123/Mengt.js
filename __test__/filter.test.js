var M = require('../src');

describe('filter', function  () {
    var even = function(x) {return x % 2 === 0;};
    var arr = [1, 2, 3,4];

    test('数组中调用', function () {
        expect(M.filter(even, [1,2,3,4])).toEqual([2, 4])
    });

    test('如果数组为空， 则返回一个空数组', function () {
        expect(M.filter(even)([])).toEqual([])
    });

    test('如果没有匹配项, 则返回一个空数组', function () {
        expect(M.filter(even)([1,3,5])).toEqual([])
    });

    test('对象中调用', function () {
        var obj = { a: 1, b: 2, c: 3, d: 4};
        expect(M.filter(even)({})).toEqual({});
        expect(M.filter(even)(obj)).toEqual({b:2, d: 4});
    });

    test('调用自身filter', function () {
        function customFilter (list){ 
            this.list = list;
        };
        customFilter.prototype.filter = function (fn, list) {
            var len = list.list.length;
            var idx = -1;
            var result = {};
          
            while(++idx < len) {
                if(fn(list.list[idx])) {
                    result[idx] =  list.list[idx];
                }
            } 
           
            return result;
        }

        var cus = new customFilter(arr);
       
        expect(M.filter(even, cus)).toEqual({1:2, 3:4});
    });
})