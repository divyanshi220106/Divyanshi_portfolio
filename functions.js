// function abc(){
//     console.log("hello");
// }
// function myFunc(abc){
//     return abc;
// }
// acallback isa afunction passes as an argument to another function
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
// console.log(val);
// })
// let arr=["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// })
//For Eaqch is hiogher prder functuons 
// let arr=[2,3,4,5,6];
// arr.forEach((arr)=>{
//     console.log(arr*arr);
// })

// let nums=[67,52,39];
// let newArray=nums.map((nums) =>{
//     return nums*2;
// })
// console.log(newArray);
// let arr1=[1,2,3,4,5,6,7];
// let evenArr=arr1.filter((arr1) =>{
//     return arr1%2===0;

// })
// console.log(evenArr);
let arr=[1,2,3,4];
const output=arr.reduce((res,currr)=>{
    return res+currr;
});
console.log(output);