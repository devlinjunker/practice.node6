// @flow
import readline from 'readline';

export default class App {
  rl: any;
  running: any;

  constructor () {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.running = true;
  }

  async run () {
    await this.loop();

    this.shutdown();
    return 0;
  }

  async loop () {
    while (this.running) {
      const userInput = await this.getInput();

      switch (userInput) {
      default:
        this.rl.write(`input recieved: ${userInput} \n`);
      }

      this.running = false;
    }

    return;
  }

  shutdown () {
    this.rl.close();
  }

  getInput (): Promise<string> {
    return new Promise((resolve/* , reject */) => {
      this.rl.question('Waiting on response... ', (response) => {
        resolve(response);
      });
    });
  }
}
