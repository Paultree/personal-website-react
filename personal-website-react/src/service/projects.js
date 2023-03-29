import morse from "../assets/morse.gif";
import wordle from "../assets/wordle.gif";
import booksapi from "../assets/googleapi.gif";
import calculator from "../assets/calculator.gif";
import eshop from "../assets/eshop.gif";
import employee from "../assets/employee.gif";

const morseObj = {
  title: "Morse Code Translator",
  image: morse,
  desc: "A simple morse translator built with HTML, CSS & Vanilla Javascript. Purpose of project is to demonstrate DOM manipulation, unit testing and objects.",
  git: "https://github.com/Paultree/morse-code-translator",
  link: "https://paultree.github.io/morse-code-translator/",
};

const wordleObj = {
  title: "Wordle Unlimited",
  image: wordle,
  desc: "A wordle clone built with HTML, CSS & Vanilla Javascript to demonstrate DOM manipulation.",
  git: "https://github.com/Paultree/wordle-clone",
  link: "https://paultree.github.io/wordle-clone/",
};

const booksObj = {
  title: "Booki",
  image: booksapi,
  desc: "A search UI for the Google Books API using React and React Router. Demonstrates proficiency with asynchronous functions, promises and using APIs.",
  git: "https://github.com/Paultree/google-books-react",
  link: "https://react-book-search-paultree.vercel.app/",
};

const calcObj = {
  title: "Calculator",
  image: calculator,
  desc: "A simple calculator app built with HTML, CSS & Vanilla Javascript.",
  git: "https://github.com/Paultree/calculator-project",
  link: "https://paultree.github.io/calculator-project/",
};

const eshopObj = {
  title: "e-Commerce Store",
  image: eshop,
  desc: "A custom e-commerce store built with React and Firestore/Firebase. Demonstrates proficiency with React and using BaaS databases like Firestore/Firebase.",
  git: "https://github.com/Paultree/e-cshop-website",
  link: "https://e-commerce-react-paultree.vercel.app/",
};

const employeeObj = {
  title: "Employee List",
  image: employee,
  desc: "A basic full-stack application built with React TypeScript and Java Springboot. Purpose was to reinforce full-stack app building skills, learn react-query library and useForm and to upskill in creating tests for react components and Springboot. (Link not available)",
  git: "https://github.com/Paultree/employee-list",
  link: "https://google.com",
};

export { morseObj, wordleObj, booksObj, calcObj, eshopObj, employeeObj };
