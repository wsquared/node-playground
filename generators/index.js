function *startProcess() {
  let result = yield;
  console.log(`result is ${result}`);
}

let iterate = startProcess();
iterate.next();
iterate.next(200);