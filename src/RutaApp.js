
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

  // Detalles de la galería ( Reducer )
  const [ galleryDetails, galleryDispatch ] = useReducer( galleryReducer, {}, galleryInit );

  return (
    <MainContext.Provider
      value={
        {
          paises, setPaises,
          imagenes, setImagenes,
          galleryDetails, galleryDispatch
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
