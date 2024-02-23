

function a(arr, target) {

    let leftIdex = 0
    let rightIndex = arr.length - 1



    // if (leftIdex > rightIndex) {
    //     return -1
    // }

    let MiddleIndex = Math.floor((leftIdex + rightIndex) / 2)
    if (target === arr[MiddleIndex]) {
        return MiddleIndex
    }
    if (target < arr[MiddleIndex]) {
        leftIdex = MiddleIndex - 1
    }
    if (target > arr[MiddleIndex]) {
            rightIndex = MiddleIndex + 1}
    // }else{
    //     return -1
    // }



}


console.log(a([1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25], 4));

// let arr=[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// let  target_element = 5

// for(i=0;i<arr.length;i++){
//     if(arr[i]==target_element){
//         console.log('this value',i);
//     }else{
//         console.log('not founded');
//     }
// }










