/* const adjacencyList = new Map();

adjacencyList.set("A", ["B","E"]);
adjacencyList.set("B", ["A", "C", "D"]);

console.log(adjacencyList); */

type AdjacencyList<T> = Map<T, T[]>;

class Graph<T> {
    adjacencyList: AdjacencyList<T> = new Map();

    addVertex(vertex: T) {
        this.adjacencyList.set(vertex,[]);
    }

    addEdge(vertex1: T, vertex2: T) {

        if(this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)){
            /* this.adjacencyList.set(vertex1, [vertex2]);
            this.adjacencyList.set(vertex2, [vertex1]); */

            this.adjacencyList.get(vertex1)?.push(vertex2);
            this.adjacencyList.get(vertex2)?.push(vertex1);
        }
        
    }

    removeEdge(vertex1: T, vertex2: T) {
        this.adjacencyList.set(
            vertex1,
            this.adjacencyList.get(vertex1)?.filter((a) => a !== vertex2) as T[]);
        this.adjacencyList.set(
            vertex2,
            this.adjacencyList.get(vertex2)?.filter((a) => a !== vertex1) as T[]);
    }

    removeVertex(vertex: T) {

        while(this.adjacencyList.get(vertex)?.length) {
            this.removeEdge(vertex, this.adjacencyList.get(vertex)?.pop() as T);
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

    depthFirst(startVertex: T): T[]{
        const stack = [startVertex];
        const result: T[] = [];
        const visited : {[key: string]: boolean} = {};

        let currentVertex: T | null = null;

        visited[startVertex as string] = true;

        while(stack.length) {
            currentVertex = stack.pop() as T;

            result.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.forEach((neighbor) => {
                if(!visited [neighbor as string]){
                    visited[neighbor as string] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    depthFirstRec(startVertex: T): T[]{
        const result: T[] = [];
        const visited : {[key: string]: boolean} = {};

        const dfs = (vertex: T) => {
            if(!vertex) return null;

            visited[vertex as string] = true;
            result.push(vertex);
            this.adjacencyList.get(vertex)?.forEach((neighbor) => {
                if(!visited[neighbor as string]){
                    dfs(neighbor);
                }
            });
        };
        dfs(startVertex);
        return result;
    }

    breadthFirst(startVertex: T): T[] {
        const queue = [startVertex];
        const result: T[] = [];
        const visited: {[key: string]: boolean} = {};
        let currentVertex: T | null = null;

        while(queue.length) {
            currentVertex = queue.shift() as T;
            result.push(currentVertex);
            visited[currentVertex as string] = true;

            const edges = this.adjacencyList.get(currentVertex);

            if(edges){
                for (const edge of edges){
                    if(!visited[edge as string]){
                        visited[edge as string] = true;
                        queue.push(edge);
                    }
                }
            }

        }

        return result;

    }

    breadthFirstRec(startVertex: T): T[] {
        const queue = [startVertex];
        const visited: T[] = [];
        let currentVertex: T | null = null;

        const bfs = () => {
            currentVertex = queue.shift() as T;
            visited.push(currentVertex);
            this.adjacencyList.get(currentVertex)?.slice()?.reverse()?.forEach((node) => {
                if(!visited.includes(node) && !queue.includes(node)) {
                    queue.push(node);
                }
            });
            if(queue.length) bfs();
        }

        bfs()
        return visited;
    }

}


const graph = new Graph<string>();

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