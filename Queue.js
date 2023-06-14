function isBalanced(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else {
      return "no";
    }
  }

  return stack.length === 0 ? "yes" : "no";
}
