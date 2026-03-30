import { consoleMenu } from './helperFunctions.js';
import promptSync from 'prompt-sync';

const promptInstance = promptSync({ sigint: true });

const invokeConsoleMenu = () => {
  while (true) {
    console.log('='.repeat(30));
    console.log('\nMenu:');
    console.log('1. Generate new inspirational message.');
    console.log('2. Copy the last message to clipboard.');
    console.log('3. Exit.\n');
    console.log('='.repeat(30));

    const userPrompt = promptInstance('Type in a number of an option from menu: ');
    consoleMenu(userPrompt);
  }
};

invokeConsoleMenu();
