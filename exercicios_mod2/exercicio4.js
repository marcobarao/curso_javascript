function adicionar() {
  var inputElement = document.querySelector("input[name=nome]");
  var nome = inputElement.value;

  var ilElement = document.createElement("li");
  var textElement = document.createTextNode(nome);

  ilElement.appendChild(textElement);
  ulElement.appendChild(ilElement);
}
