import morse from "./morse.gif";
import wordle from "./wordle.gif";
import booksapi from "./googleapi.gif";
import calculator from "./calculator.gif";

const morseObj = {
  title: "Morse Code Translator",
  image: morse,
  desc: "A simple morse translator built with HTML, CSS & Vanilla Javascript. Purpose of project is to demonstrate DOM manipulation, unit testing and objects.",
  git: "https://github.com/Paultree/morse-code-translator",
};

const wordleObj = {
  title: "Wordle Unlimited",
  image: wordle,
  desc: "A wordle clone built with HTML, CSS & Vanilla Javascript to demonstrate DOM manipulation.",
  git: "https://github.com/Paultree/wordle-clone",
};

const booksObj = {
  title: "Booki",
  image: booksapi,
  desc: "A search UI for the Google Books API using React and React Router.",
  git: "https://github.com/Paultree/google-books-react",
};

const calcObj = {
  title: "Calculator",
  image: calculator,
  desc: "A simple calculator app built with HTML, CSS & Vanilla Javascript.",
  git: "https://github.com/Paultree/calculator-project",
};

export { morseObj, wordleObj, booksObj, calcObj };
