function *startProcess() {
  let result = yield;
  console.log(`result is ${result}`);
  return result;
}

let iterate = startProcess();
let foo = iterate.next();
let bar = iterate.next(200);
let next = iterate.next(300);

console.log('foo', foo); // not done
console.log('bar', bar); // done
console.log('next', next); // yields undefined