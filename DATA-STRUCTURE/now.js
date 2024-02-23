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
            this.next = this.head
            node.head = node
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
            console.log('this linked list is empty ');
        } else {

            let curr = this.head
            while (curr) {
                console.log('my liske value ', curr.value);
                curr = curr.next
            }
        }
    }
}
const list = new LinkedList()
// list.prepend(10)
// list.prepend(30)
list.append(30)
list.prepend(20)

list.getSize()
list.print()