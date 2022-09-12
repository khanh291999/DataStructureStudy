class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;

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

const getNodeValue = (head,index) =>{
    let current = head;
    let count = 0;
    while(current != null){
        if(count == index) return current.val
        count += 1;
        current = current.next;
    }
    return null;
}

const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current != null)
      {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
    return prev;
}

const zippedList = (head1, head2) =>{
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    while (current1 != null && current2 !=null){
        if(count % 2 !=0){
            tail.next = current2;
            current2 = current2.next;
        }
        else {
            tail.next = current;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (current1 != null) tail.next = current1;
    if (current2 != null) tail.next = current2;
    return head1;
}

console.log(sumList(a));
console.log(findNode(a, "q"));
console.log(getNodeValue(a, 3));
console.log("reverseList",reverseList(a));
console.log("zippedList",zippedList(a, x));