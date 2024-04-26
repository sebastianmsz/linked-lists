import Node from './Node';

export default function LinkedList() {
	this.head = null;
	this.append = function (data) {
		let node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
	};
	this.prepend = function (data) {
		let node = new Node(data);
		node.next = this.head;
		this.head = node;
	};
	this.size = function () {
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	};
	this.getHead = function () {
		return this.head;
	};
	this.getTail = function () {
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		return current;
	};
	this.at = function (index) {
		if (index < 0 || index >= this.size()) {
			throw new Error('Index out of bounds');
		}
		let count = 0;
		let current = this.head;
		while (current) {
			if (count === index) {
				return current;
			}
			count++;
			current = current.next;
		}
		return null;
	};
	this.pop = function () {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let current = this.head;
		while (current.next.next) {
			current = current.next;
		}
		current.next = null;
		return;
	};
	this.contains = function (data) {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				return true;
			}
			current = current.next;
		}
		return false;
	};
	this.find = function (data) {
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.data === data) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};
	this.toString = function () {
		let current = this.head;
		let str = '';
		while (current) {
			str += current.data;
			if (current.next) {
				str += ' -> ';
			}
			current = current.next;
		}
		return str;
	};
	this.insertAt = function (index, data) {
		if (index === 0) {
			this.prepend(data);
			return;
		}
		let node = new Node(data);
		let count = 0;
		let current = this.head;
		while (current) {
			if (count === index - 1) {
				node.next = current.next;
				current.next = node;
				return;
			}
			count++;
			current = current.next;
		}
	};
	this.removeAt = function (index) {
		if (index === 0) {
			this.head = this.head.next;
			return;
		}
		let count = 0;
		let current = this.head;
		while (current) {
			if (count === index - 1) {
				current.next = current.next.next;
				return;
			}
			count++;
			current = current.next;
		}
	};
}
