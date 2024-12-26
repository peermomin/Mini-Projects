document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const result = document.querySelector("#results");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const weightInput = document.querySelector("#weight");
      const heightInput = document.querySelector("#height");
  
      const weightValue = parseFloat(weightInput.value);
      const heightValue = parseFloat(heightInput.value);
  
      
      weightInput.style.borderColor = "";
      heightInput.style.borderColor = "";
  
      if (isNaN(weightValue) || weightValue <= 0) {
        result.innerHTML = `<p>Please enter a valid weight.</p>`;
        weightInput.style.borderColor = "red";
      } else if (isNaN(heightValue) || heightValue <= 0) {
        result.innerHTML = `<p>Please enter a valid height.</p>`;
        heightInput.style.borderColor = "red";
      } else {
        const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);
        result.innerHTML = `<p>Your BMI is ${bmi}</p>`;
  
        form.reset();
      }
    });
  });
  