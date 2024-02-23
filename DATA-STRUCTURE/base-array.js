


//   const obj={
//       name:'saleel',
//       age:25,
//       'saelel is a good boy':true
//   }
//   obj.hobby='kali'

//   console.log(obj);
//   console.log(obj.age);
//   console.log(obj['age']);
//   delete obj.hobby
//   console.log(obj);

//   console.log(obj['saelel is a good boy']);


  const set = new Set([2,3,4,5])

  set.add(1)
  set.delete(3)
  console.log(set.has(1));

  for(item of set){
      console.log(item);
  }