# Hybrid AI + Static Lessons

This project supports a hybrid lesson mode where the API can return AI-generated lessons or deterministic static lessons.

API
- Endpoint: `POST /api/lesson`
- Body: JSON `{ topic, age, language?, mode? }`
- `mode` values:
  - `static` — always return server-generated static steps
  - `ai` — call OpenAI; if it fails, return an error
  - `auto` — call OpenAI; on failure, fallback to `static`

Files to inspect
- `server/server.js` — server-mode implementation and `staticSteps` helper.
- `src/api/lesson.js` — edge handler that mirrors server behavior for edge deployments.
- `src/api/chatgptService.js` — OpenAI wrapper; contains a local mock when no API key is present.
- `src/components/QuizPage.jsx` — front-end toggle and UI wiring (`lessonApiMode` + `Start Lesson`).

Testing locally
1. Ensure server is running:
```bash
node server/server.js
```
2. Run the provided test script which posts all modes:
```bash
node scripts/testLessonModes.js
```

Customization
- Customize `staticSteps` in `server/server.js` and `src/api/lesson.js` to change fallback text.
- If you want richer deterministic steps, replace `staticSteps` with templates that depend on `age` or `topic`.

Security
- Keep `OPENAI_API_KEY` out of source control. Store it in `.env` or OS env vars. Rotate keys if compromised.
