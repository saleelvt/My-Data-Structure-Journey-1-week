

// let arr=[-5,2,4,6,10]
// let target=10

// let left=0
// let right=arr.length-1
// // console.log(right,arr[right]);

// while(left<=right){
//     let middle=Math.floor((left+right)/2)
//     // console.log('middle',middle,arr[middle]);
//     if(target===arr[middle]){
//         console.log(`the position of ${target} is ` ,middle);
//     }      
//     if(target<=arr[middle]){
//         right=middle -1
//         console.log('saleel',right);
//     }else{
//         left=middle+1
//         console.log('not');
//     }
// }





class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }


    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {

            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log('your linked list is empty');
        } else {
            // let array=[]
            let curr = this.head
            let str=''
            while (curr) {
                // str+=curr.value
                console.log('currenct values',curr.value);    
            //    array.push(curr.value)
            curr = curr.next
        }
        // console.log('my list vlaues are ',str,'like array ',array);
        }
    }






    insert(value,index){
      
        if(index<0||index>this.size){
            console.log('please enter valid number');
        }else if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
          let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0||index>this.size){         
            return null 
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index.length-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size---
        console.log('removed vlaue1',removedNode.value);
    }


        reverse(){
            let prev=null
            let curr=this.head
            while(curr){
                let next =curr.next
                curr.next=prev
                prev=curr
                curr=next
            }
            this.head=prev
        }

        Search(value){ 
            if(this.isEmpty()){
                return -1
            }
            let i=0
            let curr =this.head
            while(curr){
                if(curr.value===value){
                     console.log('you Searched vlaues in this index ',i);
                }
                curr=curr.next
                i++ 
            }
        }
           findMiddle() {
            if (!this.head) {
                return null;
            }
        
            let slowPointer = this.head;
            let fastPointer = this.head;
              let  index=0
            while (fastPointer && fastPointer.next) {
                slowPointer = slowPointer.next;
                fastPointer = fastPointer.next.next;
                index++
            }
        
            return slowPointer.value;
        }
        circular(){
         let slowPointer=this.head
            let fastPointer=this.head

            while(fastPointer||fastPointer.next){
                slowPointer=slowPointer.next
                fastPointer=fastPointer.next
                  if(slowPointer===fastPointer){
                    return true
                  }
            }
            return false
        }
     

   


}

const list = new LinkedList()

// let str='sreejith'
// let arr=[2,3,4,5,6,7,8]
// for(let i =0;i<arr.length;i++){

// list.append(arr[i])
// }


 
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
// list.reverse()
// list.removeFrom(1)









// let a=list.circular()
// list.insert(80,1)
// list.Search(10)
//  const middle=list.findMiddle()
//  console.log('my middle value',middle);
// for(let i=str.length-1;i>=0;i--){
// }





list.print()












