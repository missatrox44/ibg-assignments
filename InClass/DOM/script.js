document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var color = document.getElementById('color').value;

  if (name && color) {
      document.body.style.backgroundColor = color;
      document.getElementById('message').innerText = "Hello, " + name + "! Welcome to your " + color + " page!";
  }
});


// We use document.getElementById() to select our form and attach an event listener to it. This function runs every time the form is submitted.
// Event listener takes in two parameters: type of event as a string, callback function
// We prevent the default form submission behavior, which would refresh the page, using e.preventDefault().
// We grab the name and color from the form inputs using their id and value.
// If both a name and a color have been entered, we change the background color of the page to the entered color and display a message including the name and color entered.