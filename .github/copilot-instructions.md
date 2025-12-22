<!-- Copilot / Agent instructions for the Smart Kids Quiz repo -->
# Smart Kids Quiz — Copilot Instructions

Keep guidance short and actionable. Use the examples and file links below to understand common patterns and where to make changes.

## Big picture (what to know first)
- **Two-part app**: a React Vite client (src/) and a lightweight Node server (server/). The client is built with Vite and React; the server is an Express app used for API endpoints and AI proxying.
- **AI pieces**: server-side AI helpers live in `src/api/chatgptService.js` (client-edge) and `server/` (server-side). Both call OpenAI and expect specific text formats.
- **Routing & deploy**: frontend uses a forced basename `/smart-kids-quiz` in `src/App.jsx` — this affects build and hosting paths.

## Key files to inspect
- `package.json` — dev scripts: `npm run dev` (concurrently runs server + vite), `npm run build`, `npm run preview`.
- `server/server.js` — express server, health check and AI lesson route (/api/lesson) example.
- `src/api/lesson.js` — edge-runtime lesson handler used by the client. Shows the exact AI prompt / response format expected.
- `src/api/chatgptService.js` — OpenAI call wrapper. Uses `process.env.OPENAI_API_KEY` and model `gpt-4o` by default.
- `src/` and `assets/` — frontend components & question data used by the UI (`src/components`, `src/data`).

## Important patterns & conventions (project-specific)
- AI endpoints require STRICT plain-text formatting. Example (must be followed exactly):

  - `Step 1 || Step 2 || Step 3 || Step 4`

  Both `server/server.js` and `src/api/lesson.js` parse responses by splitting on `||`. Do not return JSON/Markdown from the model for these routes.
- When adding or modifying an AI route, create a clear system prompt (server-side) and a small deterministic post-processor that splits by `||` and trims entries.
- Use `runAI` (or the server helper) to call OpenAI consistently; it returns trimmed text or `null` on failure — handle `null` safely.
- Frontend routing assumes the app is served at `/smart-kids-quiz` (see `src/App.jsx`). If changing base path, update the `basename` and any static asset references.

## Build / dev / debug workflows
- Start local dev (client + server):

  npm run dev

- Start only the server:

  npm run server

- Start only the client (vite):

  npm run client

- Build production frontend:

  npm run build

- After `build`, the static output is under `build/` and `build/static/` (used for deployments).

## Environment & secrets
- The OpenAI key must be set as `OPENAI_API_KEY` in the environment. The server and `src/api/chatgptService.js` read from `process.env`.
- The code uses `node-fetch` for server-side HTTP calls (server and `src/api` use fetch-style calls). Keep package versions in sync with `package.json`.

## Integration points & data flow examples
- Frontend -> server: client calls `/api/lesson` (see `server/server.js`) or the edge handler at `src/api/lesson.js` depending on runtime/deployment.
- Server -> OpenAI: `server/server.js` or `src/api/chatgptService.js` posts to OpenAI endpoints and returns plain text which the server splits and forwards.
- Data: question banks are in `src/data/*` and exported from `src/index.js` — update those files to add or change questions.

## Small examples
- To add a new AI lesson endpoint follow `src/api/lesson.js`: build a system prompt, call the shared `runAI` wrapper, then `split('||').map(s => s.trim())` and return JSON with `steps`.
- To change the UI routing base, update `src/App.jsx` `basename` and re-test `npm run dev`.

## Hybrid mode (AI + Static) — Quick reference
- API contract: POST `/api/lesson` with JSON body `{ topic, age, language?, mode? }` where `mode` is one of `auto|ai|static`.
- Behavior:
  - `static`: returns a deterministic 4-step lesson (server-side generator).
  - `ai`: attempts an AI call and returns an error message if AI fails.
  - `auto`: attempts AI and falls back to `static` on failure.
- Server route: `server/server.js` implements the `mode` handling and static fallback.
- Edge handler: `src/api/lesson.js` mirrors the same `mode` logic for edge deployments.

### Testing locally
- Use the included test script to exercise all modes:

  node scripts/testLessonModes.js

- Or curl (PowerShell note): use `curl.exe` rather than PowerShell's `curl` alias:

  curl.exe -X POST http://localhost:5000/api/lesson -H "Content-Type: application/json" -d '{"topic":"Planets","age":8,"mode":"auto"}'

### Where to change fallback text
- The deterministic static steps are generated in `server/server.js` (function `staticSteps`) and `src/api/lesson.js` (local fallback). Edit those to customize default phrasing.

## Gotchas / pitfalls
- Do not change the `||` formatting used by AI prompts and parsers — many parts of the codebase rely on this delimiter.
- `README.md` contains stale/inline React sample code — do not rely on it as the canonical architecture doc.
- Deployments must honor the `basename` path; otherwise routes and static assets will break.

## When in doubt
- Inspect `server/server.js` and `src/api/*` first for any API or AI-related changes.
- Run `npm run dev` locally to reproduce front-end + server behavior.

---
Please review — would you like more examples or a short checklist for adding new AI endpoints?
