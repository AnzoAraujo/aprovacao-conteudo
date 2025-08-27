import React from 'react';

// Importa os estilos da biblioteca. Essencial para o carrossel funcionar!
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Importa as imagens da pasta assets
import image1 from '../assets/image_01.jpg';
import image2 from '../assets/image_02.jpg';
import image3 from '../assets/image_03.jpg';
import image4 from '../assets/image_04.jpg';
import image5 from '../assets/image_05.jpg';


const imagens = [image1, image2, image3, image4, image5];

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={true}
      showStatus={false}
      thumbWidth={40}
      interval={3000} // Tempo de transição em milissegundos
    >
        {imagens.map((src, index) => (
            <div key={index}>
            <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
        ))}
    </Carousel>
  );
};

export default ImageCarousel;