import { runAI } from '../src/api/chatgptService.js';

async function main(){
  const out = await runAI('Test prompt for mock or real call');
  console.log('runAI output:', out);
}

main();
