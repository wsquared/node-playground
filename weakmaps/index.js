let wm1 = new WeakMap();
let wm2 = new WeakMap();

class MyWeakMap {
  constructor(v1, v2) {
    // Keys of WeakMaps are of the type Object only.
    // Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
    wm1.set(this, v1);
    wm2.set(this, v2);
  }

  getV1() {
    return wm1.get(this);
  }

  getV2() {
    return wm2.get(this);
  }
}

const myWeakMap = new MyWeakMap(1, 2);

console.log('myWeakMap v1: ', myWeakMap.getV1());
console.log('myWeakMap v2: ', myWeakMap.getV2());
