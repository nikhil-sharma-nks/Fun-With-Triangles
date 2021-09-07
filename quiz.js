const sumbitBtn = document.querySelector("#submit-answers-btn");
const quizform = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

sumbitBtn.addEventListener("click", function sumbitOnClickHandler() {
  const formResults = new FormData(quizform);
  console.log("Working");
  console.log(formResults.keys());
  console.log(formResults.values());
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index++;
  }
  // console.log("The score is "+score);
  result.innerText = "The score is " + score;
});
