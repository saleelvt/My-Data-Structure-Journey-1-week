

// class Node {
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

// }

// class linkedList {
//     constructor(){
//         this.head=null 
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             this.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('this linked list is empty');
//         }else{
//             let curr=this.head
//             let listValues=''
//             while (curr) {
//                 listValues=listValues+`${curr.value}`
//                 curr=curr.next
//             }
//             console.log(listValues);
//         }

//     }
// }

// const list = new linkedList()
// console.log('my size ',list.getSize());
// console.log('my empty ',list.isEmpty());
//  list.print()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()





class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {

        return this.size == 0

    }
    getsize(){

        return this.size
    }


    print() {
        if (this.isEmpty()) {
            console.log('saleel is a good boy and list is blank');
        } else {
            let curr = this.head;
            while (curr!==null) {
                console.log('my linked list value is:', curr.value);
                curr = curr.next;
            }
        }
    }
    

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

}
const list = new linkedList()
list.prepend(374)
// list.print()
list.prepend(10)
// list.print()
list.prepend(20)
// list.print()
list.prepend(1)
// list.print()
list.prepend(30)
// list.print()
list.append(1)
// list.print()
list.prepend(40)
list.print()




console.log('my size',list.getsize());











