export class Animal {
    constructor(Patas, Nombre, Especie) {
        this.Patas = Patas
        this.Nombre = Nombre
        this.Especie = Especie
        this.Speak()
    }
    Speak() {
        console.log(`Se ha creado el animal de la especie ${this.Especie}
                     Que tiene ${this.Patas} patas y es de color ${this.Color}   `);

    }
}

