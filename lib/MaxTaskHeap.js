const {max:MaxHeap} = require('heap');
const Node = require('./Node');

class MaxTaskHeap extends MaxHeap {
	constructor(taskList = []) {
		/* 生成格式化的隊列 */
		taskList = taskList.map(node=>{
			// [value, priority]
			return new Node(node[0], node[1]);
		});
		super(taskList);
	}

	add(value, priority) {
		let task = new Node(value, priority);
		super.add(task);
	}

	delete() {
		let task = super.delete();
		return task.value;
	}

	toAscendArray() {
		return super.toAscendArray().map(node=>node.value);
	}

	valueOf() {
		return super.valueOf().map(v=>v.value);
	}
}

module.exports = MaxTaskHeap;