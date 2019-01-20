import  _forEach  from "../src/forEach";

describe('forEach', function() {
   
   
    const list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
    
    
     it('在列表的每个元素上执行传入的函数', function() {
		let  sideEffect = 0;
    	const a = _forEach((ele, i) => {
			sideEffect += ele.x

		}, list)
		
		expect(sideEffect).toBe(635);
	
    }) 

    it('测试科里化调用', function() {
		let  sideEffect = 0;
    	_forEach((ele) => {
			sideEffect += ele.x

		})(list)
		expect(sideEffect).toBe(635);
    }) 

})
