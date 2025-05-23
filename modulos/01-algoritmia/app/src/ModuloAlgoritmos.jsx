import React, { useState } from 'react';
import { CheckCircle, Globe, Target } from 'lucide-react';

const ModuloAlgoritmos = () => {
  const [nivelActual, setNivelActual] = useState('basico');

  const glosario = {
    'algoritmo': {
      es: 'Secuencia de pasos para resolver un problema',
      pt: 'Sequência de passos para resolver um problema',
      en: 'Sequence of steps to solve a problem'
    }
  };

  const niveles = {
    basico: "Analogía: Receta de cocina. Un algoritmo es como una receta.",
    intermedio: "Analogía: Arquitecto y planos. Tipos de algoritmos.",
    avanzado: "Analogía: GPS inteligente. Técnicas de diseño y optimización."
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">EGEL Plus - Algoritmos</h1>

      <div className="flex gap-2 mb-4">
        {['basico', 'intermedio', 'avanzado'].map(nivel => (
          <button
            key={nivel}
            onClick={() => setNivelActual(nivel)}
            className={\`px-4 py-2 rounded \${nivelActual === nivel ? 'bg-blue-500 text-white' : 'bg-gray-100'}\`}
          >
            {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded mb-6">
        <p>{niveles[nivelActual]}</p>
      </div>

      <div className="bg-yellow-50 p-4 rounded mb-6">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <Globe className="w-4 h-4" /> Glosario Trilingüe
        </h2>
        {Object.entries(glosario).map(([termino, traducciones]) => (
          <div key={termino} className="mb-2">
            <strong>{termino}:</strong>
            <ul className="ml-4 text-sm list-disc">
              <li><b>ES:</b> {traducciones.es}</li>
              <li><b>PT:</b> {traducciones.pt}</li>
              <li><b>EN:</b> {traducciones.en}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-right text-sm text-gray-400">
        <CheckCircle className="inline w-4 h-4 mr-1" />
        Módulo interactivo
      </div>
    </div>
  );
};

export default ModuloAlgoritmos;