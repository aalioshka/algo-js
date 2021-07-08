class Graph{
    constructor(){
        this.adjacencyMatrix = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ];
    }
    addVertex(vertex){
    }
    addEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 0;
        this.adjacencyMatrix[vertex2][vertex1] = 0;
    }
    removeVertex(vertex){
    }
}

let g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 5);
g.addEdge(2, 5);
g.addEdge(2, 4);
g.addEdge(2, 3);
// ...
console.log(g);
