"use strict";
class Knight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    possibleMoves(boardSize) {
        let newX;
        let newY;
        const moves = [
            { x: 2, y: 1 },
            { x: 2, y: -1 },
            { x: -2, y: 1 },
            { x: -2, y: -1 },
            { x: 1, y: 2 },
            { x: -1, y: 2 },
            { x: 1, y: -2 },
            { x: -1, y: -2 }
        ];
        let result = [];
        for (const move of moves) {
            newX = this.x + move.x;
            newY = this.y + move.y;
            if (this.checkBounds(newX, newY, boardSize)) {
                result.push({ x: newX, y: newY });
            }
        }
        return result;
    }
    checkBounds(newX, newY, boardsize) {
        if (newX >= 0 && newX < boardsize && newY >= 0 && newY < boardsize) {
            return true;
        }
        else {
            return false;
        }
    }
    /* move(){

        let possibleMoves = this.possibleMoves(gameboard.size);

        if(possibleMoves.length === 1){
            this.x = possibleMoves[0].x;
            this.y = possibleMoves[0].y;
        }

    } */
    traverseTo(targetX, targetY, boardSize) {
        const visited = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
        const queue = [];
        const possibleMoves = this.possibleMoves(boardSize);
        let current;
        let newX = 0;
        let newY = 0;
        queue.push({ x: this.x, y: this.y, path: [{ x: this.x, y: this.y }] });
        visited[this.x][this.y] = true;
        while (queue.length > 0) {
            current = queue.shift();
            if (current) {
                const { x, y, path = [] } = current;
                if (x === targetX && y === targetY) {
                    return path;
                }
            }
            for (let move of possibleMoves) {
                newX = this.x + move.x;
                newY = this.y + move.y;
            }
            if (this.checkBounds(newX, newY, boardSize) && !visited[newX][newY]) {
                const newPath = [...path, { x: newX, y: newY }];
                visited[newX][newY] = true;
                queue.push({ x: newX, y: newY, path: newPath });
            }
        }
        return null;
    }
}
class Gameboard {
    constructor() {
        this.size = 8;
    }
}
let knight1 = new Knight(3, 3);
let gameboard = new Gameboard();
console.log(knight1.traverseTo(0, 0, gameboard.size));
//# sourceMappingURL=knightTravails.js.map