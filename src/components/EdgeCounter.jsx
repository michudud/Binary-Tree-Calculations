const EdgeCounter = ({ dataStructure }) => {
  const calculateEdges = (structure) => {
    let edges = [];
    const checkNode = (node, edgeCounter) => {
      node.map((nodeChildren) => {
        if (nodeChildren.children) {
          checkNode(nodeChildren.children, edgeCounter + 1);
        } else {
          edges.push(edgeCounter);
        }
      });
    };
    checkNode(structure, 0);
    return Math.max(...edges);
  };

  const edgeNumber = calculateEdges(dataStructure);

  return (
    <div className="EdgeCounter">
      {`Largest number of edges: ${edgeNumber}`}
    </div>
  );
};

export default EdgeCounter;
