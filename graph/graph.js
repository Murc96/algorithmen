"use strict";
/* const adjacencyList = new Map();

adjacencyList.set("A", ["B","E"]);
adjacencyList.set("B", ["A", "C", "D"]);

console.log(adjacencyList); */
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            /* this.adjacencyList.set(vertex1, [vertex2]);
            this.adjacencyList.set(vertex2, [vertex1]); */
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        var _a, _b;
        this.adjacencyList.set(vertex1, (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.filter((a) => a !== vertex2));
        this.adjacencyList.set(vertex2, (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.filter((a) => a !== vertex1));
    }
    removeVertex(vertex) {
        var _a, _b;
        while ((_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.length) {
            this.removeEdge(vertex, (_b = this.adjacencyList.get(vertex)) === null || _b === void 0 ? void 0 : _b.pop());
        }
        this.adjacencyList.delete(vertex);
    }
    /* depthFirst(startVertex: T): T[] {
        const result: T[] = [];
        const visited : {[key: string]: boolean} = {};

        visited[startVertex as string] = true;

        const edges = this.adjacencyList.get(startVertex);

        if(edges){
            for(const edge of edges!){
                if(!visited[edge as string]){
                    result.push(startVertex);
                    this.depthFirst(edge);
                }
            }
        }
        

        return result;

    } */
    depthFirst(startVertex) {
        var _a;
        const stack = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex = null;
        visited[startVertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    depthFirstRec(startVertex) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            var _a;
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    }
    breadthFirst(startVertex) {
        const queue = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex = null;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            visited[currentVertex] = true;
            const edges = this.adjacencyList.get(currentVertex);
            if (edges) {
                for (const edge of edges) {
                    if (!visited[edge]) {
                        visited[edge] = true;
                        queue.push(edge);
                    }
                }
            }
        }
        return result;
    }
    breadthFirstRec(startVertex) {
        const queue = [startVertex];
        const visited = [];
        let currentVertex = null;
        const bfs = () => {
            var _a, _b, _c;
            currentVertex = queue.shift();
            visited.push(currentVertex);
            (_c = (_b = (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.slice()) === null || _b === void 0 ? void 0 : _b.reverse()) === null || _c === void 0 ? void 0 : _c.forEach((node) => {
                if (!visited.includes(node) && !queue.includes(node)) {
                    queue.push(node);
                }
            });
            if (queue.length)
                bfs();
        };
        bfs();
        return visited;
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("E", "D");
graph.addEdge("E", "F");
graph.addEdge("F", "D");
console.log(graph.adjacencyList);
console.log(graph.breadthFirstRec("A"));
