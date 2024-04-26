import LinkedList from './Linked-list';

//test
let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
console.log(ll.size());
console.log(ll.getHead());
console.log(ll.getTail());
console.log(ll.at(2));
ll.pop();
console.log(ll.contains(2));
console.log(ll.contains(3));
console.log(ll.find(2));
console.log(ll.toString());
ll.insertAt(2, 5);
ll.removeAt(1);
console.log(ll.toString());
