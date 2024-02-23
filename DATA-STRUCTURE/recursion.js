// let n=5
// let sum=1
// for(i=1;i<=n;i++){

//     console.log(n);
//     sum= sum*i
// }
// console.log(sum);
// let array=[1,2,3,4,5]
// function recursion(n) {
//     if (n <= 1) {
//         return 2
//     } else {
//         return n * recursion(n - 1)
//     }

// }

// console.log('value',recursion(5));




// function sum(n){

//     if(n<=1){
//         return 1
        
//     }else{
//         return n*(sum(n-1))
//     }
// }

// console.log(sum(5));



function a(n){
  
    if(n<=1){
        return 1
    }else{
     return n*(a(n-1))
    }
}
console.log(a(5));









