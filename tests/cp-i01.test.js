const {
  registrarPeticion,
  actualizarEstado,
  reiniciarPeticiones
} = require('../src/peticiones');

describe('CP-I01 - Registro y actualización de estado', () => {
  beforeEach(() => {
    reiniciarPeticiones();
  });

  test('conserva los datos de RF-01 y actualiza el estado a En seguimiento según RF-05', () => {
    const datosPrueba = {
      nombre: 'Ana',
      apellido: 'Pérez',
      descripcion: 'Petición de prueba',
      fechaRecepcion: '2026-08-30',
      canalOrigen: 'WhatsApp'
    };

    const registrada = registrarPeticion(datosPrueba);
    const actualizada = actualizarEstado(registrada.id, 'En seguimiento');

    expect(actualizada).toMatchObject({
      ...datosPrueba,
      estado: 'En seguimiento'
    });
  });
});