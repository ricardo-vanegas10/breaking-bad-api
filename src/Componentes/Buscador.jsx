// Buscador.jsx
import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [filtro, setFiltro] = useState('');
  const [criterio, setCriterio] = useState('nombre');
  const [minEdad, setMinEdad] = useState('');
  const [maxEdad, setMaxEdad] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'filtro') {
      setFiltro(value);
    } else if (name === 'criterio') {
      setFiltro('');
      setCriterio(value);
    } else if (name === 'minEdad') {
      setMinEdad(value);
    } else if (name === 'maxEdad') {
      setMaxEdad(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBuscar({ filtro, criterio, rangoEdad: { min: minEdad, max: maxEdad } });
  };

  const handleLimpiar = () => {
    setFiltro('');
    setMinEdad('');
    setMaxEdad('');
    onBuscar({ filtro: '', criterio, rangoEdad: { min: '', max: '' } });
  };

  const renderOpcionesCriterio = () => {
    switch (criterio) {
      case 'nombre':
        return (
          <input
            type="text"
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm w-full mb-2 sm:mb-0"
            placeholder="Buscar por nombre"
          />
        );
      case 'edad':
        return (
          <div className="flex space-x-2">
            <input
              type="number"
              id="minEdad"
              name="minEdad"
              value={minEdad}
              onChange={handleChange}
              placeholder="Edad mínima"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm mb-2 sm:mb-0"
            />
            <input
              type="number"
              id="maxEdad"
              name="maxEdad"
              value={maxEdad}
              onChange={handleChange}
              placeholder="Edad máxima"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm mb-2 sm:mb-0"
            />
          </div>
        );
      case 'nacionalidad':
        // Renderizar opciones de nacionalidad
        return (
          <select
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm w-full mb-2 sm:mb-0"
          >
            <option value="">Seleccionar Nacionalidad</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Chile">Chile</option>
            <option value="México">México</option>
          </select>
        );
      case 'genero':
        // Renderizar opciones de género
        return (
          <select
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm w-full mb-2 sm:mb-0"
          >
            <option value="">Seleccionar Género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <label htmlFor="criterio" className="block text-sm font-medium text-gray-700 mb-1">
          Buscar por:
        </label>
        <div className="flex flex-col sm:flex-row items-center">
          <select
            id="criterio"
            name="criterio"
            onChange={handleChange}
            className="mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block shadow-sm sm:text-sm w-full mb-2 sm:mb-0"
          >
            <option value="nombre">Nombre</option>
            <option value="edad">Edad</option>
            <option value="nacionalidad">Nacionalidad</option>
            <option value="genero">Género</option>
          </select>
          {renderOpcionesCriterio()}
          <button
            type="submit"
            className="mt-2 sm:mt-0 ml-0 sm:ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800 w-full sm:w-auto"
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={handleLimpiar}
            className="mt-2 sm:mt-0 ml-0 sm:ml-2 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-auto"
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buscador;
