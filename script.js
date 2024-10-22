document.getElementById("madlib-btn").addEventListener("click", getwords);

function getwords() {
  // Input: Retrieve the user's data
  let noun = document.getElementById("noun-input").value;
  let adjective = document.getElementById("adjective-input").value;
  let tense = document.getElementById("tense-input").value;
  let noun2 = document.getElementById("noun2-input").value;

  // Processing: Make output statement
  let output = `"There are too many ${noun} on this ${adjective} airplane!", I screamed.
  "Somebody has to ${tense} on the ${noun2} to solve this problem!"`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("results").innerHTML = output;
}

document.getElementById("madlib2-btn").addEventListener("click", getwords2);

function getwords2() {
  // Input: Retrieve the user's data
  let family = document.getElementById("family-input").value;
  let action = document.getElementById("action-input").value;
  let noun3 = document.getElementById("noun3-input").value;

  // Processing: Make output statement
  let output = `"My ${family} loves to eat ${noun3} and then ${action}."`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("results2").innerHTML = output;
}
