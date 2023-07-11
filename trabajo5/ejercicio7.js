const agenda = {
    contactos: [],
  
    añadirContacto(nombre, telefono, email) {
      const contacto = { nombre, telefono, email };
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente");
    },
  
    listarContactos() {
      if (this.contactos.length === 0) {
        console.log("La agenda está vacía");
      } else {
        console.log("Lista de contactos:");
        this.contactos.forEach((contacto, index) => {
          console.log(`Contacto ${index + 1}:`);
          console.log(`Nombre: ${contacto.nombre}`);
          console.log(`Teléfono: ${contacto.telefono}`);
          console.log(`Email: ${contacto.email}`);
          console.log("---------------------");
        });
      }
    },
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(
        (contacto) => contacto.nombre === nombre
      );
      if (contactoEncontrado) {
        console.log(`Contacto encontrado:`);
        console.log(`Nombre: ${contactoEncontrado.nombre}`);
        console.log(`Teléfono: ${contactoEncontrado.telefono}`);
        console.log(`Email: ${contactoEncontrado.email}`);
      } else {
        console.log(`No se encontró ningún contacto con el nombre ${nombre}`);
      }
    },
  
    editarContacto(nombre, nuevoTelefono, nuevoEmail) {
      const contacto = this.contactos.find(
        (contacto) => contacto.nombre === nombre
      );
      if (contacto) {
        contacto.telefono = nuevoTelefono;
        contacto.email = nuevoEmail;
        console.log("Contacto editado correctamente");
      } else {
        console.log(`No se encontró ningún contacto con el nombre ${nombre}`);
      }
    },
  
    cerrarAgenda() {
      console.log("Agenda cerrada");
    },
  };
  
  agenda.añadirContacto("Juan", "123456789", "juan@example.com");
  agenda.añadirContacto("María", "987654321", "maria@example.com");
  agenda.listarContactos();
  agenda.buscarContacto("Juan");
  agenda.editarContacto("María", "555555555", "maria.nuevo@example.com");
  agenda.listarContactos();
  agenda.cerrarAgenda();