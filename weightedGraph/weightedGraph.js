"use strict";
//Priority Queue
class PriorityQueue {
    values = [];
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}
class WeightedGraph {
    adjacencyList = new Map();
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)?.push({ node: vertex2, edge: weight });
            this.adjacencyList.get(vertex2)?.push({ node: vertex1, edge: weight });
        }
    }
    dijkstraSearch(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let nextNode;
        let sumOfDist = 0;
        let path = [];
        this.adjacencyList.forEach((_, key) => {
            if (key === start) {
                distances[key] = 0;
                nodes.enqueue(key, 0);
            }
            else {
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }
            /* nodes.enqueue(key, distances[key as string]); */
            previous[key] = null;
        });
        while (nodes.values.length) {
            smallest = nodes.dequeue()?.val;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList.get(smallest)) {
                    // search for neighbor nodes
                    nextNode = this.adjacencyList.get(smallest)?.at(neighbor);
                    //calculate distances
                    sumOfDist = distances[smallest] + nextNode.edge;
                    //update list
                    if (sumOfDist < distances[nextNode?.node]) {
                        distances[nextNode?.node] = sumOfDist;
                        previous[nextNode?.node] = smallest;
                        nodes.enqueue(nextNode.node, sumOfDist);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
        /* console.log("distances:", distances, "Prioroty Queue:", nodes, "previous:", previous); */
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
console.log(graph.dijkstraSearch("A", "E"));
