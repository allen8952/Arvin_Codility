//score 60
function solution(A){
	let East = [];
    let West = [];
    A.filter(function(value,key){
		if(value % 2 != 1) East.push(key);
        else West.push(key);
    });
    let len = East.length * West.length;
    var count = 0;
	East.filter(function(a){
    	let aaa = West.filter(b => a > b)
		count += aaa.length*1;
    });
   return len - count;
}

