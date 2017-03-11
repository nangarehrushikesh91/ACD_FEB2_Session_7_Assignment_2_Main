function findSum(){
	var args = arguments;
	var result = 0;
	for(var i = 0; i < args.length;i++){
		result += args[i];
	}
return result;
}
var calculatedSum = findSum(1,2,3);


