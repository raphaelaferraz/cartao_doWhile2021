const linksSocialMedia = {
  github: 'VictorGM01',
  youtube: '/channel/UCHsp6_5KZ8iLuj6O1RHMXPg',
  instagram: 'victor_gabriiielll/',
  facebook: 'victorgabriel2017',
  linkedin: '/in/victor-gabriel-marques-4a327a208/'
}

//function to change the social media links according to the user (função para mudar os links das redes sociais de acordo com o usuário)
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href);
  }
}

changeSocialMediaLinks()
