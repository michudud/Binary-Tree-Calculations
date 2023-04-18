/*
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import EdgeCounter from "../components/EdgeCounter";
import { exampleStructure } from "../components/data_structures/example_structure";

test("count edges in example structure", async () => {
  const edgeCounter = render(<EdgeCounter dataStructure={exampleStructure} />);
  const edges = await edgeCounter.findByTestId("display-edges");
  expect(edges.innerHTML).toContain("4");
});

test("count edges with only root node", async () => {
  const testStructure = [
    {
      value: 5,
    },
  ];
  const edgeCounter = render(<EdgeCounter dataStructure={testStructure} />);
  const edges = await edgeCounter.findByTestId("display-edges");
  expect(edges.innerHTML).toContain("0");
});

test("count edges with symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5 }],
    },
  ];
  const edgeCounter = render(<EdgeCounter dataStructure={testStructure} />);
  const edges = await edgeCounter.findByTestId("display-edges");
  expect(edges.innerHTML).toContain("1");
});

test("count edges with non symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5, children: [{ value: 5 }] }],
    },
  ];
  const edgeCounter = render(<EdgeCounter dataStructure={testStructure} />);
  const edges = await edgeCounter.findByTestId("display-edges");
  expect(edges.innerHTML).toContain("2");
});
