var containerElement = document.querySelector("#app");
var button1Element = document.querySelector("#exercicio1");

button1Element.onclick = function() {
  var boxElement = document.createElement("div");

  boxElement.addEventListener("mouseover", function() {
    var newColor = getRandomColor();
    this.style.backgroundColor = newColor;
  });

  boxElement.style.width = "100px";
  boxElement.style.height = "100px";
  boxElement.style.backgroundColor = "#f00";

  containerElement.appendChild(boxElement);
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
