const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const bmi = parseFloat((weight / height) * height);
  result.innerHTML = `<span>${bmi}</span>`;
});
