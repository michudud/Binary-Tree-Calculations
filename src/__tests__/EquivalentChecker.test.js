/*
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import EquivalentChecker from "../components/EquivalentChecker";
import { exampleStructure } from "../components/data_structures/example_structure";

test("check equivalence in example structure", async () => {
  const equivalenceChecker = render(
    <EquivalentChecker dataStructure={exampleStructure} />
  );
  const equivalence = await equivalenceChecker.findByTestId(
    "display-equivalence"
  );
  expect(equivalence.innerHTML).toContain("false");
});

test("check equivalence with only root node", async () => {
  const testStructure = [
    {
      value: 5,
    },
  ];
  const equivalenceChecker = render(
    <EquivalentChecker dataStructure={testStructure} />
  );
  const equivalence = await equivalenceChecker.findByTestId(
    "display-equivalence"
  );
  expect(equivalence.innerHTML).toContain("only");
});

test("check equivalence with in symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5 }],
    },
  ];
  const equivalenceChecker = render(
    <EquivalentChecker dataStructure={testStructure} />
  );
  const equivalence = await equivalenceChecker.findByTestId(
    "display-equivalence"
  );
  expect(equivalence.innerHTML).toContain("true");
});

test("check equivalence in non symmetrical children structure", async () => {
  const testStructure = [
    {
      value: 5,
      children: [{ value: 5 }, { value: 5, children: [{ value: 5 }] }],
    },
  ];
  const equivalenceChecker = render(
    <EquivalentChecker dataStructure={testStructure} />
  );
  const equivalence = await equivalenceChecker.findByTestId(
    "display-equivalence"
  );
  expect(equivalence.innerHTML).toContain("false");
});

test("check equivalence in symmetrical children structure with mixed children places", async () => {
  const testStructure = [
    {
      value: 1,
      children: [
        {
          value: 2,
          children: [{ value: 3, children: [{ value: 5 }] }, { value: 4 }],
        },
        {
          value: 2,
          children: [{ value: 4 }, { value: 3, children: [{ value: 5 }] }],
        },
      ],
    },
  ];
  const equivalenceChecker = render(
    <EquivalentChecker dataStructure={testStructure} />
  );
  const equivalence = await equivalenceChecker.findByTestId(
    "display-equivalence"
  );
  expect(equivalence.innerHTML).toContain("true");
});
