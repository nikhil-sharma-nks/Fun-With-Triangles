const sideInput1 = document.querySelector(".side-input-1");
const sideInput2 = document.querySelector(".side-input-2");
const sideInput3 = document.querySelector(".side-input-3");

const submitBtn = document.querySelector(".btn-submit");

const resultMsg = document.querySelector(".result");
const errorMsg = document.querySelector(".error");

submitBtn.addEventListener("click", function submitBtnClick() {
  const side1 = Number(sideInput1.value);
  const side2 = Number(sideInput2.value);
  const side3 = Number(sideInput3.value);
  resultMsg.style.display = "none";
  errorMsg.style.display = "none";

  if (side1 && side2 && side3) {
    if (side1 > 0 && side2 > 0 && side3 > 0) {
      if (
        side1 + side2 > side3 &&
        side2 + side3 > side1 &&
        side1 + side3 > side2
      ) {
        const semiPerimeter = (side1 + side2 + side3) / 2;

        const area = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - side1) *
            (semiPerimeter - side2) *
            (semiPerimeter - side3)
        ).toFixed(2);

        resultMsg.style.display = "block";
        resultMsg.style.color = "green";
        resultMsg.innerText = `Area Of Triangles with sides ${side1}, ${side2}, ${side3}  is ${area}`;

        errorMsg.innerText = "ERROR: Please Enter All The Input";
      } else {
        errorMsg.style.display = "block";
        errorMsg.innerText =
          "ERROR: Enter valid side lengths such that sum of two sides is always greater than the third one";
      }
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerText = "ERROR: Enter Positive Sides Only";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "ERROR: Enter Length For All Three Sides";
  }
});
