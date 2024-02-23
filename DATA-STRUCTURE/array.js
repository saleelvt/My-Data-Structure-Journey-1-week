// let array=[6,4,5,0,8,9]

// for(i=0;i<array.length;i++){

//     for(j=i+1;j<array.length;j++){

//         if(array[0]+array[j]==10){
//             console.log(array[i],array[j]);
//       }else{
//         console.log('item not macehd');
//       }
//     }


// }

// // console.log(array);
// let n=10
// function a (array,n){

// for(i=0;i<array.length;i++){
//     for(j=i+1;j<array.length;j++){
//         if(array[i]+array[j]==n){
//             return 748
//         }
//     }
// }
// }

// console.log(a(array,n));
const arr = [4, 5, 6, 8, 9, 4, 7, 4, 6, 4]
let target = 4
let temp=0
for(i=0;i<array.length;i++){
console.log('sekee');
    if(array[i]==target){
        for(j=i;j>array.length-1;j--){
            console.log('saleel');
            temp= array[j];
            array[j]=array[j-1];
            array[j-1]=temp;
        }
    }
}

console.log('my new array', array);

 

