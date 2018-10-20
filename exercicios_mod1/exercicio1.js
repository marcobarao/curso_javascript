function enderecoString(endereco) {
// function enderecoString({ cidade, uf, bairro, rua, numero }) {
  // return `O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na "${rua}" com n° ${numero}`;
  return (
    "O usuário mora em " +
    endereco.cidade +
    " / " +
    endereco.uf +
    ", no bairro " +
    endereco.bairro +
    ', na "' +
    endereco.rua +
    '" com n° ' +
    endereco.numero
  );
}

var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

var resultado = enderecoString(endereco);
console.log(resultado);
