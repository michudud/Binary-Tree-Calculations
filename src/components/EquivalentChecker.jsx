const EquivalentChecker = ({ dataStructure }) => {
  const compareInstances = (structure) => {
    let leftSide, rightSide;
    let equivalent = true;

    const compareNodes = (node1, node2) => {
      if (node1.value === node2.value) {
        if (node1.children && node2.children) {
          if (node1.children.length === 1 && node2.children.length === 1) {
            if (node1.children[0].value === node2.children[0].value) {
              compareNodes(node1.children[0], node2.children[0]);
            } else {
              equivalent = false;
            }
          } else if (
            node1.children.length === 2 &&
            node2.children.length === 2
          ) {
            if (
              node1.children[0].value === node2.children[0].value &&
              node1.children[1].value === node2.children[1].value
            ) {
              node1.children.map((child, index) => {
                compareNodes(child, node2.children[index]);
              });
            } else if (
              node1.children[0].value === node2.children[1].value &&
              node1.children[1].value === node2.children[0].value
            ) {
              node1.children.map((child, index) => {
                const compareIndex = index === 0 ? 1 : 0;
                compareNodes(child, node2.children[compareIndex]);
              });
            } else {
              equivalent = false;
            }
          }
        } else if (
          (!node1.children && node2.children) ||
          (node1.children && !node2.children)
        ) {
          equivalent = false;
        }
      } else {
        equivalent = false;
      }
    };

    if (structure[0].children) {
      if (structure[0].children.length === 2) {
        leftSide = structure[0].children[0];
        rightSide = structure[0].children[1];
      } else {
        equivalent = false;
      }
    } else {
      equivalent = "only one node-root";
    }

    if (equivalent === true) {
      compareNodes(leftSide, rightSide);
    }

    return equivalent;
  };

  const isEquivalent = compareInstances(dataStructure);

  return (
    <div className="EquivalentChecker" data-testid="display-equivalence">
      {`Instances are equivalent: ${isEquivalent}`}
    </div>
  );
};

export default EquivalentChecker;
