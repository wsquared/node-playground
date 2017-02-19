let val = 1;
let i = 3;

function doAsync() {
  return new Promise((resolve, reject) => {
    while (i > 0) {
      setTimeout(() => {
        console.log(val++);
        resolve();
      }, 1000);
      i--;
    }
  });
}

doAsync().then(() => {
  return 4;
})
.then((value) => {
  return Promise.reject('Failed!');
})
.then((value) => {
  console.log('Failed at failure!');
})
.catch((value) => {
  console.log(value);
  console.log('Boo!');
});