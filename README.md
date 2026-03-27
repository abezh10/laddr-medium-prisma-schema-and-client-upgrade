# Prisma Schema and Client Upgrade

- Category: Migrate / Version Migration
- Difficulty: Medium

## Contains
- `server/services/usersService.ts`
- `server/db/prisma/schema.prisma`
- `server/db/prisma/client.ts`
- `tests/db/prismaUpgrade.test.ts`
- `package.json`

## Prompt
The codebase still uses older Prisma query patterns after a dependency upgrade. Update the data-access layer so it works with the new client while keeping API behavior stable.

## Likely Change Dirs
- `server/services`
- `server/db/prisma`
- `server/tests/db`
