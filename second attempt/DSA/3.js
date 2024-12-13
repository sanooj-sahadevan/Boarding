let stack = [2, 1, 4, 3, 7, 6, 4, 5];

function sort(stack) {
  let tempStack = [];

  while (stack.length) {
    let top = stack.pop();
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > top) {
      stack.push(tempStack.pop());
    }
    tempStack.push(top);
  }
  return tempStack;
}

console.log(sort(stack));