
import { useReducer, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainContext from './context/MainContext';

import NavBar from './components/NavBar';
import DiarioScreen from './screens/DiarioScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import { galleryReducer, galleryInit } from './helpers/galleryReducer';

const RutaApp = () => {

  // Listado de países
  const [ paises, setPaises ] = useState( [] );
  
  // Listado de Imágenes de la galería
  const [ imagenes, setImagenes ] = useState( [] );

  // State y funciones del Modal de la Galería de Imágenes
  const [ showGalleryModal, setShowGalleryModal ] = useState( false );
  const [ imgInfoModal, setImgInfoModal ] = useState({});
  const handleCloseGalleryModal = () => {
    setShowGalleryModal( false );
  }
  const handleShowGalleryModal = ( imgInfo = {} ) => {
    setImgInfoModal( imgInfo );
    setShowGalleryModal( true );
  };

  // Detalles de la galería ( Reducer )
  const [ galleryDetails, galleryDispatch ] = useReducer( galleryReducer, {}, galleryInit );

  return (
    <MainContext.Provider
      value={
        {
          
          paises, setPaises,
          imagenes, setImagenes,

          galleryDetails, galleryDispatch,

          // De Modal de la Galería de Imágenes
          showGalleryModal, setShowGalleryModal,
          imgInfoModal, setImgInfoModal,
          handleCloseGalleryModal, handleShowGalleryModal,

        }
      }
    >
      <NavBar />
      <Routes>
        <Route index element={ <HomeScreen />} />
        <Route path='galeria' element={ <GalleryScreen /> } />
        <Route path='diario' element={ <DiarioScreen /> } />
        <Route path='*' element={ <Navigate to='/' replace={ true } /> } />
      </Routes>
      <Footer />
    </MainContext.Provider>
  )
}

export default RutaApp
