import https from 'https';

const data = JSON.stringify({
  topic: "Planets",
  age: 8,
  mode: "ai"
});

const options = {
  hostname: 'smart-kids-quiz-jynrvlqlm-bedohh206s-projects.vercel.app',
  path: '/api/lesson',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log(`Testing: https://${options.hostname}${options.path}`);
console.log('');

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();
