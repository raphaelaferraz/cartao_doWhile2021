// Armazena os valores digitados no prompt
let github = prompt('Digite aqui o seu usuário do GitHub');
let youtube = prompt('Digite aqui o link do seu YouTube');
let instagram = prompt('Digite aqui o seu usuário do Instagram');
let facebook = prompt('Digite aqui o link do seu facebook');
let linkedin = prompt('Digite aqui o link do seu LinkedIn');

// Objeto que contém os trechos dos links das redes sociais
const linksSocialMedia = {
  github: github,
  youtube: youtube,
  instagram: instagram,
  facebook: facebook,
  linkedin: linkedin
};

// Armazena o elemento ul
const socialLinks = document.querySelector('#socialLinks');

//função para mudar os links das redes sociais de acordo com o usuário
function changeSocialMediaLinks() {
  // Itera pelos itens de ul
  for (let li of socialLinks.children) {
    // Armazena a classe das tags li
    const social = li.getAttribute('class');
    // Pega o primeiro filho de li e muda o href
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

// Função que entra em contato com a API do GitHub
function getGitHubProfileInfos() {
  // Armazena a URL
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  // Realiza o contato com a API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
