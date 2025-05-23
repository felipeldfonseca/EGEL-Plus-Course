import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ModuloAlgoritmos = () => {
  const [nivel, setNivel] = useState('basico');

  const conteudo = {
    basico: {
      titulo: "¿Qué es un Algoritmo?",
      texto: `
🏠 **Analogía: La Receta de Cocina**

Imagina que quieres hacer tacos. ¿Qué necesitas?

1. **Ingredientes** (datos de entrada)
2. **Pasos específicos** (instrucciones)
3. **Plato final** (resultado)

Un **algoritmo** es eso: una receta paso a paso.

**Características:**
- Finito
- Definido
- Entrada / Salida
- Efectivo

**Ejemplo:**
1. Leer A
2. Leer B
3. Si A > B, mayor = A
4. Si no, mayor = B
5. Mostrar mayor
      `,
    },
    intermedio: {
      titulo: "Tipos de Algoritmos",
      texto: `
🏗️ **Analogía: El Arquitecto**

- Planos = pseudocódigo
- Materiales = estructuras de datos
- Resultado = solución

Tipos:
- Secuenciales
- Condicionales
- Iterativos
- Recursivos
      `
    },
    avanzado: {
      titulo: "Diseño y Optimización",
      texto: `
⚡ **Analogía: GPS Inteligente**

Técnicas:
- Divide y vencerás
- Programación dinámica
- Greedy
- Backtracking

Correctitud:
- Invariante
- Precondición
- Postcondición
      `
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        EGEL Plus - Algoritmos
      </h1>

      <div className="flex justify-center mb-4 gap-2">
        {['basico', 'intermedio', 'avanzado'].map(n => (
          <button
            key={n}
            onClick={() => setNivel(n)}
            className={`px-4 py-2 rounded-lg font-medium ${nivel === n ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {n.charAt(0).toUpperCase() + n.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">{conteudo[nivel].titulo}</h2>
        <ReactMarkdown className="prose prose-blue max-w-none">
          {conteudo[nivel].texto}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ModuloAlgoritmos;