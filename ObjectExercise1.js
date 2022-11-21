class Village {
    constructor() {
        this.nbVillageois = 1;
        this.nbBois = 100;
        this.nbPierre = 100;
        this.nbOr = 0;
        this.Bâtiments = ["HDV"];
    }

    //custom
    static CustomVillage(nbVillageois, nbBois, nbPierre, nbOr, Bâtiments) {
        return new Village(nbVillageois, nbBois, nbPierre, nbOr, Bâtiments)
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
