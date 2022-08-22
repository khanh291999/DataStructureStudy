class Node {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValues = (root) =>{
    if(root == null) return [];
    const stack = [root];
    const result = [];
    while(stack.length > 0){
        const current = stack.pop();
        result.push(current.val);
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return result;
}

// const breadthFirstValues = (root) =>{
//     if(root == null) return [];
//     const result = [];
//     const queue = [root]
//     if(queue.length > 0 ){
//         const current = queue.shift();
//         result.push(current.val)
//         if(current.left) queue.push(current.left)
//         if(current.right) queue.push(current.right)
//     }
//     return result;
// }

const breadthFirstValues = (root) => {
    if ( root == null) return [];
    const result = []
    const queue = [ root ]
    while(queue.length > 0) {
      const current = queue.shift();
      result.push(current.val)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    return result;
  };

console.log("depthFirstValues" , depthFirstValues(a))
console.log("breadthFirstValues" , breadthFirstValues(a))