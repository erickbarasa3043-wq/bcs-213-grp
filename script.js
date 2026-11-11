let studentName = "victor musyoka";
let registrationNumber = "COM/B/01-00122/2025";
let programme = "Computer Science";
console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Programme: " + programme);
function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "E";
  }
}
let grade = calculateGrade(75);
alert("The grade for a score of 75 is: " + grade);
const registrationForm = document.querySelector("#registration form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("fullname").value;
  const regNo = document.getElementById("regno").value;


  const output = document.getElementById("output");
  output.innerHTML =
    "<p><strong>Student Name:</strong> " + name + "</p>" +
    "<p><strong>Registration Number:</strong> " + regNo + "</p>";


  const message = document.getElementById("successMessage");
  message.textContent = "Registration submitted successfully!";
  message.style.color = "green";
  message.style.fontWeight = "bold";
});
const registrationForm = document.querySelector("#registration form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const regNo = document.getElementById("regno").value.trim();
  const email = document.getElementById("email").value.trim();

  const errorBox = document.getElementById("errorMessage");
  const output = document.getElementById("output");
  const message = document.getElementById("successMessage");

  errorBox.textContent = "";
  output.innerHTML = "";
  message.textContent = "";

  
  if (name === "" || regNo === "") {
    errorBox.textContent = "Full name and registration number cannot be empty.";
    errorBox.style.color = "red";
    return;
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorBox.textContent = "Please enter a valid email address (e.g. name@example.com).";
    errorBox.style.color = "red";
    return;
  }


  output.innerHTML =
    "<p><strong>Student Name:</strong> " + name + "</p>" +
    "<p><strong>Registration Number:</strong> " + regNo + "</p>";

  message.textContent = "Registration submitted successfully!";
  message.style.color = "green";
  message.style.fontWeight = "bold";
});