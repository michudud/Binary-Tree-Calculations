/*
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import LeafCounter from "../components/LeafCounter";
import { exampleStructure } from "../components/data_structures/example_structure";

test("count leaves in example structure", async () => {
  const leafCounter = render(<LeafCounter dataStructure={exampleStructure} />);
  const leaves = await leafCounter.findByTestId("display-leaves");
  expect(leaves.innerHTML).toContain("5");
});

test("count leaves with only root node", async () => {
  const testStructure = [
    {
      value: 5,
    },
  ];
  const leafCounter = render(<LeafCounter dataStructure={testStructure} />);
  const leaves = await leafCounter.findByTestId("display-leaves");
  expect(leaves.innerHTML).toContain("1");
});

test("count leaves with symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5 }],
    },
  ];
  const leafCounter = render(<LeafCounter dataStructure={testStructure} />);
  const leaves = await leafCounter.findByTestId("display-leaves");
  expect(leaves.innerHTML).toContain("2");
});

test("count leaves with non symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5, children: [{ value: 5 }] }],
    },
  ];
  const leafCounter = render(<LeafCounter dataStructure={testStructure} />);
  const leaves = await leafCounter.findByTestId("display-leaves");
  expect(leaves.innerHTML).toContain("2");
});
