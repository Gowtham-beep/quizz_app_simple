

# Simple Quiz App

This is a basic quiz application built using HTML, CSS, JavaScript, and Tailwind CSS for styling. The quiz app displays questions and allows users to select answers. After submitting an answer, the result is shown, and the user can navigate between questions.

## Features

- Multiple-choice questions.
- Displays correct or incorrect results after each question.
- Navigation between questions using **Back** and **Next** buttons.
- Responsive and user-friendly design using **Tailwind CSS**.
- Simple data structure for storing quiz questions in a `data.js` file.

## Technologies Used

- **HTML**: For structuring the app.
- **CSS**: Using **Tailwind CSS** for styling.
- **JavaScript**: For quiz logic, navigation, and result display.
- **Git**: For version control.

## How to Run

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/quizz_app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd quizz_app
   ```

3. Open the `index.html` file in your browser to run the quiz app.

4. Answer the questions and use the **Next** and **Back** buttons to navigate through the quiz.

## Quiz Data

The quiz questions are stored in the `data.js` file in the following format:

```javascript
export const quizData = [
  {
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
  },
  // Add more questions here
];
```

## Customization

- To add more questions, edit the `quizData` array in the `data.js` file.
- You can customize the appearance by modifying the Tailwind CSS classes in the HTML.

## License

This project is licensed under the MIT License.
