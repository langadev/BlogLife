// ImageComponent.js
import  { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig'; // Caminho para o seu arquivo de configuração do Firebase

const ImageComponent = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Erro ao obter a imagem:", error);
      }
    };

    fetchImage();
  }, [imagePath]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Imagem do Firebase" />
      ) : (
        <p>Carregando imagem...</p>
      )}
    </div>
  );
};

export default ImageComponent;
