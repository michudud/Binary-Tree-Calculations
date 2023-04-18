const LeafCounter = ({ dataStructure }) => {
  const calculateLeafs = (structure) => {
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

  const leafNumber = calculateLeafs(dataStructure);

  return <div className="LeafCounter">{`Number of leafs: ${leafNumber}`}</div>;
};

export default LeafCounter;
