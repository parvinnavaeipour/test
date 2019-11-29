const mathLib = {}

mathLib.sProduct = function(c, arr) {
	let res = []
    for (let i = 0; i < arr.length; i++) {
       res[i] = c * arr[i]
    }
    return res
}  

mathLib.linspace = function(startValue, stopValue, cardinality) {
 var arr = []; 
 var step = (stopValue - startValue) / (cardinality - 1);
 for (var i = 0; i < cardinality; i++) 
 	{ arr.push(startValue + (step * i));
 	 } 
 	 arr[arr.length - 1] = stopValue
	
 	 return arr; 
 	}
 
mathLib.linspacee = function(a, b, npoints, c) {
    let arr = []
    let step = (b - a) / (npoints - c)
    for(let i = a; i <= b; i += step) {
        
        if (i == 0){
        arr.push(i)
    }else{
        arr.push(-1*Number(parseFloat(i).toFixed(2)))
        
    }
    }
    return arr
} ; 

// mathLib.vvv = function(start, stop) 
// {
//   var result = [];
//   var ctr = 0;
//   var x=0;

//   if (start.length === 0) 
//    return "array1 is empty";
//   if (stop.length === 0) 
//    return "array2 is empty";   

//  while (ctr < start.length && ctr < stop.length) 
//   {
//     result.push(stop[ctr] + start[ctr] );
//     ctr++;
//   }

//  if (ctr === start.length) 
//  {
//     for (x = ctr; x < stop.length; x++)   {
//       result.push(stop[x]);
//     }
//   } 
//   else
//   {
//   for (x = ctr; x < start.length; x++) 
//     {
//       result.push(start[x]);
//     }
//   }
//   return result;
// }


// mathLib.vSum = function (a, b, x) {
// 	let sum = []
// 	for ( let i = 0; i < a.length; i++) {
//        sum.push( b[i]+(x*a[i]) )
//       	}
// 	return sum
// }
//  mathLib.vvSum = function(a,b,c,d,e,f,g){
//  	let sum = []
//  	for (let i = 0; i < a.length; i ++){
//  		sum[i] = a[i]+b[i]+c[i]+d[i]+e[i]+f[i]+g[i]
//  	}
//  	return sum
//  }
// mathLib.sumdef = function(a,b,c){
//   let sum = []
//   for (let i = 0; i < a.length; i ++){
//     sum[i] = a[i]-b[i]+c[i]
//   }
//   return sum
//  }
 
// mathLib.vvv = function(start, stop){
//   var result = [];
//   var ctr = 0;
//   var x=0;

//  while (ctr < start.length && ctr < stop.length) 
//   {
//     result.push(stop[ctr] - start[ctr] );
//     ctr++;
//   }

//  if (ctr === start.length) 
//  {
//     for (x = ctr; x < stop.length; x++)   {
//       result.push(stop[x]);
//     }
//   } 
//   else
//   {
//   for (x = ctr; x < start.length; x++) 
//     {
//       result.push(start[x]);
//     }
//   }
//   return result;
// }

// mathLib.mul = function(){

// for (let i = 0; i < start.length; i ++){
//         	v[i] = s *v[i]

//         	result.push(v)
        	
//         }
//         return result 
// }

// mathLib.range = function(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }
// // console.log(range(1,6))


// mathLib.sign = function (x) {
// 	if (isNaN(x)) {
// 		return NaN
// 	}

//   if (x > 0) {
//   	return 1
//   } else if (x === 0 ){
//   	return 0
//   } else {
//   	return -1
//   }
// }

// mathLib.dot = function (a, b) {
// 	let sum = 0
// 	for ( let i = 0; i < a.length; i++) {
// 		sum += a[i]*b[i]
// 	}
// 	return sum
// }

// mathLib.abs = function (array) {
//   var sum = 0
//   for(i = 0; i < array.length; i++){
//    sum += Math.pow(Math.abs(array[i]), 2)
//   }
//   return Math.sqrt(sum)
// }


// mathLib.zero = function (b, c) {

//     var v = []
//     for (j = 0; j < b; j ++){
//         v.push(Array(c).fill(0))
//     }
//     return v 
// }

// mathLib.cross = function (a, b){
	
	
// 	let c = [(a[1]*b[2] - a[2]*b[1]), (a[2]*b[0] - a[0]*b[2]), (a[0]*b[1] - a[1]*b[0])]
// 	return c
// }

// mathLib.arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }

// mathLib.random =function(dataSetSize, minValue, maxValue) {
//   return new Array(dataSetSize).fill(0).map(function(n) {
//     return Math.random() * (maxValue - minValue) + minValue;
//   })
// }

// mathLib.element = function(a, b, c){
// 					let v = []
// 					for ( i = a; i < b.length - c; i++){
// 						v.push(b[i])
// 					}
// 					return v
// }

// mathLib.pow2 = function (arr) {
// 	let s = []
// 	for ( let i = 0; i < arr.length; i++) {
//        s.push(Math.pow(Math.abs(arr[i]),2))
//       	}
// 	return s
// }
// mathLib.addd = function(a, arr){
//     let s = []
//     for ( let i = 0; i < arr.length; i++) {
//     s.push(a + arr[i])
//     }
//     return s 
// }

// mathLib.check = function(arr){
// let v = []
// let result 
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         result = true
//         } else {
//         	result = false
//                }
//         v.push(result)
//     }
//     return v
// }

// mathLib.checkk = function(arr){
// let v = []
// let result 
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result = true
//         } else {
//         	result = false
//                }
//         v.push(result)
//     }
//     return v
// }

// mathLib.xor = function(arr1,arr2){
// 	let v =[]
// for (var i = 0; i < arr1.length; i++) {
     
//      v.push(arr1[i]^arr2[i])
     
// }
// return v
// }
// mathLib.and = function(arr1,arr2){
// 	let v =[]
// for (var i = 0; i < arr1.length; i++) {
     
//      v.push(arr1[i] & arr2[i])
     
// }
// return v
// }

// mathLib.nonflatzero = function(arr){
// return arr.reduce((ret_arr, number, index) => {
// if (number != 0) ret_arr.push(index)
// return ret_arr}, [])
// }

// mathLib.summ = function (array) {
//   var finalSum = []
//   for(i = 0; i < array[0].length; i++){
//     var s = 0
//     for (j = 0; j < array.length; j++){
//        s += array[j][i]
//     }
//     finalSum[i] = s;
//   }
//   return finalSum
// }

module.exports = mathLib
