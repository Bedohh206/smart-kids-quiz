import fetch from 'node-fetch';

const url = 'http://localhost:5000/api/lesson';
const bodyBase = { topic: 'Planets', age: 8, language: 'English' };

async function postMode(mode){
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...bodyBase, mode }),
    });

    const text = await res.text();
    console.log('\n--- mode:', mode, 'status:', res.status);
    console.log('raw:', text);
    try{ console.log('json:', JSON.stringify(JSON.parse(text), null, 2)); }catch(e){}
  } catch (err) {
    console.error('failed', mode, err.message || err);
  }
}

async function main(){
  for (const m of ['static','ai','auto']){
    await postMode(m);
  }
}

main();
