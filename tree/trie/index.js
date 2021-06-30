function Node() {
    this.keys = {};
    this.end = false;
}

function Trie() {
    this.root = new Node();

    this.insert = function(input, node = this.root) {
        if (!input.length) {
            node.end = true;
        } else {
            if (!node.keys[input[0]]) {
                node.keys[input[0]] = new Node();
            }
            this.insert(input.substring(1), node.keys[input[0]]);
        }
    };

    this.search = function(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys[word[0]]) {
                return false;
            } else {
                node = node.keys[word[0]];
                word = word.substring(1);
            }
        }
        return !!(node.keys[word] && node.keys[word].end);
    };
}

let myTrie = new Trie();
myTrie.insert('ball');
myTrie.insert('bag');
myTrie.insert('doll');
myTrie.insert('dog');
myTrie.insert('send');
myTrie.insert('sense');

console.log(myTrie);
console.log(myTrie.search('doll'));
console.log(myTrie.search('dog'));
console.log(myTrie.search('sense'));
console.log(myTrie.search('boll'));
