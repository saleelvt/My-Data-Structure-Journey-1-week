function a(target,arr){

   let  leftIdex=0
   let  rightIndex=arr.length-1
while(leftIdex<=rightIndex){
   let MiddleIndex=Math.floor((leftIdex+rightIndex)/2)
   if(target===arr[MiddleIndex]){
       return MiddleIndex
   }else if(target<arr[MiddleIndex]){
       rightIndex=MiddleIndex-1  

   }else if(target>arr[MiddleIndex]){
       leftIdex=MiddleIndex+1
   }
}

}

// console.log('my value of middle',a(3,[2,3,4,5,6,7]));

function recursiveBinary(arr,target){
   return Search(arr,target,0,arr.length-1)
   function Search(arr,target,leftIdex,rightIndex){
        
      if(leftIdex>rightIndex){
         return -1
      }
      let MiddleIndex=Math.floor((leftIdex+rightIndex)/2)
      if(target===arr[MiddleIndex]){
         return MiddleIndex
      }
      if(target<MiddleIndex){
        return Search(arr,target,leftIdex,MiddleIndex-1)
      }else{
         return Search(arr,target,MiddleIndex+1,rightIndex)
      }
   }
}
console.log('my location ',recursiveBinary([-5,2,4,6,10],6));


