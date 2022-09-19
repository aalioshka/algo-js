
var MyCalendar = function() {
    this.root = null;
};

var Node = function (start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    var newNode = new Node(start, end);
    if (this.root === null) {
        this.root = newNode;
        return true;
    } else {
        return insertNode(this.root, newNode);
    }
};

function insertNode(root, newNode) {
    if (newNode.end <= root.start) {
        if (root.left === null) {
            root.left = newNode;
            return true;
        }
        return insertNode(root.left, newNode);
    }

    if (newNode.start >= root.end) {
        if (root.right === null) {
            root.right = newNode;
            return true;
        }
        return insertNode(root.right, newNode);
    }

    return false;
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */