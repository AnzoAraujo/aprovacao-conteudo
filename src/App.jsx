import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import './App.css'; // Vamos adicionar alguns estilos aqui

function App() {
  return (
    <div className="App">
      <Header title="Você já ouviu falar no Mounjaro?" />
      <main>
        <ImageCarousel />
      </main>
    </div>
  );
}

export default App;