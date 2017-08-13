let it = ids[Symbol.iterator]();

console.log('typeof ids: ', typeof ids[Symbol.iterator]);

console.log('it.next(): ', it.next());

for (let v of ids) {
  console.log('v: ', v);
}