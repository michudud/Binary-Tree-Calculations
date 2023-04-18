const LeafCounter = ({ dataStructure }) => {
  const calculateLeaves = (structure) => {
    let leafCounter = 0;
    const checkNode = (node) => {
      node.map((nodeChildren) => {
        if (nodeChildren.children) {
          checkNode(nodeChildren.children);
        } else {
          leafCounter++;
        }
      });
    };
    checkNode(structure);
    return leafCounter;
  };

  const leafNumber = calculateLeaves(dataStructure);

  return (
    <div
      className="LeafCounter"
      data-testid="display-leaves"
    >{`Number of leaves: ${leafNumber}`}</div>
  );
};

export default LeafCounter;
