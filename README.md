# Next.js 15 App Directory Hydration Failure

This repository demonstrates a bug in Next.js 15's `app` directory where hydration fails inconsistently when using server components and complex asynchronous data fetching. The issue is caused by unhandled errors or race conditions during data fetching.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the intermittent hydration failures.  Refreshing the page may or may not resolve the issue.

## Solution

The solution involves robust error handling and proper management of asynchronous operations within server components to prevent race conditions and ensure consistent hydration.  See `bugSolution.js` for the corrected code.