// API config
const apiUrl = "https://api.github.com/users";

async function buscarDadosDeUsuario(nomeDoUsuario) {
  const response = await fetch(apiUrl + `/${nomeDoUsuario}`);
  const json = await response.json();
  return json;
}

// Aplication config
const avatarImage = document.querySelector("img#user-avatar");
const nameUser = document.querySelector("#name-user");
const bio = document.querySelector("#bio");
const repoNumber = document.querySelector("#repo-number");
const followers = document.querySelector("#followers-number");
const following = document.querySelector("#following-number");

const inputSearch = document.querySelector("input#search");
const buttonSearch = document.querySelector("button#button-search");

buttonSearch.addEventListener("click", () => {
  const nickName = inputSearch.value;
  if (nickName.length > 0) {
    inputSearch.value = "";

    buscarDadosDeUsuario(nickName).then((dados) => {
      if (dados.message === "Not Found") {
        alert("Usuário digitado não existe!");
      } else {
        const boxProfile = document.querySelector(".box-profile");
        boxProfile.style.display = "flex";
        avatarImage.src = dados.avatar_url;
        nameUser.innerHTML = dados.name;
        bio.innerHTML = dados.bio;

        const fieldNames = ["Repositórios", "Seguidores", "Seguindo"];
        const fields = document.querySelectorAll(".informations");

        for (let c = 0; c < fields.length; c++) {
          fields[c].innerHTML = fieldNames[c];
        }

        repoNumber.innerHTML = dados.public_repos;
        followers.innerHTML = dados.followers;
        following.innerHTML = dados.following;
      }
    });
  } else {
    alert("Digite o nome de usuário!");
  }
});
