const estadosPermitidos = [
  'Pendiente',
  'En seguimiento',
  'Respondida',
  'Cerrada'
];

let siguienteId = 1;
const peticiones = new Map();

function validarDatosRegistro(datos) {
  const campos = ['nombre', 'apellido', 'descripcion', 'fechaRecepcion', 'canalOrigen'];
  return campos.every(
    (campo) => typeof datos?.[campo] === 'string' && datos[campo].trim() !== ''
  );
}

function registrarPeticion(datos) {
  if (!validarDatosRegistro(datos)) {
    throw new Error('Datos incompletos para registrar la petición');
  }

  const peticion = {
    id: siguienteId++,
    nombre: datos.nombre,
    apellido: datos.apellido,
    descripcion: datos.descripcion,
    fechaRecepcion: datos.fechaRecepcion,
    canalOrigen: datos.canalOrigen,
    estado: 'Pendiente'
  };

  peticiones.set(peticion.id, peticion);
  return { ...peticion };
}

function actualizarEstado(id, nuevoEstado) {
  if (!estadosPermitidos.includes(nuevoEstado)) {
    throw new Error(`Estado no permitido: ${nuevoEstado}`);
  }

  const peticion = peticiones.get(id);
  if (!peticion) {
    throw new Error('Petición no encontrada');
  }

  peticion.estado = nuevoEstado;
  return { ...peticion };
}

function reiniciarPeticiones() {
  peticiones.clear();
  siguienteId = 1;
}

module.exports = {
  estadosPermitidos,
  validarDatosRegistro,
  registrarPeticion,
  actualizarEstado,
  reiniciarPeticiones
};