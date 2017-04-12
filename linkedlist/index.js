function Node(data) {
  this.data = data;
  this.next = null;
}

function print(head) {
  if(head) {
    console.log(head.data);
    print(head.next);
  }
}

function insert(head, data) {
  var temp
  while(head.next !== null) {

  }
}

function insertRecursive(head, data) {
  if(head) {
    insert(head.next, data);
  }

  return new Node(data);
}

var head = new Node(2);
var n1 = new Node(3);
var n2 = new Node(4);
var n3 = new Node(5);
head.next = n1;
n1.next = n2;
n2.next = n3;

insert(head);