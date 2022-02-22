export const apiUrl = "https://api.github.com/users";

export async function buscarDadosDeUsuario(nomeDoUsuario) {
  const response = await fetch(apiUrl + `/${nomeDoUsuario}`);
  const json = await response.json();
  return json;
}
