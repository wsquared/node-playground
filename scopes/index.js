if(true) {
  var foo = 'foo';
  console.log('foo1', foo); // foo
}

console.log('foo2', foo); // foo

if(true) {
  let bar = 'bar';
  console.log('bar1', bar); // bar
}

console.log('bar2', bar); // undefined
