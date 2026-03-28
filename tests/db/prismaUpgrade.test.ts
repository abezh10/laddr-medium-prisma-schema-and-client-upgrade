export const sampleTestCases = [
  { id: "starter-1", label: "covers the basic prisma Upgrade.test path", expected: "pending" },
  { id: "starter-2", label: "captures an edge case for prisma Upgrade.test", expected: "pending" },
];

export function describeStarterCases() {
  return sampleTestCases.map((testCase) => testCase.label);
}
