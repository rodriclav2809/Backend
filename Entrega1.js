class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "El Senor de las Moscas",
        autor: "William Golding"
    },
    {
        nombre: "Fundacion",
        autor: "Isaac Asimov"
    }

]

const randomGuy = new Usuario("Elon", "Musk", libros ,["Perro", "Gato"])

console.log(randomGuy.getFullName()); // Elon Musk

console.log(randomGuy.getBookNames()); // 'El Senor de las Moscas', 'Fundacion'
randomGuy.addBook("El Senor de los Anillos", "The Hobbit")
console.log(randomGuy.getBookNames()); // 'El Senor de las Moscas', 'Fundacion', 'El Senor de los Anillos'

console.log(randomGuy.countMascotas()); // 2
randomGuy.addMascota('Conejo');
console.log(randomGuy.countMascotas()); // 3