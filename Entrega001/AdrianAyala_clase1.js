console.log("Adrian Ayala - Curso Backend - 28855 (INICIO");

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    const fullName = `El nombre completo es ${this.nombre} ${this.apellido}
    `;

    return fullName;
  }

  getBookNames() {
    return this.libros;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(book) {
    this.libros.push(book);
  }
}

const unUsuario = new Usuario(
  "Adrian",
  "Ayala",
  [
    { nombre: "Biblia", categoria: "religion", paginas: 1200 },
    { nombre: "Constitucion", categoria: "legales", paginas: 800 },
  ],
  ["Loro", "pez", "perro", "gato"]
);

const nombreCompleto = unUsuario.getFullName();
console.log(nombreCompleto);
unUsuario.addMascota("tortuga");
console.log(`El usuario tiene ${unUsuario.countMascotas()} mascotas`);
unUsuario.addBook({ nombre: "Java", categoria: "educacion", paginas: 900 });
console.log(unUsuario);
console.log(unUsuario.getBookNames());

console.log("Adrian Ayala - Curso Backend - 28855 (FIN)");
