var nomes = ["Diego", "Gabriel", "Lucas"];
var ulElement = document.createElement("ul");

for (nome of nomes) {
  var ilElement = document.createElement("li");
  var textElement = document.createTextNode(nome);

  ilElement.appendChild(textElement);
  ulElement.appendChild(ilElement);
}

containerElement.appendChild(ulElement);
