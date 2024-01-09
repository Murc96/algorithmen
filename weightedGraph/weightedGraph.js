"use strict";
class WeightedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2, weight) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push({ node: vertex2, edge: weight });
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push({ node: vertex1, edge: weight });
        }
    }
}
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 5);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("E", "F", 1);
console.log(graph.adjacencyList);
