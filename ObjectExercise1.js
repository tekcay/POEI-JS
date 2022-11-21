class Village {
    constructor(nbVillageois, nbBois, nbPierre, nbOr, Bâtiments) {
        this.nbVillageois = nbVillageois;
        this.nbBois = nbBois;
        this.nbPierre = nbPierre;
        this.nbOr = nbOr;
        this.Bâtiments = Bâtiments;
    }

    static DefaultVillage() {
        return new Village(1, 100, 100, 0, ["HDV"]);
    }

    getNbVillageois() {return this.nbVillageois};
    getNbBois() {return this.nbBois};
    getNbPierre() {return this.nbPierre};
    getNbOr() {return this.nbOr};
	getNbBatiments() {return this.nbBatiments};

}

display = a => console.log(a);

let village2 = new Village();
let village = new Village(1, 200, 300, 0, ["HDV"]);

display(village2);
display(village);
