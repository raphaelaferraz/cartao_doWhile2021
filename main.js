
const linksSocialMedia = {
  github: "raphaelaferraz",
  youtube: "jakelinygracielly",
  facebook: "raphaela.gferraz",
  twitter: "jakelinytec"
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    alert(li.children[0].href);
  }
}

changeSocialMediaLinks()