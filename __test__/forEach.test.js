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
		expect(callBack.mock.calls[0][0]).toBe(0);
	});

	it('返回原列表', function() {
		var list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
		var s = '';
		expect(forEach(function(obj) { s += obj.x; }, list)).toEqual(list);
		
	});

})
