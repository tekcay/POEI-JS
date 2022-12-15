/*
Créer un module Animation.js qui contiendra la classe Animation qui aura les méthodes suivantes:
- constructor(element)
- deplacer(x, y)
- agrandir(largeur, hauteur)
- changerCouleur(couleur)
- pivoter(degrees)
- disparaitre()
- apparaitre()
*/


class Animation {
    constructor() {
        this.element = element;
    }

    getElement() {
        return this.element;
    }

    /**
     * 
     * @param {int} x can be negative to move it to the right 
     * @param {int} y can be negative to move it to the bottom
     */
    deplacer(x, y) {
        this.element.style.left = x;
        this.element.style.top = y;
    }

    agrandir(largeur, hauteur) {

    }

    changerCouleur(couleur) {
        this.element.style.couleur = couleur;
    }

    pivoter(degrees) {
        this.element.syle.transform = "rotate(${deg} deg";
    }

    disparaitre() {
        this.element.style.display = "none";
    }

    apparaitre() {
        this.element.style.display = "block";
    }
}