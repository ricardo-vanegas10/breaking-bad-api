// App.jsx
import React, { useState, useEffect } from 'react';
import Personajes from './personajes/Personajes';
import Buscador from './Componentes/Buscador';
import Modal from './Componentes/Modal';

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setPersonajes(Personajes.personajes);
    setPersonajesFiltrados(Personajes.personajes);
  }, []);

  const buscarPersonajes = ({ filtro, criterio, rangoEdad }) => {
    const resultados = personajes.filter((personaje) => {
      switch (criterio) {
        case 'nombre':
          return personaje.nombre.toLowerCase().includes(filtro.toLowerCase());
        case 'nacionalidad':
          return (
            filtro === '' || personaje.nacionalidad.toLowerCase().includes(filtro.toLowerCase())
          );
        case 'genero':
          return filtro === '' || personaje.genero.toLowerCase().includes(filtro.toLowerCase());
        case 'edad':
          const edad = parseInt(personaje.edad, 10);
          return (
            (rangoEdad.min === '' || edad >= parseInt(rangoEdad.min, 10)) &&
            (rangoEdad.max === '' || edad <= parseInt(rangoEdad.max, 10))
          );
        default:
          return false;
      }
    });
    setPersonajesFiltrados(resultados);
  };

  const mostrarDetallesPersonaje = (personaje) => {
    setPersonajeSeleccionado(personaje);
    setShowModal(true);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <img
          src="https://1000marcas.net/wp-content/uploads/2023/05/Breaking-Bad-Logo.jpg"
          alt="Breaking Bad Logo"
          className="mx-auto mb-6"
          style={{ width: '350px', height: '200px' }}
        />

        <Buscador onBuscar={buscarPersonajes} />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {personajesFiltrados.map((personaje) => (
            <div
              key={personaje.nombre}
              className="group relative"
              onClick={() => mostrarDetallesPersonaje(personaje)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={personaje.imagen}
                  alt={personaje.nombre}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {personaje.nombre}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{`Edad: ${personaje.edad}`}</p>
                  <p className="mt-1 text-sm text-gray-500">{`Nacionalidad: ${personaje.nacionalidad}`}</p>
                  <p className="mt-1 text-sm text-gray-500">{`Género: ${personaje.genero}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <Modal personaje={personajeSeleccionado} handleClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default App;
