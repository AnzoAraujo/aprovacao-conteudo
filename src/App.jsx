import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import { GoogleDriveLogo, ArrowCircleRight } from "@phosphor-icons/react";
import './App.css'; // Vamos adicionar alguns estilos aqui

function App() {
  return (
    <div className="App">
      <main>
        <section className="content my-8 p-4 bg-neutral-800 text-white rounded-lg max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold">Conteúdo: Benefícios das Lentes em Resina</h2>
          

          <div className="flex justify-center space-x-4">
            <a href='https://drive.google.com/drive/folders/1Y4HJr7Lx03DwiEBNPsDW1hM6Nu4Ba4qh?usp=sharing' className="mt-4 inline-flex items-center gap-2 bg-orange-400 hover:bg-blue-60 font-bold py-2 px-4 rounded" style={{color: '#FFFFFF'}}>
              <GoogleDriveLogo size={32} /> Acessar Arquivos
            </a>
          </div>
        </section>

        <div className='inline-flex items-center justify-center gap-2 mb-2'>Arraste para o lado <ArrowCircleRight size={24} /></div>

        <ImageCarousel />

      </main>
    </div>
  );
}

export default App;