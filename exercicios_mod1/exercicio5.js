function usuariosString(usuarios) {
  for (usuario of usuarios) {
    console.log(
      "O " +
        usuario.nome +
        " possui as habilidades: " +
        usuario.habilidades.join(", ")
    );
  }
  //   for ({ nome, habilidades } of usuarios) {
  // console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
  //}
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];
usuariosString(usuarios);
