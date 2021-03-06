import  reduce  from "../src/reduce";

describe('reduce', function() {
   
   
    const list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
    
    
     it('在列表的每个元素上执行传入的函数', function() {
		let  sideEffect = 0;
    	const a = reduce((cur, next) => {
          
			return cur + next.x

		}, list )(0)
		
		expect(a).toBe(635);
	
    }) 

    it('测试科里化调用', function() {
		let  sideEffect = 0;
    	   var b =  reduce((cur, next) => {
              
                return cur + next.x

        })(list)(0);
        
		expect(b).toBe(635);
    })  

})
