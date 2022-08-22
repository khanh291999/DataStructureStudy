class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

const sumList = head =>{
    let sum = 0;
    let current = head;
    while(current !=null){
        sum += current.val;
        current = current.next;
    }
    return sum
}

const findNode = (head,target) =>{
    let current = head;
    while(current != null){
        if(current.val ==target) return true;
            current = current.next;
    }
    return false;
}

console.log(sumList(a));
console.log(findNode(a, "q"));