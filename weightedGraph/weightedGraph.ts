type Edge <T, U> = {node: T, edge: U};

class WeightedGraph<T, U>{
    adjacencyList = new Map< T, Edge<T, U>[]>();

    addVertex(vertex: T){
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: T, vertex2: T, weight: U){
        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)){
            this.adjacencyList.get(vertex1)?.push({node: vertex2, edge: weight});
            this.adjacencyList.get(vertex2)?.push({node: vertex1, edge: weight});
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