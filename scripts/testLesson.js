import fetch from 'node-fetch';

async function postLesson(){
  const url = 'http://localhost:5000/api/lesson';
  const body = { topic: 'Planets', age: 8 };

  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log('Status:', res.status);
      const text = await res.text();
      console.log('Raw response:\n', text);

      try {
        const json = JSON.parse(text);
        console.log('Parsed JSON:', JSON.stringify(json, null, 2));
      } catch (err) {
        console.error('Response is not valid JSON');
      }

      return;
    } catch (err) {
      console.error(`Attempt ${attempt} failed:`, err.code || err.message);
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.error('All attempts failed');
}

postLesson();
