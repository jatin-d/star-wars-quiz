# Star Wars Quiz

*Description*: Star wars quiz is a wizard style quiz to test an individual's prowess in Star Wars

- The app does following

   1. Loads data from mocked service implementation (JSON data having questions for the quiz)
   2. Provides wizard like user interface to navigate through questions and answer them
   3. Implements components to render different types of questions differently
   4. Enforces users to attempt all questions before they can submit the quiz
   5. Once all questions are answered, the "Submit" button allows them to submit answers and see the final score
   6. The final score is displayed in one single page with correct answers
   7. User can re-do the quize using a button provided on result page

- The functionality is implemeted using ReactJS, TypeScript and tested with Jest and Enzyme
- Styling of the UI is done with SCSS processor
- Re-usable components are created to display questions and final result entries
- Unit testing is implemented to showcase the implementation approach
- The UI is responsive for different screen sizes

# How to run the app?

1. execute `git clone https://github.com/jatin-d/star-wars-quiz.git` to clone the repo
2. execute `cd star-wars-quiz` to go to project dir
3. execute `npm install` which will pull required dependencies
4. execute `npm start` to run the app and visit `http://localhost:3000` to test the app
5. execute `npm test` and press `a` when prompted to run unit tests for the app