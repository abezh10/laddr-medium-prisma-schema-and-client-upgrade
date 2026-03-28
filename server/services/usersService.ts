export const starterusersServiceItems = [
  { id: "starter-1", label: "Sample users service record", status: "draft" },
  { id: "starter-2", label: "Another users service record", status: "ready" },
];

export async function loadusersServicePreview() {
  return Promise.resolve(starterusersServiceItems);
}

export async function saveusersServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The users service workflow is intentionally unfinished in Prisma Schema and Client Upgrade.",
  });
}
