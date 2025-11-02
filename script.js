document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  // Validation
  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Create a promise to simulate delay
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise result
  checkEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
