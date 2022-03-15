
var mediaQuerry = window.matchMedia("(max-width: 800px)") //creer une variable pour controler la largeur de la page (utile pour le responsive design)
mediaQuerry.addListener(afficherPage) // ajouter un listner pour detecter les changements liés a la fonction afficherPage
            
//fonction qu'on déclenche à chauqe clique sur un des boutons du menu
function afficherPage(pageAafficher) {
  var i, content;

  //Reccuperer le contenu (page) a afficher par le nom de sa classe puis cacher les éléments des autres pages 
  //pour s'assurer que le contenu qui sera afficher appartient uniquement a la page qu'on souhaite afficher
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none"; //ne pas afficher les eleemnts des pages differentes de celle possédant un id=pageAafficher
  }
  
  //controler les medias querries a partir de la variable mediaQuerry créer au debut
  if(mediaQuerry.matches){
    document.getElementById(pageAafficher).style.display="block";//disposer les elements sous forme de block
  }
  else{ 
    document.getElementById(pageAafficher).style.display="flex"; //disposer les elements sous forme de flex (un a cote de l'autre)
  }
  
}
// cliquer sur le bouton avec pour id="resumeParDefaut" dans le cas ou aucun bouton n'a été cliqué
document.getElementById("resumeParDefaut").click();

        