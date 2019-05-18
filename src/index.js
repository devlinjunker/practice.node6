import '@babel/polyfill'; // Required at entry point of application
import App from './interface';

function test (int) {

  console.log('before promise');

  return new Promise((resolve/* , reject*/) => {
    setTimeout(() => {
      resolve(int * 2);
    }, 2000);
  });
}

async function main () {
  const promise = test(22);
  console.log(promise);

  const val = await promise;
  console.log(val);
}

main();

const app = new App();

app.run();
