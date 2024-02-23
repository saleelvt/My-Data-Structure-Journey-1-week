

 function findMiddle() {
    if (!this.head) {
        return null;
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }if(slowPointer===fastPointer){
        return true;
    }else{
        return false;
    }

    // return slowPointer.data;
}