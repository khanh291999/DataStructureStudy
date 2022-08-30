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

  const treeSum = (root) => {
    if (root === null) return 0
    const stack = [ root ]
    let sum = 0
    while(stack.length > 0)
      {
          const current = stack.pop();
          sum += current.val;
          if(current.left != null) stack.push(current.left)
          if(current.right != null) stack.push(current.right)
      }
    return sum;
  };

const treeIncludes = (root,target) =>{
  if(root === null) return false;
  const stack = [root];
  while(stack.length > 0){
    const current = stack.pop();
    if(current.val == target){
      return true
    }
    if(current.right != null) stack.push(current.right)
    if(current.left != null) stack.push(current.left)
  }
  return false;
}

const treeMinValue = (root) => {
  let smallest = Infinity;
  const queue = [ root ];
  while(queue.length > 0){
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;
    if(current.left != null) queue.push(current.left)
    if(current.right != null) queue.push(current.right)
  }
  return smallest;
};

const maxPathSum = (root) =>{
  if (root != null) return -Infinity
  if(root.left == null && root.right ==null) return root.val;
  const MaxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  return root.val + MaxChildPathSum
}

console.log("depthFirstValues" , depthFirstValues(a))
console.log("breadthFirstValues" , breadthFirstValues(a))
console.log("sumTree", treeSum(a))
console.log("treeIncludes", treeIncludes(a, "g"));
console.log("treeMinValue" , treeMinValue(a))
console.log("maxPathSum" , maxPathSum(a));