'use strict'
let axios = require('axios')

let dog = class {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
    }
    bringDog() {
        axios.get(`https://dog.ceo/api/breed/${this.breed}/images/random`).then(imagen => {
            console.log(imagen.data)
        }).cath(err => err)

    }
}



module.exports = dog