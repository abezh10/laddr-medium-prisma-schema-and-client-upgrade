# Prisma Schema and Client Upgrade

- Category: Migrate
- Topic: Version Migration
- Difficulty: Medium

## Overview
This sample repository is set up for a medium migrate exercise in the version migration track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to move the implementation to the target framework or version while preserving behavior.

## Exercise Summary
The codebase still uses older Prisma query patterns after a dependency upgrade. Update the data-access layer so it works with the new client while keeping API behavior stable.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/db/prisma/client.ts`
- `server/db/prisma/schema.prisma`
- `server/services/usersService.ts`
- `tests/db/prismaUpgrade.test.ts`

## Likely Change Areas
- `server/db/prisma`
- `server/services`
- `tests/db`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
