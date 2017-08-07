class Node{
	constructor(value, priority) {
		this.priority = priority;
		this.value = value;
	}

	valueOf() {
		return this.priority;
	}
}

module.exports = Node;