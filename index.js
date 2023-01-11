// Import Express.js
import express, { Router } from "express";

import bodyParser from "body-parser";

// This variable defines the port of your computer where the API will be available
const PORT = 3000;

// This variable instantiate the Express.js library
const app = express();

// Indicate to Express.js that you're using an additional plugin to treat parameters
app.use(bodyParser.urlencoded({ extended: true }));

let Name = [
  "Make Time: How to Focus on what Matters Every Day",
  "The Power Of Habit",
];

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
);

// The code below creates a GET route with these parameters:
// 1 - The route where the code will be executed
// 2 - The function containing the code to execute
app.get("/", (request, response) => {
  // The string we want to display on http://localhost:3000
  response.send("Welcome on the books API! Take a breath and start using it!");
});
app.get("/avail", (request, response) => {
  // The function will return your bookList in a JSON
  // Sample: { allBooks: ["Make Time: How to Focus on what Matters Every Day", "The Power Of Habit"]}
  return response.json({
    Name: "Radha",
    Gender: "Female",
    Specialist: "Pshyotherapy",
  });
});

// Replace the GET method by POST
// Reminder: POST in the API world is used to ADD a data
app.post("/avail", (request, response) => {
  // TODO: Fill the function
  const clinic = request.body.name;

  // We check if the book list includes the new book
  // If it is, we return 'false'
  if (bookList.includes(clinic)) return response.json({ success: false });

  // Otherwise, we add the new book in the list and return 'true'
  bookList.push(clinic);
  return response.json({ success: true });
});
