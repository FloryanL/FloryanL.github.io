function myFunction() {
    alert("formulaire non fonctionnel");
}

var popup;

function open_challenge() {
    popup = window.open('elements/images/maquette2.png', 'Projet1', 'menubar=no, scrollbars=no, top=200, left=700, width=400, height=600');
}

/*Jquery
$(document).ready(function () {

    $('a[href^="#"]').click(function () {

        evt.preventDefault();

        var target = $(this).attr('href');

        $('html, body')

            .stop()

            .animate({ scrollTop: $(target).offset().top }, 1000);
    });
});
*/

// au clic sur un lien
// bloquer le comportement par défaut: on ne rechargera pas la page
// enregistre la valeur de l'attribut  href dans la variable target
//le sélecteur $(html, body) permet de corriger un bug sur chrome et safari (webkit)
// on arrête toutes les animations en cours 
// on fait maintenant l'animation vers le haut (scrollTop) vers notre ancre target