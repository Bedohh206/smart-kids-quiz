import fetch from 'node-fetch';

async function main(){
  try{
    const res = await fetch('http://127.0.0.1:5000/');
    console.log('status', res.status);
    const text = await res.text();
    console.log('body length', text.length);
    console.log(text.slice(0,500));
  } catch(err){
    console.error('request failed', err.message);
  }
}

main();
