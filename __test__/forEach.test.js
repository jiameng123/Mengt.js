import  forEach  from "../src/forEach";

const newLocal = 'forEach test';
describe(newLocal, function() {
   
    const list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
    
     it('在列表的每个元素上执行传入的函数', function() {
		let  sideEffect = 0;
		
    	const a = forEach((ele, i) => {
		
			 ele.x = 1;

		}, list)
	
		expect(a).toEqual([{ x: 1, y: 2 },
			{ x: 1, y: 200 },
			{ x: 1, y: 400 },
			{ x: 1, y: 345 } ]);
	
    }); 

	it('测试对象调用forEach', function() {
		const obj = {a:1,b: 2};

		const obj2 = forEach(function(x, y) {
			obj[x] = 2;

		}, obj)

		expect(obj).toEqual( {a:2, b:2});
	})

    it('测试科里化调用forEach', function() {
		let  sideEffect = 0;
    	forEach((ele) => {
			sideEffect += ele.x

		})(list)
		expect(sideEffect).toBe(4);
	});
	
	it('函数调用次数', function() {
		const callBack = jest.fn();
		forEach(callBack, [0, 1,2]);

		expect(callBack.mock.calls.length).toBe(3);
		expect(mockCallback.mock.calls[0][0]).toBe(0);
	})

})
