var containerElement = document.querySelector("#app");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

buttonElement.onclick = function() {
  var user = inputElement.value;

  var loadingElement = document.createElement("p");
  var loadingText = document.createTextNode("Loading...");

  loadingElement.appendChild(loadingText);
  containerElement.appendChild(loadingElement);

  //   axios.get('https://api.github.com/users/' + user + '/repos')
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
      var listRepos = document.createElement("ul");

      for (repo of response.data) {
        var liRepo = document.createElement("li");
        var textRepo = document.createTextNode(repo.name);

        liRepo.appendChild(textRepo);
        listRepos.appendChild(liRepo);
      }

      containerElement.removeChild(loadingElement);
      containerElement.appendChild(listRepos);
    })
    .catch(function(error) {
      var errorElement = document.createElement("p");

      errorElement.style.color = "#f00";

      var errorText = document.createTextNode("Não encontrado");

      errorElement.appendChild(errorText);
      containerElement.removeChild(loadingElement);
      containerElement.appendChild(errorElement);
    });
};
