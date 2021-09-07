const baseSideInput = document.querySelector(".base-side-input");
const heightInput = document.querySelector(".height-input");

const submitBtn = document.querySelector(".btn-submit");

const resultMsg = document.querySelector(".result");
const errorMsg = document.querySelector(".error");

submitBtn.addEventListener("click", function submitBtnClick() {
  const baseSide = Number(baseSideInput.value);
  const height = Number(heightInput.value);
  resultMsg.style.display = "none";
  errorMsg.style.display = "none";

  if (baseSide && height) {
    let sumOfSquare = baseSide * baseSide + height * height;

    const hypotenuse = Math.sqrt(sumOfSquare).toFixed(2);

    resultMsg.style.display = "block";
    resultMsg.style.color = "green";
    resultMsg.innerText = `Hypotenuse Of Triangles with base side ${baseSide} and height ${height} is ${hypotenuse}`;
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "ERROR: Please Enter All The Input";
  }
});
