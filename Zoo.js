export class Zoo {
    constructor(Nombre) {
        this.Nombre = Nombre
        this.Animales = []
    }
    addAnimal(Animal) {
        this.Animales.push(Animal)
    }
}