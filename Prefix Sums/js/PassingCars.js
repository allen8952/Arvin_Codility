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

//score 100
//假使 當下是往西 就要加上，前面有幾次是通過Ａ的次數
//可以過濾掉 P < Q 的數值
function solution(A){
    let East = 0;
    let West = 0;
    for(let i = 0 , len = A.length; i < len ; i ++){
        if(A[i] == 0) East++;
        if(East > 0){
            if(A[i] == 1){
                West += East;
            }
            if(West > 1000000000){
                return -1;
            }
        }
    }
    return West;
} 