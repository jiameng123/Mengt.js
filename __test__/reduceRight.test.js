import  reduceRight  from "../src/reduceRight";

describe('reduceRight', function() {
   
   
    const list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
    
   
     /*  it('在列表的每个元素上执行传入的函数', function() {
        let  sideEffect = 0;
       
    	const a = reduceRight((cur, init) => {
           
			return cur+ init.x
		}, list)
		
		expect(a).toBe(635);
	
    })   */

    /* it('测试科里化调用1', function() {
		let  sideEffect = 0;
    	reduceRight((ele,next) => {
			sideEffect += next.x
		})(list)
		expect(sideEffect).toBe(635);
    })   */

    /*  it('测试科里化调用2', function() {
		const list = [1, 100, 300, 234];
    	const total = reduceRight((ele,next) => {
            return ele + next;
        })(list)
       
		expect(total).toBe(635);
    })  
 */
     it('测试科里化调用3', function() {
        const list = [1, 100, 300, 234];
    	const total = reduceRight((ele,next) => {
            return ele + next;
        }, list, 100)()()
      
		expect(total).toBe(735);
    })  

})
