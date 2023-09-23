var $array=[0];
var average;
var total=0;

console.log($array)
for(i=0 ; i< 9 ; i++){$array[i]= i+1;total=total+$array[i]}
console.log($array)
average=total/$array.length
console.log(average)
