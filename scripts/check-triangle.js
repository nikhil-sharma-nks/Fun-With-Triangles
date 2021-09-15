const angle1Input = document.querySelector(".angle-input-1");
const angle2Input = document.querySelector(".angle-input-2");
const angle3Input = document.querySelector(".angle-input-3");

const submitBtn = document.querySelector(".btn-submit");

const resultMsg = document.querySelector(".result");
const errorMsg = document.querySelector(".error");

submitBtn.addEventListener("click", function submitBtnClick() {
  const angle1 = Number(angle1Input.value);
  const angle2 = Number(angle2Input.value);
  const angle3 = Number(angle3Input.value);
  resultMsg.style.display = "none";
  errorMsg.style.display = "none";

  if (angle1 && angle2 && angle3) {
    if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
      let sum = angle1 + angle2 + angle3;
      console.log(sum);
      if (sum === 180) {
        resultMsg.style.display = "block";
        resultMsg.style.color = "green";
        resultMsg.innerText = `${angle1}, ${angle2}, ${angle3} Does Make A Triangle!`;
      } else {
        resultMsg.style.display = "block";
        resultMsg.style.color = "red";
        resultMsg.innerText = `${angle1}, ${angle2}, ${angle3} Does NOT Make A Triangle!`;
      }
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerText = "ERROR: Please Enter Positive Angle Only";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "ERROR: Please Enter All Three Angles";
  }
});
