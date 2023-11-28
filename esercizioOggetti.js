// esercizio n.1 Oggetti

let persona = {
	nome: "Vincenzo",
	cognome: "Tito",
	eta: 35,

	saluta: function () {
		return "Ciao, mi chiamo " + this.nome + " " + this.cognome;
	},
};
// console.log(persona.saluta());

// esercizio n.2 Oggetti

let agenda = {
	listaContatti: [
		{
			nome: "Vincenzo",
			numero: "333 3333333",
		},
		{
			nome: "Mario",
			numero: "444-4444444",
		},
		{
			nome: "Luigi",
			numero: "555-5555555",
		},
	],

	mostraContatti: function () {
		return(Object.values(this.listaContatti));
	},

	mostraUnContatto: function (i) {
		return(this.listaContatti[i]);
    },
    
	eliminaContatto: function (contatto) {
		
		for (let i = 0; i < this.listaContatti.length; i++) {
			if (this.listaContatti[i].nome == contatto) {
				this.listaContatti.splice(i, 1);
			} else {
				return "Contatto non presente";
			}
		}
    },

	aggiungiContatto: function (nome, numero) {
        this.listaContatti.push({
            nome: nome,
            numero: numero,
        });
        return this.listaContatti;
    },

    modificaContatto: function (i, nome, numero) {
        this.listaContatti[i].nome = nome;
        this.listaContatti[i].numero = numero;
        return this.listaContatti;
    },
};

// console.log(agenda.mostraContatti());
// console.log(agenda.mostraUnContatto(0));
// console.log(agenda.eliminaContatto(6));
// console.log(agenda.aggiungiContatto("Giovanni", "666-6666666"));
// console.log(agenda.modificaContatto(1, "Giovanni", "666-6666666"));