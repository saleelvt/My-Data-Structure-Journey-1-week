var sum=0
function a(n,arr){

  sum+=arr[n]
    if(n>=arr.length-1){
           return 
    }else{
        return a(n+1)
    }
}
a(0,[1,2,3,4,5])
console.log(sum);





 
  function sum(arr, index) {
    if (index === arr.length) {
      return 0;
    }
    return arr[index] + sum(arr, index + 1);
  }
  const result = sum( [2, 3, 4, 5, 6, 7],0);

//   console.log('this si my array',result); 
  