let ids = [9000, 9001, 9002];
let it = ids[Symbol.iterator]();

console.log(it.next());

for (let v of ids) {
  console.log(v);
}