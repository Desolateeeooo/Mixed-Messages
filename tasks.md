### Plan Your Project:

- [] My project can be run from terminal.
- [] Each time my project is being run in the terminal it presents a user with a console menu.
- [] From the console you can choose one out of several options:

  > 1.  Generate a new inspirational message.
  > 2.  Copy the last message to clipboard.
  > 3.  Exit.

- [] My project should use Git version control.

### Come Up with a Topic:

My program would output an inspirational message on each generation. This message would consist out of 3 different pieces of data.

- Here’s an example of what the output of a horoscope generator could look like:

```css
Your sign is sun.

You are having good luck.

You should: "trust no one"
```

- Think about what parts of the string could stay the same each time and what parts could change. In the output above, what do you think are the pieces that change each time?

### Store message components:

- Store message components in a Tree Data Structure.

### Create the messages:

- Take inspirational quotes from different animes that you've watched and tie each tree to a certain character from an anime.

### Fix this later:

```js
const printDotsWithDelay = setInterval(() => console.log('.'), 6);

let counter = 0;
for (let i = 0; i <= 30; i++) {
  counter++;
}

clearInterval(printDotsWithDelay);
```
