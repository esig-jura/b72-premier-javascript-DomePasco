"use strict";

// alert("Bonjour le monde");
let nom = "Domenico";

// affiche la variable dans la console
console.log("Salut ", "le ", nom);

// récupère le premier <h1> de la page
const titrePrincipal = document.querySelector("h1");

//titre en jaune
titrePrincipal.style.color = "yellow";

/**
 * Ajoute du style à tous les `<li>` de la page
 */
function styleLi() {
    //récupère tous les <li>
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);
    elementsDeListe[1].style.color = "red";

    // Boucle parcourant et mettant un fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = "yellow";
    }
    // même chose avec for..of
    for (let element of elementsDeListe) {
        element.style.fontWeight = "bold";
    }
}
// écouter l'évènement click sur le <h1>
titrePrincipal.addEventListener("click", styleLi);

//récupère le formulaire
const form = document.querySelector("form");

//récupère la ol avec la classe commentaires
const olCommentaires = document.querySelector(".commentaires");

//récupère l'input #commentaire
const inputCommentaire = document.querySelector("#commentaire");

//écouter l'envoi du formulaire
form.addEventListener("submit", function ajouterCommentaire(event){
    event.preventDefault(); //stop le comportement par défaut
    //ajoute le contenu du champ commentaire à la liste
    olCommentaires.innerHTML += "<li>" + inputCommentaire.value + "</li>";
    // Vide le champ commentaire
    inputCommentaire.value = "";
    // Redonner le focus au champ commentaire
    inputCommentaire.focus();
});