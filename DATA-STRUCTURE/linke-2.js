

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value,index){
 
//         if(index<0||index>this.size){
//             console.log('please enter valid index');
//         }else if(index===0){
//             this.prepend(value)
//         }
//     }

//     append(value) {
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                prev= prev.next
//             }
//             prev.next=node
            
//         }
//         this.size++
//     }


//     print() {
//         if (this.isEmpty()) {
//             console.log('this array is empty ');
//         } else {
//             let curr = this.head
//             while (curr) {
//                 console.log('my linked list values are', curr.value);
//                 curr = curr.next
//             }
//         }
//     }

// }

// const list = new LinkedList



// list.prepend(10)
// list.prepend(50)
// // list.append(20)
// list.insert(9,0)
// console.log('my list size', list.getSize());
// list.print()





