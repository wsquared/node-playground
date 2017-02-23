function *startProcess() {
  let result = yield;
  console.log(`result is ${result}`);
  return result;
}

let iterate = startProcess();
let foo = iterate.next();
let bar = iterate.next(200);

console.log('foo', foo);
console.log('bar', bar);