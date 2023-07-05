document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var color = document.getElementById('color').value;

  if (name && color) {
      document.body.style.backgroundColor = color;
      document.getElementById('message').innerText = "Hello, " + name + "! Welcome to your " + color + " page!";
  }
});
