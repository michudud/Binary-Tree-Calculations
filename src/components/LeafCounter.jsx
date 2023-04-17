const LeafCounter = ({dataStructure}) => {

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

  return (
    <div className="LeafCounter">
      {`Number of leafs: ${calculateLeafs(dataStructure)}`}
    </div>
  );
};

export default LeafCounter;
