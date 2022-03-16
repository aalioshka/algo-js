// https://leetcode.com/problems/design-snake-game/
// 353. Design Snake Game
// Credits to: https://leetcode.com/problems/design-snake-game/discuss/1471757/JavaScript-Solution
/*
Input
["SnakeGame", "move", "move", "move", "move", "move", "move"]
[[3, 2, [[1, 2], [0, 1]]], ["R"], ["D"], ["R"], ["U"], ["L"], ["U"]]
Output
[null, 0, 0, 1, 1, 2, -1]

Explanation
SnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
snakeGame.move("R"); // return 0
snakeGame.move("D"); // return 0
snakeGame.move("R"); // return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
snakeGame.move("U"); // return 1
snakeGame.move("L"); // return 2, snake eats the second food. No more food appears.
snakeGame.move("U"); // return -1, game over because snake collides with border
 */

/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.occupied = [[0, 0]];
    this.set = new Set();
    this.score = 0;
    this.width = width;
    this.height = height;
    this.foods = food;
    this.foodIdx = 0;

    this.currX = 0;
    this.currY = 0;

    this.moves = {
        'U': [-1, 0],
        'L': [0, -1],
        'D': [1, 0],
        'R': [0, 1]
    };
};

/**
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    const [rowDir, colDir] = this.moves[direction];

    this.currX += rowDir;
    this.currY += colDir;

    const head = `${this.currX}#${this.currY}`;

    if (!this.withinBound(this.currX, this.currY)) return -1;

    this.occupied.push([this.currX, this.currY]);

    if (this.occupied.length > this.score + 1) {
        const [tailX, tailY] = this.occupied.shift();

        const tail = `${tailX}#${tailY}`;

        this.set.delete(tail);
    }

    if (this.set.has(head)) return -1;

    this.set.add(head);

    if (this.foodIdx < this.foods.length) {
        const [foodX, foodY] = this.foods[this.foodIdx];

        if (this.currX === foodX && this.currY === foodY) {
            this.score++;
            this.foodIdx++;
        }
    }

    return this.score;
};

SnakeGame.prototype.withinBound = function(row, col) {
    return row >= 0 && col >= 0 && row < this.height && col < this.width;
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */