function temHabilidades(skills) {
  return skills.indexOf("Javascript") >= 0;
}

var skills = ["Javascript", "ReactJS", "React Native"];
resultado = temHabilidades(skills);
console.log(resultado);
