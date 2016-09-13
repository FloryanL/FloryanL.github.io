function myFunction() {
    alert("formulaire non fonctionnel");
}

var popup;

function open_challenge() {
    popup = window.open('elements/images/maquette2.png', 'Projet1', 'menubar=no, scrollbars=no, top=200, left=700, width=400, height=600');
}

$(document).ready(function () {
    // au clic sur un lien
    $('a[href^="#"]').click(function () {
        // bloquer le comportement par défaut: on ne rechargera pas la page
        evt.preventDefault();
        // enregistre la valeur de l'attribut  href dans la variable target
        var target = $(this).attr('href');
        /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
        et safari (webkit) */
        $('html, body')
            // on arrête toutes les animations en cours 
            .stop()
            /* on fait maintenant l'animation vers le haut (scrollTop) vers 
             notre ancre target */
            .animate({ scrollTop: $(target).offset().top }, 1000);
    });
});

