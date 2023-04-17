const EdgeCounter = ({dataStructure}) => {

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

  return (
    <div className="EdgeCounter">
      {`Largest number of edges: ${calculateEdges(dataStructure)}`}
    </div>
  );
};

export default EdgeCounter;
