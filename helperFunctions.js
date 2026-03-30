import process from 'node:process';
import clipboard from 'clipboardy';
import { charactersDatabase } from './db.js';

const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const Reset = '\x1b[0m';
const Underscore = '\x1b[4m';

const APPLICATION_STATE = { lastMessage: null };

const generateInspirationalMessage = (charactersDatabase) => {
  const character = getRandomCharacterNode(charactersDatabase);
  console.log('The character is: ' + character + '!!!!');

  const characterTopic = getRandomCharacterTopicNode(character.children);
  const characterQuote = getRandomCharacterQuoteNode(characterTopic.children);

  console.log('='.repeat(30));
  console.log(FgGreen, `\nYour mentor is: ${character.data}\n`, Reset);
  console.log(
    `I see, it seems you still lack something... Let me teach you about ${characterTopic.data}`
  );
  console.log('\n', FgRed, Underscore, characterQuote.data, Reset, '\n');
  console.log(`The next battle awaits us. So, what would be your next step?\n`);

  return characterQuote.data;
};

const copyQuoteToClipboard = (quote) => {
  try {
    clipboard.writeSync(quote);
    console.log(
      '\n',
      FgGreen,
      'The quote was copied to your clipboard successfuly!!! Please paste it somewhere with Ctrl + V buttons combination!',
      Reset,
      '\n'
    );
  } catch (err) {
    console.log(`Oops! It seems like an error has occured: ${err}`);
  }
};

export const consoleMenu = (userChoice) => {
  switch (userChoice) {
    case '1':
      const message = generateInspirationalMessage(charactersDatabase);
      APPLICATION_STATE.lastMessage = message;
      break;
    case '2':
      copyQuoteToClipboard(APPLICATION_STATE.lastMessage);
      break;
    case '3':
      console.log('Shutting down the program...');
      process.exit(0);

    default:
      console.log('Incorrect Choice. Try again.');
  }
};

function getRandomCharacterNode(charactersDatabase) {
  console.log('The chars db is: ' + charactersDatabase);
  console.log(Object.keys(charactersDatabase));
  const randomKey =
    'char' + (Math.floor(Math.random() * Object.keys(charactersDatabase).length) + 1);
  console.log('Random key is: ' + randomKey);

  return charactersDatabase[randomKey];
}

function getRandomCharacterTopicNode(topicNodesArr) {
  console.log('The chars db is: ' + charactersDatabase);
  const randomIndex = Math.floor(Math.random() * topicNodesArr.length);

  return topicNodesArr[randomIndex];
}

function getRandomCharacterQuoteNode(quoteNodesArr) {
  console.log('The chars db is: ' + charactersDatabase);
  const randomIndex = Math.floor(Math.random() * quoteNodesArr.length);

  return quoteNodesArr[randomIndex];
}
